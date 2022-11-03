import { DatePicker, Space, TimePicker, Slider } from "antd";
import "antd/dist/antd.css";
import { ICrewWriteUiProps } from "./crewWriteTest.types";

const CrewWriteUiTest = ({
  peoples,
  onChangeTime,
  onChangeDate,
  onChangePeoples,
  register,
  handleSubmit,
  onClickRegister,
}: ICrewWriteUiProps) => {
  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="제목"
          {...register("title")}
        />
        <Space direction="vertical">
          <DatePicker onChange={onChangeDate} />
        </Space>
        <TimePicker use12Hours format="h:mm a" onChange={onChangeTime} />
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="주소"
          {...register("address")}
        />
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="상세주소"
          {...register("addressDetail")}
        />
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="회비"
          {...register("dues")}
        />
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="추가설명"
          {...register("description")}
        />
        <input
          style={{ width: "384px", height: "52px", fontSize: "16px" }}
          placeholder="성별"
          {...register("gender")}
        />
        <Slider
          defaultValue={0}
          max={15}
          style={{ width: "360px" }}
          onChange={onChangePeoples}
        />
        <div>{peoples}</div>
        <button style={{ width: "320px", height: "52px", fontSize: "16px" }}>
          등록
        </button>
      </div>
    </form>
  );
};

export default CrewWriteUiTest;
