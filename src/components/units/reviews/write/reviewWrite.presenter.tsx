import * as S from "./reviewWrite.styles";
import "antd/dist/antd.css";
import { ICrewReviewWriteUiProps } from "./reviewWrite.types";

const CrewReviewWriteUi = ({
  register,
  handleSubmit,
  onChangeRate,
  onClickRegister,
  onChangeFile,
  imageUrls,
  errors,
}: ICrewReviewWriteUiProps) => {
  return (
    <form onSubmit={handleSubmit(onClickRegister)}>
      <S.Wrapper>
        <S.Container>
          <S.Title>리뷰쓰기</S.Title>
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
                backgroundImage: imageUrls[0] ? `url(${imageUrls[0]})` : "",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <S.MainImgHidden
                style={{ visibility: imageUrls[0] ? "hidden" : undefined }}
              >
                <S.MainImg src="/images/write/camera.png" />
                <S.MainText>사진을 등록 해주세요.</S.MainText>
                <S.SubText>사진은 최대 4장까지 등록 가능합니다.</S.SubText>
                <S.SubText>여기 보이는 사진이 썸네일이 됩니다.</S.SubText>
              </S.MainImgHidden>
            </S.MainImgBox>
            <S.SubImgBox>
              <S.SubImg
                htmlFor="file02"
                style={{
                  backgroundImage: imageUrls[1] ? `url(${imageUrls[1]})` : "",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{ visibility: imageUrls[1] ? "hidden" : undefined }}
                />
              </S.SubImg>
              <S.SubImg
                htmlFor="file03"
                style={{
                  backgroundImage: imageUrls[2] ? `url(${imageUrls[2]})` : "",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{ visibility: imageUrls[2] ? "hidden" : undefined }}
                />
              </S.SubImg>
              <S.SubImg
                htmlFor="file04"
                style={{
                  backgroundImage: imageUrls[3] ? `url(${imageUrls[3]})` : "",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src="/images/write/camera.png"
                  style={{ visibility: imageUrls[3] ? "hidden" : undefined }}
                />
              </S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
          <S.InputBox>
            <S.Label>제목</S.Label>
            <S.Input
              placeholder="제목을 입력해주세요."
              {...register("title")}
            />
            <S.Error>{errors.title?.message}</S.Error>
          </S.InputBox>
          <S.InputBox>
            <S.Label>별점</S.Label>
            <S.StarBox>
              <S.Star allowHalf defaultValue={5} onChange={onChangeRate} />
            </S.StarBox>
          </S.InputBox>
        </S.Container>
        <S.InputBox>
          <S.Label>내용</S.Label>
          <S.TextArea
            placeholder="내용을 입력해주세요."
            {...register("review")}
          />
          <S.Error>{errors.review?.message}</S.Error>
        </S.InputBox>
        <S.BtnBox>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.RegisterBtn>등록</S.RegisterBtn>
        </S.BtnBox>
      </S.Wrapper>
    </form>
  );
};

export default CrewReviewWriteUi;
