import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { successModal } from "../../../commons/modals/alertModals";
import { FETCH_USER } from "../../crews/detail/crewDetail.queries";
import CrewSubCommentListUi from "./crewSubCommentList.presenter";
import {
  DELETE_CREW_SUB_COMMENT,
  UPDATE_CREW_SUB_COMMENT,
} from "./crewSubCommentList.queries";
import {
  ICrewSubCommentListProps,
  IMyVariablesProps,
} from "./crewSubCommentList.types";

const CrewSubCommentList = ({ subCommentsMap }: ICrewSubCommentListProps) => {
  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editComments, setEditComments] = useState("");

  const [deleteCrewSubComment] = useMutation<
    Pick<IMutation, "deleteCrewSubComment">
  >(DELETE_CREW_SUB_COMMENT);
  const [updateSubCrewComment] = useMutation<
    Pick<IMutation, "updateCrewSubComment">
  >(UPDATE_CREW_SUB_COMMENT);

  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const userId = data?.fetchUser.id;
  const subCommentUserId = subCommentsMap?.user.id;

  const onChangeEditComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEditComments(event?.target.value);
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    await deleteCrewSubComment({
      variables: { subCommentId: commentId },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsModalOpen(false);
    successModal("정상적으로 삭제되었습니다.");
  };

  const onClickEditBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setCommentId(event.currentTarget.id);
    setIsEditOpen((prev) => !prev);
  };

  const onClickEdit = async () => {
    console.log(editComments);
    const myVariables: IMyVariablesProps = {
      subCommentId: commentId,
    };
    if (editComments) {
      myVariables.updateComment = editComments;
    }

    await updateSubCrewComment({
      variables: myVariables,
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsEditOpen(false);
    setEditComments("");
  };

  return (
    <CrewSubCommentListUi
      subCommentsMap={subCommentsMap}
      onClickShowModal={onClickShowModal}
      onClickCancelModal={onClickCancelModal}
      onClickModalConfirm={onClickModalConfirm}
      isModalOpen={isModalOpen}
      onClickEditBtn={onClickEditBtn}
      onClickEdit={onClickEdit}
      isEditOpen={isEditOpen}
      onChangeEditComment={onChangeEditComment}
      editComments={editComments}
      subCommentUserId={subCommentUserId}
      userId={userId}
    />
  );
};
export default CrewSubCommentList;
