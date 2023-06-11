import { atom } from "recoil";

export const currencyState = atom({
  key: "currencyState",
  default: "usd",
});
