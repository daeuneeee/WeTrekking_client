import * as S from "./crewNestedCommentList.styles";
import { Avatar } from "@mui/material";

const CrewNestedCommentListUi = () => {
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
            <S.Comment>
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
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
        {/* 여기부터 삭제 */}
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
            className="avatar"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>등산러</S.NickName>
            <S.Comment>
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
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
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
            className="avatar"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>등산러</S.NickName>
            <S.Comment>
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글 답글답글답글 답글답글답글
              답글답글답글 답글답글답글 답글답글답글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
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
        {/* 여기까지 삭제 */}
      </S.Wrapper>
    </>
  );
};

export default CrewNestedCommentListUi;
