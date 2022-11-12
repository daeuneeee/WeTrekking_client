import * as S from "./crewCommentList.styles";
import { Avatar } from "@mui/material";
import CrewSubCommentWrite from "../../crewSubComment/write/crewSubCommentWrite.container";
import { getDate, getTime } from "../../../../commons/utils/getDate";
import ConfirmModal from "../../../commons/modals/confirmModal";
import CrewSubCommentList from "../../crewSubComment/list/crewSubCommentList.container";
import { ICrewCommentListUiProps } from "./crewCommentList.types";

const CrewCommentListUi = ({
  commentsMap,
  data,
  onClickComment,
  isOpenSubComment,
  onClickShowModal,
  isModalOpen,
  onClickModalConfirm,
  onClickCancelModal,
  commentId,
  onClickEditBtn,
  isEditOpen,
  onClickEdit,
  onChangeEditComment,
  editComments,
  commentUserId,
  userId,
}: ICrewCommentListUiProps) => {
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
                <S.Btn id={commentsMap?.id} onClick={onClickComment}>
                  댓글 달기
                </S.Btn>
                {userId === commentUserId && (
                  <>
                    <S.BtnDot>·</S.BtnDot>
                    <S.Btn id={commentsMap?.id} onClick={onClickEditBtn}>
                      수정
                    </S.Btn>
                    <S.BtnDot>·</S.BtnDot>
                    <S.Btn id={commentsMap?.id} onClick={onClickShowModal}>
                      삭제
                    </S.Btn>
                  </>
                )}
              </S.BtnBox>
            </S.CommentInformBox>
          </S.CommentBox>
        </S.Container>
        <S.NestedCommentBox>
          {isEditOpen && (
            <>
              <S.EditContainer>
                <S.EditContents
                  onChange={onChangeEditComment}
                  id="clear"
                  defaultValue={commentsMap?.comment || editComments}
                ></S.EditContents>
                <S.EditRegisterBox>
                  <S.EditRegisterBtn onClick={onClickEdit}>
                    수정
                  </S.EditRegisterBtn>
                </S.EditRegisterBox>
              </S.EditContainer>
            </>
          )}
          {data?.fetchCrewSubComments.map((subCommentsMap) => {
            return (
              <CrewSubCommentList
                key={subCommentsMap.id}
                subCommentsMap={subCommentsMap}
              />
            );
          })}
          {commentId && isOpenSubComment && (
            <CrewSubCommentWrite commentsMap={commentsMap} />
          )}
        </S.NestedCommentBox>
        <ConfirmModal
          onOk={onClickModalConfirm}
          onCancel={onClickCancelModal}
          contents="댓글을 삭제하시겠습니까?"
          open={isModalOpen}
        />
      </S.Wrapper>
    </>
  );
};

export default CrewCommentListUi;
