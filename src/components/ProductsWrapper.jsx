import React from "react";
import ProductCard from "../pages/Products";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";

const ProductsWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <ProductCard />
    </ModalStyle>
  );
};

export default ProductsWrapper;
