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
