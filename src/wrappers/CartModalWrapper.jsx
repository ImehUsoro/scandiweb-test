import React from "react";
import CartModal from "../components/CartModal";
import { useRecoilState } from "recoil";
import { cartDropDownState, selectedProductsState } from "../atoms/cartAtom";

const CartModalWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );

  return (
    <CartModal
      cartDropDown={cartDropDown}
      setCartDropDown={setCartDropDown}
      selectedProducts={selectedProducts}
      setSelectedProducts={setSelectedProducts}
    />
  );
};

export default CartModalWrapper;
