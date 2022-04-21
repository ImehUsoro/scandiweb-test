import React from "react";
import CartModal from "../components/CartModal";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";

const CartModalWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <CartModal cartDropDown={cartDropDown} setCartDropDown={setCartDropDown} />
  );
};

export default CartModalWrapper;
