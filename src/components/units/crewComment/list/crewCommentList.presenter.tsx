import * as S from "./crewCommentList.styles";
import { Avatar } from "@mui/material";
import CrewSubCommentList from "../../crewSubComment/list/crewSubCommentList.container";
import CrewSubCommentWrite from "../../crewSubComment/write";
import { getDate, getTime } from "../../../../commons/utils/getDate";
import ConfirmModal from "../../../commons/modals/confirmModal";

const CrewCommentListUi = ({
  commentsMap,
  data,
  onClickComment,
  isOpen,
  onClickShowModal,
  isModalOpen,
  onClickModalConfirm,
  onClickCancelModal,
}) => {
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
            <S.NickName>{commentsMap?.user.nickname}</S.NickName>
            <S.Comment>{commentsMap?.comment}</S.Comment>
            <S.CommentInformBox>
              <S.DateBox>
                <S.Date>{getDate(commentsMap?.createdAt)}</S.Date>
                <S.Date>|</S.Date>
                <S.Date>{getTime(commentsMap?.createdAt)}</S.Date>
              </S.DateBox>
              <S.BtnBox>
                <S.Btn onClick={onClickComment}>댓글 달기</S.Btn>
                <S.BtnDot>·</S.BtnDot>
                <S.Btn>수정</S.Btn>
                <S.BtnDot>·</S.BtnDot>
                <S.Btn id={commentsMap.id} onClick={onClickShowModal}>
                  삭제
                </S.Btn>
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
          {isOpen && <CrewSubCommentWrite />}
        </S.NestedCommentBox>
        <ConfirmModal
          onOk={onClickModalConfirm}
          onCancel={onClickCancelModal}
          contents="삭제하시겠습니까?"
          open={isModalOpen}
        />
      </S.Wrapper>
    </>
  );
};

export default CrewCommentListUi;
