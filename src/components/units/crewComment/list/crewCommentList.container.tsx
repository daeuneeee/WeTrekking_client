import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchCrewSubCommentsArgs,
} from "../../../../commons/types/generated/types";
import CrewCommentListUi from "./crewCommentList.presenter";
import {
  DELETE_CREW_COMMENT,
  FETCH_CREW_SUB_COMMENTS,
} from "./crewCommentList.queries";

const CrewCommentList = ({ commentsMap }) => {
  const router = useRouter();

  const [commentId, setCommentId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery<
    Pick<IQuery, "fetchCrewSubComments">,
    IQueryFetchCrewSubCommentsArgs
  >(FETCH_CREW_SUB_COMMENTS, {
    variables: {
      commentId: commentsMap.id,
      boardId: String(router.query.crewId),
    },
  });

  const [deleteCrewComment] = useMutation(DELETE_CREW_COMMENT);

  const onClickComment = () => {
    // setCommentId()
    setIsOpen((prev) => !prev);
  };

  const onClickShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsModalOpen(true);
    setCommentId(event.currentTarget.id);
  };
  console.log(commentId);

  const onClickCancelModal = () => {
    setIsModalOpen(false);
  };
  const onClickModalConfirm = async () => {
    await deleteCrewComment({
      variables: { commentId },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsModalOpen(false);
  };
  return (
    <CrewCommentListUi
      commentsMap={commentsMap}
      data={data}
      onClickComment={onClickComment}
      isOpen={isOpen}
      onClickShowModal={onClickShowModal}
      onClickCancelModal={onClickCancelModal}
      onClickModalConfirm={onClickModalConfirm}
      isModalOpen={isModalOpen}
    />
  );
};

export default CrewCommentList;
