import { atom } from "recoil";

export const cartDropDownState = atom({
  key: "cartDropDownState",
  default: false,
});

export const itemsInCartState = atom({
  key: "itemsInCartState",
  default: 0,
});
