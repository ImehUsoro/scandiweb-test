import React from "react";
import Cart from "../pages/Cart";
import { useRecoilState } from "recoil";
import {
  cartDropDownState,
  selectedProductsState,
  currentProductState,
} from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";

const CartWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );
  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Cart
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </ModalStyle>
  );
};

export default CartWrapper;
