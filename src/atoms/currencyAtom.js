import { atom } from "recoil";

export const currencyState = atom({
  key: "currencyState",
  default: "$",
});

export const currencyDropDownState = atom({
  key: "currencyDropDownState",
  default: false,
});
