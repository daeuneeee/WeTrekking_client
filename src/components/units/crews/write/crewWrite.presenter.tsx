import * as S from "./crewWrite.styles";
import "antd/dist/antd.css";
import { DatePicker, Modal, Slider } from "antd";
import { ICrewWriteUiProps } from "./crewWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { mainColor } from "../../../../commons/styles/color";

const CrewWriteUi = ({
  onChangeTime,
  onChangeDate,
  register,
  handleSubmit,
  isOpen,
  handleComplete,
  onToggleModal,
  onChangeRadio,
  isClicked,
  people,
  onChangePeople,
  onClickRegister,
  address,
  disabledDate,
}: ICrewWriteUiProps) => {
  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <S.Wrapper>
        <S.Header>
          <S.Title>크루 등록하기</S.Title>
          <S.ImgBox>
            <S.DefaultFileInput type="file" id="file01" />
            <S.DefaultFileInput type="file" id="file02" />
            <S.DefaultFileInput type="file" id="file03" />
            <S.DefaultFileInput type="file" id="file04" />
            <S.MainImgBox htmlFor="file01">
              <S.MainImg src="/images/write/camera.png" />
              <S.MainText>사진을 등록 해주세요.</S.MainText>
              <S.SubText>사진은 최대 4장까지 등록 가능합니다.</S.SubText>
              <S.SubText>여기 보이는 사진이 썸네일이 됩니다.</S.SubText>
            </S.MainImgBox>
            <S.SubImgBox>
              <S.SubImg htmlFor="file02">
                <img src="/images/write/camera.png" />
              </S.SubImg>
              <S.SubImg htmlFor="file03">
                <img src="/images/write/camera.png" />
              </S.SubImg>
              <S.SubImg htmlFor="file04">
                <img src="/images/write/camera.png" />
              </S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
        </S.Header>
        <S.UnderLine></S.UnderLine>
        <S.Body>
          <S.InputBox>
            <S.Label>제목</S.Label>
            <S.Input {...register("title")} />
          </S.InputBox>
          <S.InputBox>
            <S.Label>산</S.Label>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Label>등산 일자</S.Label>
            <S.DateBox>
              <S.Date direction="vertical">
                <DatePicker
                  disabledDate={disabledDate}
                  onChange={onChangeDate}
                  placeholder="등록 날짜를 선택해주세요."
                />
              </S.Date>
              <S.Time
                use12Hours
                format="h:mm a"
                onChange={onChangeTime}
                placeholder="등록 시간을 선택해주세요."
              />
            </S.DateBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 장소</S.Label>
            <S.Input readOnly defaultValue={address} />
            <S.AddressBox>
              <S.AddressDetail {...register("addressDetail")} />
              <S.AddressBtn type="button" onClick={onToggleModal}>
                주소찾기
              </S.AddressBtn>
              {isOpen && (
                <Modal
                  title="주소검색"
                  open={isOpen}
                  onCancel={onToggleModal}
                  footer={null}
                >
                  <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
              )}
            </S.AddressBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>회비</S.Label>
            <S.Input {...register("dues")} />
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 성별</S.Label>
            <S.GenderBox>
              {isClicked === "남자만" ? (
                <S.Gender01
                  htmlFor="남자만"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  남자만
                </S.Gender01>
              ) : (
                <S.Gender01 htmlFor="남자만">남자만</S.Gender01>
              )}
              {isClicked === "여자만" ? (
                <S.Gender02
                  htmlFor="여자만"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  여자만
                </S.Gender02>
              ) : (
                <S.Gender02 htmlFor="여자만">여자만</S.Gender02>
              )}
              {isClicked === "상관없음" ? (
                <S.Gender03
                  htmlFor="상관없음"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  상관없음
                </S.Gender03>
              ) : (
                <S.Gender03 htmlFor="상관없음">상관없음</S.Gender03>
              )}
              <S.RadioInput
                type="radio"
                name="gender"
                id="남자만"
                onChange={onChangeRadio}
                checked={isClicked === "남자만"}
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="여자만"
                onChange={onChangeRadio}
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="상관없음"
                onChange={onChangeRadio}
              />
            </S.GenderBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 인원</S.Label>
            <S.PeopleBox>
              <S.PeopleSlider
                defaultValue={0}
                max={15}
                onChange={onChangePeople}
              />
              <S.People>{people}명</S.People>
            </S.PeopleBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>상세 내용</S.Label>
            <S.TextArea {...register("description")} />
          </S.InputBox>
        </S.Body>
        <S.Footer>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.RegisterBtn>등록</S.RegisterBtn>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
};

export default CrewWriteUi;
