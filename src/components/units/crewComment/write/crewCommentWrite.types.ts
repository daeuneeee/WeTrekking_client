import { ChangeEvent } from "react";

export interface ICrewCommentWriteUiProps {
  onChangeComment: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickRegister: () => void;
  comment: string;
}
