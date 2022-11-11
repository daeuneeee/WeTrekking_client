import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { reviewIdState } from "../../../../store";
import { FETCH_REVIEW_COMMENTS } from "../../reviews/detail/reviewDetail.queries";

const CREATE_REVIEW_COMMENT = gql`
  mutation createReviewComment(
    $reviewBoardId: String!
    $reviewComment: String!
  ) {
    createReviewComment(
      reviewBoardId: $reviewBoardId
      reviewComment: $reviewComment
    ) {
      id
      reviewComment
    }
  }
`;

const ReviewCommentWrite = () => {
  // const router = useRouter();
  const [reviewComment, setReviewComment] = useState("");
  const [reviewId] = useRecoilState(reviewIdState);

  const [createReviewComment] = useMutation(CREATE_REVIEW_COMMENT);

  const onChangeComment = (event) => {
    setReviewComment(event.target.value);
  };

  const onClickRegister = async () => {
    try {
      if (reviewComment === "") {
        Modal.error({ content: "내용을 입력해주세요!" });
      }
      if (reviewComment !== "") {
        await createReviewComment({
          variables: { reviewBoardId: reviewId, reviewComment },
          refetchQueries: [
            {
              query: FETCH_REVIEW_COMMENTS,
              variables: { reviewBoardId: reviewId },
            },
          ],
        });
        document.getElementById("clear").value = "";
        setReviewComment("");
      }
    } catch (error) {}
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Contents
            placeholder="내용을 입력해주세요"
            onChange={onChangeComment}
            id="clear"
          ></Contents>
          <RegisterBox>
            <RegisterBtn onClick={onClickRegister}>등록</RegisterBtn>
          </RegisterBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default ReviewCommentWrite;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 140px;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 16px 24px;
  border-radius: 4px;
`;

const Contents = styled.textarea`
  width: 100%;
  height: 50px;
  border: none;
  resize: none;
  margin-top: 12px;
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 5px;
  outline: none;
  ::placeholder {
    color: #999;
  }
`;

const RegisterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RegisterBtn = styled.button`
  font-weight: 500;
  font-size: 1.3rem;
  color: #999;
  border: none;
  background: transparent;
  cursor: pointer;
`;
