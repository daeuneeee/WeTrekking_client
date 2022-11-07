import styled from "@emotion/styled";
import { useState } from "react";
import ReviewDetailPage from "./[reviewId]";

const ReviewListPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const onClickHello = () => {
    setIsOpenSideBar((prev) => !prev);
  };

  return (
    <Wrapper>
      <div>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
        <button
          onClick={onClickHello}
          style={{ width: "200px", height: "50px" }}
        >
          안녕
        </button>
      </div>
      {isOpenSideBar && (
        <ReviewWrapper>
          <ReviewDetailPage />
        </ReviewWrapper>
      )}
    </Wrapper>
  );
};

export default ReviewListPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewWrapper = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: scroll;
`;
