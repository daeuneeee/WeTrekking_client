import { MouseEvent } from "react";

export interface ICrewListUiProps {
  onClickToWrite: () => void;
  sort: boolean;
  onClickLatest: () => void;
  onClickDeadLine: () => void;
  onClickPick: (event: MouseEvent<HTMLDivElement>) => void;
  onClickFetchMore: () => void;
  itemsLatest: any;
  itemsDeadLine: any;
}
