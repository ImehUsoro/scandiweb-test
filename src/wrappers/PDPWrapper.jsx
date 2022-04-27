import React from "react";
import PDP from "../pages/PDP";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { allProductsState } from "../atoms/productsAtom";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import { useQuery } from "@apollo/client";

const PDPWrapper = () => {
  const cartDropDown = useRecoilValue(cartDropDownState);
  // const allProducts = useRecoilValue(allProductsState);
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);

  // console.log(data.categories[0]);
  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <PDP all={data?.categories[0].products} loading={loading} />
    </ModalStyle>
  );
};

export default PDPWrapper;
