import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
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

const ProductsWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [currency, setCurrency] = useRecoilState(currencyState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);
  const [allProducts, setAllProducts] = useRecoilState(allProductsState);
  const [clothesProducts, setClothesProducts] =
    useRecoilState(clothesProductsState);
  const [techProducts, setTechProducts] = useRecoilState(techProductsState);

  useEffect(() => {
    setAllProducts(data?.categories[0].products);
    setClothesProducts(data?.categories[1].products);
    setTechProducts(data?.categories[2].products);
  }, []);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Products
        all={data?.categories[0]}
        clothes={data?.categories[1]}
        tech={data?.categories[2]}
        currencyState={currencyState}
      />
    </ModalStyle>
  );
};

export default ProductsWrapper;
