import { atom } from "recoil";

export const allProductsState = atom({
  key: "allProductsState",
  default: [],
});

export const techProductsState = atom({
  key: "techProductsState",
  default: [],
});

export const clothesProductsState = atom({
  key: "clothesProductsState",
  default: [],
});
