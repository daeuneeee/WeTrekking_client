import { useRouter } from "next/router";
import * as S from "./lending.styles";

const LendingPageC = () => {
  const router = useRouter();

  const onClickToCrewList = () => {
    void router.push("/crews");
  };
  return (
    <S.Container style={{ backgroundImage: `url(/images/main/main-bg03.png)` }}>
      <S.MainTextBox>
        <img src="/images/main/main-text.png" alt="위트레킹 레터" />
        <S.CrewFindBtn onClick={onClickToCrewList}>
          크루 만나러가기
        </S.CrewFindBtn>
      </S.MainTextBox>
    </S.Container>
  );
};

export default LendingPageC;
