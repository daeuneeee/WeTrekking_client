import * as S from "./lending.styles";

const LendingPageA = () => {
  return (
    <S.Container style={{ backgroundImage: `url(/images/main/main-bg01.png)` }}>
      <S.MainTextBox>
        <S.MainText>혼자 등산하기 재미없지?</S.MainText>
        <img src="/images/main/main-sub-text01.png" alt="위트레킹 레터" />
        <S.MainText>하는게 어때?</S.MainText>
      </S.MainTextBox>
      <S.ScrollBox>
        <S.ScrollText>SCROLL</S.ScrollText>
        <S.ScrollIcon src="/images/main/down-arrow.png" alt="화살이미지" />
      </S.ScrollBox>
    </S.Container>
  );
};

export default LendingPageA;
