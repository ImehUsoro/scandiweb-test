import { atom } from "recoil";

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

export const categoriesState = atom({
  key: "categoriesState",
  default: [],
});
