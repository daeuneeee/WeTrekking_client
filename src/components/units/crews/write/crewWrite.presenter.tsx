import * as S from "./crewWrite.styles";
import "antd/dist/antd.css";

const CrewWriteUi = () => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Title>크루 등록하기</S.Title>
          <S.ImgBox>
            <S.MainImgBox>
              <S.MainImg src="/images/write/camera.png" />
              <p>사진을 등록 해주세요.</p>
              <p>사진은 최대 4장까지 등록 가능합니다.</p>
              <p>여기 보이는 사진이 썸네일이 됩니다.</p>
            </S.MainImgBox>
            <S.SubImgBox>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
        </S.Header>
      </S.Wrapper>
    </>
  );
};

export default CrewWriteUi;
