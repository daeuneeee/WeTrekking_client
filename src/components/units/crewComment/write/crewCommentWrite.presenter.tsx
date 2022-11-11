import * as S from "./crewCommentWrite.styles";

const CrewCommentWriteUi = ({ onChangeComment, onClickRegister, comment }) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Contents
            placeholder="내용을 입력해주세요"
            onChange={onChangeComment}
            value={comment}
            id="clear"
          ></S.Contents>
          <S.RegisterBox>
            <S.RegisterBtn onClick={onClickRegister}>등록</S.RegisterBtn>
          </S.RegisterBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CrewCommentWriteUi;
