import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import ReviewDetailPage from "./[reviewId]";

const FETCH_REVIEWS = gql`
  query fetchReviewBoards {
    fetchReviewBoards {
      id
      title
      review
      star
      like
    }
  }
`;

const ReviewListPage = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const { data } = useQuery(FETCH_REVIEWS);
  console.log(data);
  const onClickHello = () => {
    setIsOpenSideBar((prev) => !prev);
  };

  return (
    <Wrapper>
      {data?.fetchReviewBoards.map((ReviewsMap) => (
        <Container onClick={onClickHello} key={ReviewsMap.id}>
          <div>제목: {ReviewsMap.title}</div>
          <div>내용: {ReviewsMap.review}</div>
        </Container>
      ))}
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

const Container = styled.div`
  width: 100px;
  height: 100px;
`;
