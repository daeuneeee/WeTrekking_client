import * as S from "./reviewCommentList.styles";
import { Avatar } from "@mui/material";
import { getDate, getTime } from "../../../../commons/utils/getDate";
import ConfirmModal from "../../../commons/modals/confirmModal";
import { IReviewCommentListUiProps } from "./reviewCommentList.types";

const ReviewCommentListUi = ({
  reviewCommentsMap,
  onClickShowModal,
  onClickCancelModal,
  onClickModalConfirm,
  isModalOpen,
  onClickEditBtn,
  isEditOpen,
  onChangeEditComment,
  onClickEdit,
  editComments,
  reviewCommentUserId,
  userId,
}: IReviewCommentListUiProps) => {
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
            <S.DateEditDeleteBox>
              <S.DateBox>
                <S.Date>{getDate(reviewCommentsMap?.createdAt)}</S.Date>
                <S.Date>|</S.Date>
                <S.Date>{getTime(reviewCommentsMap?.createdAt)}</S.Date>
              </S.DateBox>
              {reviewCommentUserId === userId && (
                <S.EditDeleteBox>
                  <S.EditDelete
                    id={reviewCommentsMap?.id}
                    onClick={onClickEditBtn}
                  >
                    수정
                  </S.EditDelete>
                  <S.EditDeleteDot>·</S.EditDeleteDot>
                  <S.EditDelete
                    id={reviewCommentsMap?.id}
                    onClick={onClickShowModal}
                  >
                    삭제
                  </S.EditDelete>
                </S.EditDeleteBox>
              )}
            </S.DateEditDeleteBox>
          </S.CommentBox>
        </S.Container>
        <ConfirmModal
          onOk={onClickModalConfirm}
          onCancel={onClickCancelModal}
          contents="댓글을 삭제하시겠습니까?"
          open={isModalOpen}
        />
      </S.Wrapper>
      {isEditOpen && (
        <>
          <S.EditContainer>
            <S.EditContents
              onChange={onChangeEditComment}
              id="clear"
              defaultValue={reviewCommentsMap?.reviewComment || editComments}
            ></S.EditContents>
            <S.EditRegisterBox>
              <S.EditRegisterBtn onClick={onClickEdit}>수정</S.EditRegisterBtn>
            </S.EditRegisterBox>
          </S.EditContainer>
        </>
      )}
    </>
  );
};

export default ReviewCommentListUi;
