import { atom, selector } from "recoil";
import { IActiveStep } from "./interface.atom";

export const currencyState = atom({
  key: "currencyState",
  default: "usd",
});

export const authState = atom({
  key: "authState",
  default: false,
});

// Atom for Stepper component
export const activeStepState = atom<IActiveStep[]>({
  key: "activeStep",
  default: [],
});
