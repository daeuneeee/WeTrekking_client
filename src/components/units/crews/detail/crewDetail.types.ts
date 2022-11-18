import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICrewDetailUiProps {
  data?: Pick<IQuery, "fetchCrewBoard">;
  comments?: Pick<IQuery, "fetchCrewComments">;
  onLoadMore: any;
  crewImg?: Pick<IQuery, "fetchBoardImage">;
  onClickEdit: () => void;
  boardId?: string;
  userId?: string;
  onClickList: () => void;
  onClickShowModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickCancelModal: () => void;
  onClickModalConfirm: () => void;
  isModalOpen: boolean;
  onClickLogin: () => void;
  onClickPick: () => void;
  isDib?: number;
  onClickToChat: () => void;
  onClickApply: () => void;
  acceptedList?: Pick<IQuery, "fetchAcceptedList">;
}
