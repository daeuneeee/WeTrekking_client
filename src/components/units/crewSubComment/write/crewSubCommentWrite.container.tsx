import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { IMutation } from "../../../../commons/types/generated/types";
import { isOpenSubCommentState } from "../../../../store";
import CrewSubCommentWriteUi from "./crewSubCommentWrite.presenter";
import { CREATE_CREW_SUB_COMMENT } from "./crewSubCommentWrite.queries";
import { ICrewSubCommentWriteProps } from "./crewSubCommentWrite.types";

const CrewSubCommentWrite = ({ commentsMap }: ICrewSubCommentWriteProps) => {
  const [createCrewSubComment] = useMutation<
    Pick<IMutation, "createCrewSubComment">
  >(CREATE_CREW_SUB_COMMENT);
  const [subComment, setSubComment] = useState("");
  const [, setIsOpenSubComment] = useRecoilState(isOpenSubCommentState);

  const onClickComment = async () => {
    await createCrewSubComment({
      variables: {
        createSubCrewCommentInput: { subComment, parentId: commentsMap.id },
      },
      update(cache) {
        cache.modify({
          fields: () => {},
        });
      },
    });
    setIsOpenSubComment((prev) => !prev);
  };

  const onChangeSubComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSubComment(event.target.value);
  };

  return (
    <CrewSubCommentWriteUi
      onClickComment={onClickComment}
      onChangeSubComment={onChangeSubComment}
      subComment={subComment}
    />
  );
};

export default CrewSubCommentWrite;
