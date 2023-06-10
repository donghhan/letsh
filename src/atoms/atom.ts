import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: "en",
});

export const currencyState = atom({
  key: "currencyState",
  default: "usd",
});
