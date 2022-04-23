import React from "react";
import App from "../App";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { AppWrapperStyle } from "../styles/AppWrapperStyle";
import HeaderWrapper from "./HeaderWrapper";

const AppWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <>
      <HeaderWrapper />
      <AppWrapperStyle primary={cartDropDown ? true : false}>
        <App />;
      </AppWrapperStyle>
    </>
  );
};

export default AppWrapper;
