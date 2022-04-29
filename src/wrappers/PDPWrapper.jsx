import React from "react";
import PDP from "../pages/PDP";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDropDownState, selectedProductsState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { categoryState } from "../atoms/categoryAtom";

const PDPWrapper = () => {
  const cartDropDown = useRecoilValue(cartDropDownState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);

  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <PDP
        all={data?.categories[0].products}
        loading={loading}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </ModalStyle>
  );
};

export default PDPWrapper;
