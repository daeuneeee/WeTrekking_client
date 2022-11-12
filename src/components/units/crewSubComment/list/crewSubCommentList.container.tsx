import { useMutation } from "@apollo/client";
import { MouseEvent, useState } from "react";
import CrewSubCommentListUi from "./crewSubCommentList.presenter";
import {
  DELETE_CREW_SUB_COMMENT,
  UPDATE_CREW_SUB_COMMENT,
} from "./crewSubCommentList.queries";

const CrewSubCommentList = ({ subCommentsMap }) => {
  const [commentId, setCommentId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editComments, setEditComments] = useState("");

  const [deleteCrewSubComment] = useMutation(DELETE_CREW_SUB_COMMENT);
  const [updateSubCrewComment] = useMutation(UPDATE_CREW_SUB_COMMENT);

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    await deleteCrewSubComment({
      variables: { commentId },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsModalOpen(false);
  };

  const onClickEditBtn = (event: MouseEvent<HTMLButtonElement>) => {
    setCommentId(event.currentTarget.id);
    setIsEditOpen((prev) => !prev);
  };
  console.log(commentId);

  const onClickEdit = async () => {
    const myVariables = {
      updateSubCrewCommentInput: {},
    };
    if (editComments) {
      myVariables.updateSubCrewCommentInput.subComment = editComments;
    }
    if (commentId) {
      myVariables.updateSubCrewCommentInput.parentId = commentId;
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
    />
  );
};
export default CrewSubCommentList;
