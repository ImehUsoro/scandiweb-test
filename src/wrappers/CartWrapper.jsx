import React from "react";
import Cart from "../pages/Cart";
import { useRecoilState } from "recoil";
import {
  cartDropDownState,
  selectedProductsState,
  totalPriceState,
} from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";

const CartWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const [selectedProducts, setSelectedProducts] = useRecoilState(
    selectedProductsState
  );

  const [prices, setTotalPrices] = useRecoilState(totalPriceState);
  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <Cart
        prices={prices}
        setTotalPrices={setTotalPrices}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
    </ModalStyle>
  );
};

export default CartWrapper;
