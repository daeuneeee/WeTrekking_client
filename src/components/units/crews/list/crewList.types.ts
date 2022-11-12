import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewListUiProps {
  data?: Pick<IQuery, "fetchCrewBoardsLatestFirst">;
  onClickToWrite: () => void;
  sort: boolean;
  deadLine?: Pick<IQuery, "fetchCrewBoardsDeadlineFirst">;
  onClickLatest: () => void;
  onClickDeadLine: () => void;
}
