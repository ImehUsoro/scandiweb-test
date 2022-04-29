import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyDropDownState, currencyState } from "../atoms/currencyAtom";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import Products from "../pages/Products";
import { categoryState } from "../atoms/categoryAtom";

const ProductsWrapper = () => {
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  const cartDropDown = useRecoilValue(cartDropDownState);
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Products
        category={category}
        setCategory={setCategory}
        all={data?.categories[0]}
        tech={data?.categories[2]}
        clothes={data?.categories[1]}
        currencyState={currencyState}
      />
    </ModalStyle>
  );
};

export default ProductsWrapper;
