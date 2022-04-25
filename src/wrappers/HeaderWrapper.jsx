import React from "react";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { currencyDropDownState, currencyState } from "../atoms/currencyAtom";
import Header from "../components/Header";
import { useQuery } from "@apollo/client";
import { CATEGORIES } from "../components/GraphQL/Queries";

const HeaderWrapper = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [currencyDropDown, setCurrencyDropDown] = useRecoilState(
    currencyDropDownState
  );
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  const { error, loading, data } = useQuery(CATEGORIES);

  return (
    <Header
      currency={currency}
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
