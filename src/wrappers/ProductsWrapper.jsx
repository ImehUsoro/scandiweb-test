import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyDropDownState, currencyState } from "../atoms/currencyAtom";
import { cartDropDownState } from "../atoms/cartAtom";
import {
  allProductsState,
  techProductsState,
  clothesProductsState,
} from "../atoms/productsAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import Products from "../pages/Products";
import { categoryState } from "../atoms/categoryAtom";

const ProductsWrapper = () => {
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  const cartDropDown = useRecoilValue(cartDropDownState);
  // const [currency, setCurrency] = useRecoilState(currencyState);
  // const [allProducts, setAllProducts] = useRecoilState(allProductsState);
  // const [clothesProducts, setClothesProducts] =
  // useRecoilState(clothesProductsState);
  // const [techProducts, setTechProducts] = useRecoilState(techProductsState);
  // const [category, setCategory] = useRecoilState(categoryState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Products
        all={data?.categories[0]}
        tech={data?.categories[2]}
        clothes={data?.categories[1]}
        currencyState={currencyState}
      />
    </ModalStyle>
  );
};

export default ProductsWrapper;
