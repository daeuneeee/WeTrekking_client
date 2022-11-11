import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateCrewCommentArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_CREW_COMMENTS } from "../../crews/detail/crewDetail.queries";
import CrewCommentWriteUi from "./crewCommentWrite.presenter";
import "antd/dist/antd.css";
import { CREATE_CREW_COMMENT } from "./crewCommentWrite.queries";

const CrewCommentWrite = () => {
  const router = useRouter();

  const [createCrewComment] = useMutation<
    Pick<IMutation, "createCrewComment">,
    IMutationCreateCrewCommentArgs
  >(CREATE_CREW_COMMENT);
  const [comment, setComment] = useState("");

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };

  const onClickRegister = async () => {
    if (comment === "") {
      Modal.error({ content: "내용을 입력해주세요." });
    }
    if (comment) {
      await createCrewComment({
        variables: {
          createCrewCommentInput: {
            comment,
            boardId: String(router.query.crewId),
          },
        },
        refetchQueries: [
          {
            query: FETCH_CREW_COMMENTS,
            variables: { boardId: router.query.crewId },
          },
        ],
      });
    }
    setComment("");
  };

  return (
    <CrewCommentWriteUi
      onClickRegister={onClickRegister}
      onChangeComment={onChangeComment}
      comment={comment}
    />
  );
};

export default CrewCommentWrite;
