import { atom } from "recoil";

export const currencyState = atom({
  key: "currencyState",
  default: "$",
});

export const currencyDropDown = atom({
  key: "currencyDropDown",
  default: false,
});
