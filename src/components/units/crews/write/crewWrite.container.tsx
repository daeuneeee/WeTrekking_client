import { ChangeEvent, useEffect, useState } from "react";
import CrewWriteUi from "./crewWrite.presenter";
import type { Moment } from "moment";
import { DatePickerProps } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_CREW_BOARD, UPLOAD_FILES_CREW } from "./crewWrite.queries";
import moment from "moment";
import { RangePickerProps } from "antd/lib/date-picker";
import { useRouter } from "next/router";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { Address } from "react-daum-postcode";
import { IFormData } from "./crewWrite.types";

// const schema = yup.object({
//   title: yup.string().required("제목을 입력해주세요"),
//   review: yup.string().required("내용을 입력해주세요"),
// });

const CrewWrite = () => {
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
    setGender("male");
  }, []);

  const router = useRouter();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  const [createCrewBoard] = useMutation(CREATE_CREW_BOARD);
  const [uploadFileCrew] = useMutation(UPLOAD_FILES_CREW);

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
    } catch (error) {}
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
    />
  );
};

export default CrewWrite;
