import { ChangeEvent, useEffect, useState } from "react";
import CrewWriteUi from "./crewWrite.presenter";
import type { Moment } from "moment";
import { DatePickerProps, Modal } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
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
import { IMutation } from "../../../../commons/types/generated/types";

// const schema = yup.object({
//   title: yup.string().required("제목을 입력해주세요"),
//   review: yup.string().required("내용을 입력해주세요"),
// });

const CrewWrite = ({ isEdit, data }: ICrewWriteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("남자만");
  const [people, setPeople] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    isEdit ? setGender(data?.fetchCrewBoard.gender) : setGender("male");
    setValue("title", data?.fetchCrewBoard.title);
    setValue("addressDetail", data?.fetchCrewBoard.addressDetail);
    setValue("dues", data?.fetchCrewBoard.dues);
  }, [data]);

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

  const onClickRegister = async (data: IFormData) => {
    try {
      const results = await Promise.all(
        files.map(
          async (files) =>
            await (files && uploadFileCrew({ variables: { files } }))
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
      await router.push(`/crews/${String(result.data.createCrewBoard.id)}`);
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

  const onClickEdit = async (data: IFormData) => {
    // data.dues = Number(data.dues);
    // if (date) data.date = date;
    // if (time) data.dateTime = time;
    // if (people) data.peoples = people;
    // if (address) data.address = address;
    // if (gender) data.gender = gender;
    // console.log(data);
    const myVariables = {
      crewBoardId: router.query.crewId,
      updateCrewBoardInput: {},
    };
    if (date) myVariables.updateCrewBoardInput.date = date;
    if (time) myVariables.updateCrewBoardInput.dateTime = time;
    if (people) myVariables.updateCrewBoardInput.peoples = people;
    if (address) myVariables.updateCrewBoardInput.address = address;
    if (gender) myVariables.updateCrewBoardInput.gender = gender;

    const result = await updateCrewBoard({ variables: myVariables });
    console.log(result);
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
      data={data}
      onChangeDescription={onChangeDescription}
      onClickEdit={onClickEdit}
    />
  );
};

export default CrewWrite;
