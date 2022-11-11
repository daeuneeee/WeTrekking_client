import { Avatar } from "@mui/material";
import * as S from "./reviewDetail.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";
import ReviewCommentList from "../../reviewComment/list/reviewCommentList.container";
import ReviewCommentWrite from "../../reviewComment/write";
import { IReviewDetailUiProps } from "./reviewDetail.types";

const ReviewDetailUi = ({
  data,
  onClickX,
  reviewComments,
}: IReviewDetailUiProps) => {
  return (
    <>
      <S.Wrapper>
        <S.XBox>
          <S.XBtn onClick={onClickX}></S.XBtn>
        </S.XBox>
        <S.ImgBox>
          <S.MainImg></S.MainImg>
          <S.SubImgBox>
            <S.SubImg></S.SubImg>
            <S.SubImg></S.SubImg>
            <S.SubImg></S.SubImg>
          </S.SubImgBox>
        </S.ImgBox>
        <S.UnderLine></S.UnderLine>
        <S.InformBox>
          <S.WriteProfile>
            <Avatar alt="Crew Image" sx={{ width: 68, height: 68 }}></Avatar>
            <S.WriterInform>
              <S.NickName>춘딩딩</S.NickName>
              <S.AgeGenderBox>
                <S.AgeGender>28</S.AgeGender>
                <S.AgeGender>·</S.AgeGender>
                <S.AgeGender>남성</S.AgeGender>
              </S.AgeGenderBox>
            </S.WriterInform>
          </S.WriteProfile>
          <S.Location>설악산</S.Location>
          <S.RatingBox>
            <Rate disabled value={Number(data?.fetchReviewBoard.star)} />
          </S.RatingBox>
        </S.InformBox>
        <S.UnderLine></S.UnderLine>
        <S.Review>{data?.fetchReviewBoard.review}</S.Review>
        <S.UnderLine></S.UnderLine>
        <S.CommentContainer>
          <ReviewCommentWrite />
          {reviewComments?.fetchReviewComments?.map((reviewCommentsMap) => {
            return (
              <ReviewCommentList
                reviewCommentsMap={reviewCommentsMap}
                key={reviewCommentsMap.id}
              />
            );
          })}
        </S.CommentContainer>
      </S.Wrapper>
    </>
  );
};

export default ReviewDetailUi;
