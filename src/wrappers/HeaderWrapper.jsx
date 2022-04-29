import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDropDownState, selectedProductsState } from "../atoms/cartAtom";
import { currencyDropDownState, currencyState } from "../atoms/currencyAtom";
import Header from "../components/Header";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../components/GraphQL/Queries";
import { categoryState } from "../atoms/categoryAtom";

const HeaderWrapper = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [currencyDropDown, setCurrencyDropDown] = useRecoilState(
    currencyDropDownState
  );
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  const category = useRecoilValue(categoryState);
  const selectedItems = useRecoilValue(selectedProductsState);
  const { error, loading, data } = useQuery(CATEGORIES);

  return (
    <Header
      currency={currency}
      category={category}
      setCurrency={setCurrency}
      selectedItems={selectedItems}
      cartDropDown={cartDropDown}
      setCartDropDown={setCartDropDown}
      currencyDropDown={currencyDropDown}
      setCurrencyDropDown={setCurrencyDropDown}
      headers={data?.categories}
    />
  );
};

export default HeaderWrapper;
