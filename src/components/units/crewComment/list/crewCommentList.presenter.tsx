import * as S from "./crewCommentList.styles";
import { Avatar } from "@mui/material";
import CrewNestedCommentList from "../../crewNestedComment/list/crewNestedCommentList.container";
import CrewNestedCommentWrite from "../../crewNestedComment/write";

const CrewCommentListUi = () => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
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
        <S.NestedCommentBox>
          <CrewNestedCommentList />
          <CrewNestedCommentWrite />
        </S.NestedCommentBox>
        {/* 여기부터 삭제 */}
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
            </S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>2022.11.24</S.Date>
                <S.Date>|</S.Date>
                <S.Date>14:00</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn>댓글 달기</S.Btn>
                <S.Btn>·</S.Btn>
                <S.Btn>삭제</S.Btn>
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src="/images/commons/profile-img.png"
          ></Avatar>
          <S.CommentBox>
            <S.NickName>춘딩딩</S.NickName>
            <S.Comment>
              댓글 내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글 댓글
              내용이 들어갑니다. 댓글 내용이 들어갑니다.댓글 내용이
              들어갑니다.댓글 내용이 들어갑니다.댓글 내용이 들어갑니다.댓글
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

export default CrewCommentListUi;
