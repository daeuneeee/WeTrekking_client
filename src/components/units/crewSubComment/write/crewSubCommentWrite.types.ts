import { ChangeEvent } from "react";

export interface ICrewSubCommentWriteProps {
  commentsMap: any;
}

export interface ICrewSubCommentWriteUiProps {
  onClickComment: () => void;
  onChangeSubComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  subComment: string;
}
