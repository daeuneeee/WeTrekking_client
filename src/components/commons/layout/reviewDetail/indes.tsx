import styled from "@emotion/styled";
import ReviewDetailPage from "../../../../../pages/reviews/[reviewId]";

const ReviewDetailLayout = () => {
  return (
    <>
      <Wrapper>
        <ReviewDetailPage />
      </Wrapper>
    </>
  );
};

export default ReviewDetailLayout;

const Wrapper = styled.div`
  width: 35%;
  /* background-color: orange; */
`;
