import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isOpenSideBarState = atom({
  key: "isOpenSideBarState",
  default: false,
});
