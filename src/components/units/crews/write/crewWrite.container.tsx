import { ChangeEvent, useEffect, useState } from "react";
import CrewWriteUi from "./crewWrite.presenter";
import type { Moment } from "moment";
import { DatePickerProps, Modal } from "antd";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_CREW_BOARD,
  UPDATE_CREW_BOARD,
  UPLOAD_FILES_CREW,
} from "./crewWrite.queries";
import moment from "moment";
import { RangePickerProps } from "antd/lib/date-picker";
import { useRouter } from "next/router";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { Address } from "react-daum-postcode";
import { ICrewWriteProps, IFormData } from "./crewWrite.types";
import {
  IMutation,
  IQuery,
  IQueryFetchBoardImageArgs,
  IQueryFetchCrewBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARD_IMAGE,
  FETCH_CREW_BOARD,
} from "../detail/crewDetail.queries";
import { useRecoilState } from "recoil";
import { isMountainModalOpenState } from "../../../../store";

// const schema = yup.object({
//   title: yup.string().required("제목을 입력해주세요"),
//   review: yup.string().required("내용을 입력해주세요"),
// });

const CrewWrite = ({ isEdit }: ICrewWriteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("male");
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const [editImageUrls, setEditImageUrls] = useState<any>(["", "", "", ""]);
  const [files, setFiles] = useState<any>();
  const [isMountainModalOpen, setIsMountainModalOpen] = useRecoilState(
    isMountainModalOpenState
  );

  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  const [createCrewBoard] =
    useMutation<Pick<IMutation, "createCrewBoard">>(CREATE_CREW_BOARD);
  const [uploadFileCrew] =
    useMutation<Pick<IMutation, "uploadFilesForCrewBoard">>(UPLOAD_FILES_CREW);
  const [updateCrewBoard] =
    useMutation<Pick<IMutation, "updateCrewBoard">>(UPDATE_CREW_BOARD);

  const { data: boardData } = useQuery<
    Pick<IQuery, "fetchCrewBoard">,
    IQueryFetchCrewBoardArgs
  >(FETCH_CREW_BOARD, {
    variables: { crewBoardId: String(router.query.crewId) },
  });

  const { data: crewImg } = useQuery<
    Pick<IQuery, "fetchBoardImage">,
    IQueryFetchBoardImageArgs
  >(FETCH_BOARD_IMAGE, {
    variables: {
      crewBoardId: String(router.query.crewId),
    },
  });

  const imgDatas = crewImg?.fetchBoardImage.map((el) => {
    return el.imgUrl;
  });

  console.log(imgDatas);

  const crewImgMap = crewImg?.fetchBoardImage.map(
    (crewImgMap) => crewImgMap.imgUrl
  );

  useEffect(() => {
    isEdit
      ? setGender(String(boardData?.fetchCrewBoard.gender))
      : setGender("male");
    setValue("title", boardData?.fetchCrewBoard.title);
    setValue("addressDetail", boardData?.fetchCrewBoard.addressDetail);
    setValue("dues", boardData?.fetchCrewBoard.dues);
    setValue("description", boardData?.fetchCrewBoard.description);
    setValue("address", boardData?.fetchCrewBoard.address);
    isEdit
      ? setIsClicked(String(boardData?.fetchCrewBoard.gender))
      : setIsClicked("male");
    setEditImageUrls([crewImgMap]);
  }, [boardData]);

  const onChangeDescription = (value: string) => {
    setValue("description", value);
    void trigger("description");
  };

  const onChangeDate: DatePickerProps["onChange"] = (
    date: Moment | null,
    dateString: string
  ) => {
    setDate(dateString);
  };
  const onChangeTime = (time: Moment | null, timeString: string) => {
    setTime(timeString);
  };

  const onChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setIsClicked(event.target.id);
      setGender(event.target.value);
    }
  };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    onToggleModal();
    setAddress(address.address);
  };

  const onChangePeople = (event: number) => {
    setPeople(event);
  };

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current && current < moment().endOf("day");
  };

  const onClickMountainSearch = () => {
    setIsMountainModalOpen((prev) => !prev);
  };

  const onClickRegister = async (data: IFormData) => {
    try {
      if (files === undefined) return;
      const results = await Promise.all(
        files.map(
          async (files: any) =>
            files && uploadFileCrew({ variables: { files } })
        )
      );
      const resultUrls = results.map((el) =>
        el ? el.data?.uploadFilesForCrewBoard : ""
      );
      const resultUrlsFlat = resultUrls.flat();

      data.date = date;
      data.dateTime = time;
      data.dues = Number(data.dues);
      data.peoples = people;
      data.address = address;
      data.gender = gender;
      data.thumbnail = resultUrlsFlat[0];
      const result = await createCrewBoard({
        variables: { createCrewBoardInput: data, imgURL: resultUrlsFlat },
        update(cache) {
          cache.modify({ fields: () => {} });
        },
      });
      await router.push(`/crews/${String(result?.data?.createCrewBoard.id)}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onChangeFile =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  const editImageUrlsFlat = editImageUrls?.flat();

  const onClickEdit = async (data: IFormData) => {
    const newEditImageUrls = [...editImageUrls];
    if (files === undefined) return;
    const results = await Promise.all(
      files.map((el: any) =>
        el ? uploadFileCrew({ variables: { files: el } }) : ""
      )
    );

    console.log(files);

    const updateImgUrls = results.map((el, index) => {
      return el ? el.data?.uploadFilesForCrewBoard : newEditImageUrls[index];
    });

    const updateImgUrlsFlat = updateImgUrls.flat();

    // const updateImages = [...imgDatas];

    data.dues = Number(data.dues);
    if (date) {
      data.date = date;
    } else {
      data.date = String(boardData?.fetchCrewBoard.date);
    }
    if (time) {
      data.dateTime = time;
    } else {
      data.dateTime = String(boardData?.fetchCrewBoard.dateTime);
    }
    if (people) {
      data.peoples = people;
    } else {
      data.peoples = Number(boardData?.fetchCrewBoard.peoples);
    }
    if (gender) data.gender = gender;
    // const boardImgData = crewImg?.fetchBoardImage;
    // const updateImg = [...boardImgData];

    console.log(updateImgUrlsFlat);

    await updateCrewBoard({
      variables: {
        crewBoardId: router.query.crewId,
        updateCrewBoardInput: data,
        imgURL: updateImgUrlsFlat,
      },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    void router.push(`/crews/${String(router.query.crewId)}`);
  };

  return (
    <CrewWriteUi
      onChangeDate={onChangeDate}
      onChangeTime={onChangeTime}
      isOpen={isOpen}
      handleComplete={handleComplete}
      onToggleModal={onToggleModal}
      onChangeRadio={onChangeRadio}
      isClicked={isClicked}
      onChangePeople={onChangePeople}
      people={people}
      register={register}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      address={address}
      disabledDate={disabledDate}
      onChangeFile={onChangeFile}
      imageUrls={imageUrls}
      isEdit={isEdit}
      data={boardData}
      onChangeDescription={onChangeDescription}
      onClickEdit={onClickEdit}
      editImageUrlsFlat={editImageUrlsFlat}
      onClickMountainSearch={onClickMountainSearch}
      isMountainModalOpen={isMountainModalOpen}
    />
  );
};

export default CrewWrite;
