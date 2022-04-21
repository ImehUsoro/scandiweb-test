import React from "react";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { currencyDropDownState, currencyState } from "../atoms/currencyAtom";
import Header from "../components/Header";

const HeaderWrapper = () => {
  const [currency, setCurrency] = useRecoilState(currencyState);
  const [currencyDropDown, setCurrencyDropDown] = useRecoilState(
    currencyDropDownState
  );
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);
  return (
    <Header
      currency={currency}
      setCurrency={setCurrency}
      cartDropDown={cartDropDown}
      setCartDropDown={setCartDropDown}
      currencyDropDown={currencyDropDown}
      setCurrencyDropDown={setCurrencyDropDown}
    />
  );
};

export default HeaderWrapper;
