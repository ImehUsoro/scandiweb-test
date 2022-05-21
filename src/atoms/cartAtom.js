import { atom } from "recoil";

export const cartDropDownState = atom({
  key: "cartDropDownState",
  default: false,
});

export const itemsInCartState = atom({
  key: "itemsInCartState",
  default: 0,
});

export const currentProductState = atom({
  key: "productToBeSelected",
  default: {},
});

export const selectedProductsState = atom({
  key: "selectedProductsState",
  default: [],
});
