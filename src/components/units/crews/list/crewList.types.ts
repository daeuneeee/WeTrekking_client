import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewListUiProps {
  data?: Pick<IQuery, "fetchCrewBoardsTEST">;
  onClickToWrite: (event: MouseEvent<HTMLButtonElement>) => void;
}
