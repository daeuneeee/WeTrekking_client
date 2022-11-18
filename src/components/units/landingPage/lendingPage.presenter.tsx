import styled from "@emotion/styled";
import LendingPageA from "./lendingPageA";
import LendingPageB from "./lendingPageB";
import LendingPageC from "./lendingPageC";

const LendingPageUi = () => {
  return (
    <Wrapper>
      <LendingPageA />
      <LendingPageB />
      <LendingPageC />
    </Wrapper>
  );
};

export default LendingPageUi;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    background-color: transparent;
  }

  & > div {
    scroll-snap-align: start;
    height: 100vh;
  }
`;
