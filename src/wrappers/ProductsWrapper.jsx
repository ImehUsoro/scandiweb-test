import React from "react";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import Products from "../pages/Products";

const ProductsWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Products
        all={data?.categories[0]}
        clothes={data?.categories[1]}
        tech={data?.categories[2]}
      />
    </ModalStyle>
  );
};

export default ProductsWrapper;
