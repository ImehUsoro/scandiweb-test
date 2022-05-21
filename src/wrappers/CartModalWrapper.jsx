import React from "react";
import CartModal from "../components/CartModal";
import { useRecoilState } from "recoil";
import {
  cartDropDownState,
  selectedProductsState,
  currentProductState,
} from "../atoms/cartAtom";

const CartModalWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );
  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  return (
    <CartModal
      cartDropDown={cartDropDown}
      setCartDropDown={setCartDropDown}
      currentProduct={currentProduct}
      setCurrentProduct={setCurrentProduct}
      selectedProducts={selectedProducts}
      setSelectedProducts={setSelectedProducts}
    />
  );
};

export default CartModalWrapper;
