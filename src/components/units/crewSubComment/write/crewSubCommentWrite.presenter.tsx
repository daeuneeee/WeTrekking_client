import * as S from "./crewSubCommentWrite.styles";

const CrewSubCommentWriteUi = ({
  onClickComment,
  onChangeSubComment,
  subComment,
}) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Contents
            onChange={onChangeSubComment}
            placeholder="내용을 입력해주세요"
            value={subComment}
          />
          <S.RegisterBox>
            <S.RegisterBtn onClick={onClickComment}>등록</S.RegisterBtn>
          </S.RegisterBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CrewSubCommentWriteUi;
