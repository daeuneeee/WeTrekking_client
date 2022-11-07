import * as S from "./reviewWrite.styles";
import "antd/dist/antd.css";

const CrewReviewWriteUi = ({ onChangeRate, rate }) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Title>리뷰쓰기</S.Title>
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
          <S.InputBox>
            <S.Label>제목</S.Label>
            <S.Input placeholder="제목을 입력해주세요." />
          </S.InputBox>
          <S.InputBox>
            <S.Label>별점</S.Label>
            <S.StarBox>
              <S.Star allowHalf defaultValue={5} onChange={onChangeRate} />
              <S.Rating>{rate}/5</S.Rating>
            </S.StarBox>
          </S.InputBox>
        </S.Container>
        <S.InputBox>
          <S.Label>내용</S.Label>
          <S.TextArea placeholder="내용을 입력해주세요." />
        </S.InputBox>
        <S.BtnBox>
          <S.CancelBtn>취소</S.CancelBtn>
          <S.RegisterBtn>등록</S.RegisterBtn>
        </S.BtnBox>
      </S.Wrapper>
    </>
  );
};

export default CrewReviewWriteUi;
