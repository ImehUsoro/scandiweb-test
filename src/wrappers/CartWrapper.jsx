import React from "react";
import Cart from "../pages/Cart";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";

const CartWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Cart />
    </ModalStyle>
  );
};

export default CartWrapper;
