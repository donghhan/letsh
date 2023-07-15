import { atom } from "recoil";

export const currencyState = atom({
  key: "currencyState",
  default: "usd",
});

export const authState = atom({
  key: "authState",
  default: false,
});
