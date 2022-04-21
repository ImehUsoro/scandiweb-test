import React from "react";
import PDP from "../pages/PDP";
import { useRecoilState } from "recoil";
import { cartDropDownState } from "../atoms/cartAtom";
import { ModalStyle } from "../styles/ModalStyle";

const PDPWrapper = () => {
  const [cartDropDown, setCartDropDown] = useRecoilState(cartDropDownState);

  return (
    <ModalStyle primary={cartDropDown ? true : false}>
      <PDP />
    </ModalStyle>
  );
};

export default PDPWrapper;
