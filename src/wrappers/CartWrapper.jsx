import React from "react";
import Cart from "../pages/Cart";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";

const CartWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Cart />
    </ModalStyle>
  );
};

export default CartWrapper;