import * as S from "./crewSubCommentList.styles";
import { Avatar } from "@mui/material";

const CrewSubCommentListUi = ({ subCommentsMap }) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
            className="avatar"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>등산러</S.NickName>
            <S.Comment>{subCommentsMap.comment}</S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>{subCommentsMap.createdAt.slice(0, 10)}</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.BtnDot>·</S.BtnDot>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CrewSubCommentListUi;
