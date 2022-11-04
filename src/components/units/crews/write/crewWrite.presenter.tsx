import * as S from "./crewWrite.styles";
import "antd/dist/antd.css";
import { DatePicker, Modal, Slider } from "antd";
import { ICrewWriteUiProps } from "./crewWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { mainColor } from "../../../../commons/styles/color";

const CrewWriteUi = ({
  onChangeTime,
  onChangeDate,
  isOpen,
  handleComplete,
  onToggleModal,
  onChangeRadio,
  isClicked,
  people,
  onChangePeople,
}: ICrewWriteUiProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>크루 등록하기</S.Title>
          <S.ImgBox>
            <S.MainImgBox>
              <S.MainImg src="/images/write/camera.png" />
              <S.MainText>사진을 등록 해주세요.</S.MainText>
              <S.SubText>사진은 최대 4장까지 등록 가능합니다.</S.SubText>
              <S.SubText>여기 보이는 사진이 썸네일이 됩니다.</S.SubText>
            </S.MainImgBox>
            <S.SubImgBox>
              <S.SubImg>
                <img src="/images/write/camera.png" />
              </S.SubImg>
              <S.SubImg>
                <img src="/images/write/camera.png" />
              </S.SubImg>
              <S.SubImg>
                <img src="/images/write/camera.png" />
              </S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
        </S.Header>
        <S.UnderLine></S.UnderLine>
        <S.Body>
          <S.InputBox>
            <S.Label>제목</S.Label>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Label>산</S.Label>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Label>등산 날짜</S.Label>
            <S.DateBox>
              <S.Date direction="vertical">
                <DatePicker
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
            <S.Input readOnly />
            <S.AddressBox>
              <S.AddressDetail />
              <S.AddressBtn type="button" onClick={onToggleModal}>
                주소찾기
              </S.AddressBtn>
              {isOpen && (
                <Modal
                  title="주소검색"
                  visible={isOpen}
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
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 성별</S.Label>
            <S.GenderBox>
              {isClicked === "gender01" ? (
                <S.Gender01
                  htmlFor="gender01"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  남자만
                </S.Gender01>
              ) : (
                <S.Gender01 htmlFor="gender01">남자만</S.Gender01>
              )}
              {isClicked === "gender02" ? (
                <S.Gender02
                  htmlFor="gender02"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  여자만
                </S.Gender02>
              ) : (
                <S.Gender02 htmlFor="gender02">여자만</S.Gender02>
              )}
              {isClicked === "gender03" ? (
                <S.Gender03
                  htmlFor="gender03"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  상관없음
                </S.Gender03>
              ) : (
                <S.Gender03 htmlFor="gender03">상관없음</S.Gender03>
              )}
              <S.RadioInput
                type="radio"
                name="gender"
                id="gender01"
                onChange={onChangeRadio}
                checked={isClicked === "gender01"}
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="gender02"
                onChange={onChangeRadio}
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="gender03"
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
                style={{ width: "500px" }}
                onChange={onChangePeople}
              />
              <S.People>{people}명</S.People>
            </S.PeopleBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>상세 내용</S.Label>
            <S.TextArea />
          </S.InputBox>
        </S.Body>
        <S.Footer>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.RegisterBtn>등록</S.RegisterBtn>
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default CrewWriteUi;
