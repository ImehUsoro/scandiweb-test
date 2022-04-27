import React, { useEffect } from "react";
import App from "../App";
import { useRecoilState, useRecoilValue } from "recoil";

import { cartDropDownState } from "../atoms/cartAtom";
import { AppWrapperStyle } from "../styles/AppWrapperStyle";
import HeaderWrapper from "./HeaderWrapper";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";
import {
  allProductsState,
  clothesProductsState,
  techProductsState,
} from "../atoms/productsAtom";

const AppWrapper = () => {
  const cartDropDown = useRecoilValue(cartDropDownState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);
  const [clothesProducts, setClothesProducts] =
    useRecoilState(clothesProductsState);
  const [techProducts, setTechProducts] = useRecoilState(techProductsState);

  // useEffect(() => {
  //   setAllProducts(data?.categories[0]);
  // }, []);

  // console.log(data?.categories);

  // console.log(allProducts);
  return (
    <>
      <HeaderWrapper />
      <AppWrapperStyle primary={cartDropDown ? true : false}>
        <App
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          techProducts={techProducts}
          setTechProducts={setTechProducts}
          clothesProducts={clothesProducts}
          setClothesProducts={setClothesProducts}
          all={data?.categories[0]}
          tech={data?.categories[2]}
          clothes={data?.categories[1]}
        />
      </AppWrapperStyle>
    </>
  );
};

export default AppWrapper;
