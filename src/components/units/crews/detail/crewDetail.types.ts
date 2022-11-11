import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewDetailUiProps {
  data: Pick<IQuery, "fetchCrewBoard">;
  comments: Pick<IQuery, "fetchCrewComments">;
  onLoadMore: any;
  crewImg: Pick<IQuery, "fetchBoardImage">;
}
