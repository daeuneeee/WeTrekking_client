import * as S from "./crewSubCommentWrite.styles";
import { ICrewSubCommentWriteUiProps } from "./crewSubCommentWrite.types";

const CrewSubCommentWriteUi = ({
  onClickComment,
  onChangeSubComment,
  subComment,
}: ICrewSubCommentWriteUiProps) => {
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
