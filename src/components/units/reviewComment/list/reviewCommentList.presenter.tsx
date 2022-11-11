import * as S from "./reviewCommentList.styles";
import { Avatar } from "@mui/material";
import { getDate, getTime } from "../../../../commons/utils/getDate";

const ReviewCommentListUi = ({ reviewCommentsMap }) => {
  console.log(reviewCommentsMap);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src={reviewCommentsMap.user.profile_img}
          ></Avatar>
          <S.CommentBox>
            <S.NickName>{reviewCommentsMap?.user?.nickname}</S.NickName>
            <S.Comment>{reviewCommentsMap?.reviewComment}</S.Comment>
            <S.DateBox>
              <S.Date>{getDate(reviewCommentsMap?.createdAt)}</S.Date>
              <S.Date>|</S.Date>
              <S.Date>{getTime(reviewCommentsMap?.createdAt)}</S.Date>
            </S.DateBox>
          </S.CommentBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default ReviewCommentListUi;
