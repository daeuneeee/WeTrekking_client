import { atom } from "recoil";
import { IQuery } from "../commons/types/generated/types";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isOpenSideBarState = atom({
  key: "isOpenSideBarState",
  default: false,
});

export const reviewIdState = atom({
  key: "reviewIdState",
  default: "",
});

export const userInfo = atom<Pick<IQuery, "fetchUser">>({
  key: "userInfo",
  default: undefined,
});

export const isModalActive = atom({
  key: "isModalActive",
  default: false,
});

export const isPointModalToggleState = atom<boolean>({
  key: "isPointModalToggleState",
  default: undefined,
});

export const isOpenSubCommentState = atom({
  key: "isOpenSubCommentState",
  default: false,
});
