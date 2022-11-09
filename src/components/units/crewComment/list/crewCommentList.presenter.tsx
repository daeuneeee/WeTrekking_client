import * as S from "./crewCommentList.styles";
import { Avatar } from "@mui/material";
import CrewSubCommentList from "../../crewSubComment/list/crewSubCommentList.container";
import CrewSubCommentWrite from "../../crewSubComment/write";

const CrewCommentListUi = ({ commentsMap, data }) => {
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
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>{commentsMap.comment}</S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>{commentsMap.createdAt.slice(0, 10)}</S.Date>
                <S.Date>|</S.Date>
                <S.Date>{commentsMap.createdAt}</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.BtnDot>·</S.BtnDot>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.NestedCommentBox>
          {data?.fetchCrewSubComments.map((subCommentsMap) => {
            return (
              <CrewSubCommentList
                key={subCommentsMap.id}
                commentsMap={commentsMap}
                subCommentsMap={subCommentsMap}
              />
            );
          })}
          <CrewSubCommentWrite />
        </S.NestedCommentBox>
      </S.Wrapper>
    </>
  );
};

export default CrewCommentListUi;
