import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currencyState } from "../atoms/currencyAtom";
import { cartDropDownState, selectedProductsState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import Products from "../pages/Products";
import { categoryState } from "../atoms/categoryAtom";

const ProductsWrapper = () => {
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  const cartDropDown = useRecoilValue(cartDropDownState);
  const [category, setCategory] = useRecoilState(categoryState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Products
        category={category}
        setCategory={setCategory}
        loading={loading}
        all={data?.categories[0]}
        tech={data?.categories[2]}
        clothes={data?.categories[1]}
        currencyState={currencyState}
        setSelectedProducts={setSelectedProducts}
      />
    </ModalStyle>
  );
};

export default ProductsWrapper;
