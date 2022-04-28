import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
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
  const { error, loading, data } = useQuery(CATEGORIES);

  console.log(category);
  return (
    <Header
      currency={currency}
      category={category}
      setCurrency={setCurrency}
      cartDropDown={cartDropDown}
      setCartDropDown={setCartDropDown}
      currencyDropDown={currencyDropDown}
      setCurrencyDropDown={setCurrencyDropDown}
      headers={data?.categories}
    />
  );
};

export default HeaderWrapper;
