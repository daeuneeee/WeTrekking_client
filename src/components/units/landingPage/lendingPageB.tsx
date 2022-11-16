import * as S from "./lending.styles";

const LendingPageB = () => {
  return (
    <S.Container style={{ backgroundImage: `url(/images/main/main-bg02.png)` }}>
      <S.MainTextBox>
        <S.MainText>지친 일상 속에 기분 전환이 필요하다면</S.MainText>
        <img src="/images/main/main-sub-text02.png" alt="위트레킹 레터" />
      </S.MainTextBox>
      <S.ScrollBox>
        <S.ScrollText>SCROLL</S.ScrollText>
        <S.ScrollIcon src="/images/main/down-arrow.png" alt="화살이미지" />
      </S.ScrollBox>
    </S.Container>
  );
};

export default LendingPageB;
