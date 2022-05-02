import React from "react";
import Cart from "../pages/Cart";
import { useRecoilState } from "recoil";
import { cartDropDownState, selectedProductsState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";

const CartWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Cart
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </ModalStyle>
  );
};

export default CartWrapper;
