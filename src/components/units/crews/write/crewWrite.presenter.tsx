import * as S from "./crewWrite.styles";
import "antd/dist/antd.css";
import { DatePicker, Modal } from "antd";
import { ICrewWriteUiProps } from "./crewWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";
import { mainColor } from "../../../../commons/styles/color";
import "react-quill/dist/quill.snow.css";
import MountainModal from "../../../commons/modals/mountainModal";

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
  onChangeFile,
  imageUrls,
  isEdit,
  data,
  onClickEdit,
  onChangeDescription,
  editImageUrlsFlat,
  onClickMountainSearch,
  isMountainModalOpen,
  mountainAddress,
  errors,
  dateError,
  timeError,
  addressError,
}: ICrewWriteUiProps) => {
  return (
    <form onSubmit={handleSubmit(isEdit ? onClickEdit : onClickRegister)}>
      <S.Wrapper>
        <S.Header>
          <S.Title>{isEdit ? "크루 수정하기" : "크루 등록하기"}</S.Title>
          <S.ImgBox>
            <S.DefaultFileInput
              type="file"
              id="file01"
              onChange={onChangeFile(0)}
            />
            <S.DefaultFileInput
              type="file"
              id="file02"
              onChange={onChangeFile(1)}
            />
            <S.DefaultFileInput
              type="file"
              id="file03"
              onChange={onChangeFile(2)}
            />
            <S.DefaultFileInput
              type="file"
              id="file04"
              onChange={onChangeFile(3)}
            />
            <S.MainImgBox
              htmlFor="file01"
              style={{
                backgroundImage: imageUrls[0]
                  ? `url(${imageUrls[0].replace(" ", "20%")})`
                  : `url(https://storage.googleapis.com/${String(
                      editImageUrlsFlat?.[0]
                    )})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <S.MainImgHidden
                style={{
                  visibility:
                    imageUrls[0] || editImageUrlsFlat?.[0]
                      ? "hidden"
                      : undefined,
                }}
              >
                <S.MainImg src="/images/write/camera.png" alt="카메라이미지" />
                <S.MainText>사진을 등록 해주세요.</S.MainText>
                {/* <S.SubText>사진은 최대 4장까지 등록 가능합니다.</S.SubText> */}
                <S.SubText>여기 보이는 사진이 썸네일이 됩니다.</S.SubText>
                <S.SubTextError>썸네일은 필수입니다.</S.SubTextError>
              </S.MainImgHidden>
            </S.MainImgBox>
            <S.SubImgBox>
              <S.SubImg
                htmlFor="file02"
                style={{
                  backgroundImage: imageUrls[1]
                    ? `url(${imageUrls[1].replace(" ", "20%")})`
                    : `url(https://storage.googleapis.com/${String(
                        editImageUrlsFlat?.[1]
                      )})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{
                    visibility:
                      imageUrls[1] || editImageUrlsFlat?.[1]
                        ? "hidden"
                        : undefined,
                  }}
                  alt="카메라이미지"
                />
              </S.SubImg>
              <S.SubImg
                htmlFor="file03"
                style={{
                  backgroundImage: imageUrls[2]
                    ? `url(${imageUrls[2].replace(" ", "20%")})`
                    : `url(https://storage.googleapis.com/${String(
                        editImageUrlsFlat?.[2]
                      )})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{
                    visibility:
                      imageUrls[2] || editImageUrlsFlat?.[2]
                        ? "hidden"
                        : undefined,
                  }}
                  alt="카메라이미지"
                />
              </S.SubImg>
              <S.SubImg
                htmlFor="file04"
                style={{
                  backgroundImage: imageUrls[3]
                    ? `url(${imageUrls[3].replace(" ", "20%")})`
                    : `url(https://storage.googleapis.com/${String(
                        editImageUrlsFlat?.[3]
                      )})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{
                    visibility:
                      imageUrls[3] || editImageUrlsFlat?.[3]
                        ? "hidden"
                        : undefined,
                  }}
                  alt="카메라이미지"
                />
              </S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
        </S.Header>
        <S.UnderLine></S.UnderLine>
        <S.Body>
          <S.InputBox>
            <S.Label>제목</S.Label>
            <S.Input
              {...register("title")}
              // defaultValue={data?.fetchCrewBoard.title}
            />
            <S.Error>{errors.title?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>산</S.Label>
            <S.BtnInputBox>
              <S.BtnInput value={mountainAddress} />
              <S.Btn type="button" onClick={onClickMountainSearch}>
                산 찾기
              </S.Btn>
              {isMountainModalOpen && <MountainModal />}
            </S.BtnInputBox>
            <S.Error>{errors.mountain?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>등산 일자</S.Label>
            <S.DateBox>
              <S.DateTimeBox>
                <S.Date direction="vertical">
                  <DatePicker
                    // inputReadOnly
                    disabledDate={disabledDate}
                    onChange={onChangeDate}
                    // {...register("date")}
                    placeholder={
                      data
                        ? data?.fetchCrewBoard.date
                        : "등산 날짜를 선택해주세요."
                    }
                  />
                </S.Date>
                <S.Error>{errors.date?.message}</S.Error>
              </S.DateTimeBox>
              <S.DateTimeBox>
                <S.Time
                  // inputReadOnly
                  use12Hours
                  format="h:mm a"
                  onChange={onChangeTime}
                  placeholder={
                    data
                      ? data.fetchCrewBoard.dateTime
                      : "등산 시간을 선택해주세요."
                  }
                />
                <S.Error>{timeError}</S.Error>
              </S.DateTimeBox>
            </S.DateBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 장소</S.Label>
            <S.Input readOnly value={address || data?.fetchCrewBoard.address} />
            <S.Error>{errors.address?.message}</S.Error>
            <S.AddressBox>
              <S.AddressDetailBox>
                <S.BtnInputBox>
                  <S.BtnInput {...register("addressDetail")} />
                  <S.Btn type="button" onClick={onToggleModal}>
                    주소찾기
                  </S.Btn>
                </S.BtnInputBox>
                <S.Error>{addressError}</S.Error>
              </S.AddressDetailBox>
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
              <S.Error>{errors.addressDetail?.message}</S.Error>
            </S.AddressBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>회비</S.Label>
            <S.Input {...register("dues")} />
            <S.Error>{errors.dues?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 성별</S.Label>
            <S.GenderBox>
              {isClicked === "male" ? (
                <S.Gender01
                  htmlFor="male"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  남자만
                </S.Gender01>
              ) : (
                <S.Gender01 htmlFor="male">남자만</S.Gender01>
              )}
              {isClicked === "female" ? (
                <S.Gender02
                  htmlFor="female"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  여자만
                </S.Gender02>
              ) : (
                <S.Gender02 htmlFor="female">여자만</S.Gender02>
              )}
              {isClicked === "any" ? (
                <S.Gender03
                  htmlFor="any"
                  style={{ backgroundColor: `${mainColor}`, color: "#fff" }}
                >
                  상관없음
                </S.Gender03>
              ) : (
                <S.Gender03 htmlFor="any">상관없음</S.Gender03>
              )}
              <S.RadioInput
                type="radio"
                name="gender"
                id="male"
                onChange={onChangeRadio}
                checked={isClicked === "male"}
                value="male"
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="female"
                onChange={onChangeRadio}
                checked={isClicked === "female"}
                value="female"
              />
              <S.RadioInput
                type="radio"
                name="gender"
                id="any"
                onChange={onChangeRadio}
                checked={isClicked === "any"}
                value="any"
              />
            </S.GenderBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>모집 인원</S.Label>
            <S.PeopleBox>
              <S.PeopleSlider
                value={
                  isEdit ? people || data?.fetchCrewBoard.peoples : people || 1
                }
                max={15}
                onChange={onChangePeople}
              />
              <S.People>
                {isEdit ? people || data?.fetchCrewBoard.peoples : people || 1}
                명
              </S.People>
            </S.PeopleBox>
          </S.InputBox>
          <S.InputBox>
            <S.Label>상세 내용</S.Label>
            <S.TextArea
              onChange={onChangeDescription}
              value={data && String(data?.fetchCrewBoard.description)}
            />
            <S.Error>{errors.description?.message}</S.Error>
          </S.InputBox>
        </S.Body>
        <S.Footer>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.RegisterBtn>{isEdit ? "수정" : "등록"}</S.RegisterBtn>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
};

export default CrewWriteUi;
