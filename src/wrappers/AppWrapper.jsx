import React, { useEffect } from "react";
import App from "../App";
import { useRecoilState, useRecoilValue } from "recoil";

import { cartDropDownState } from "../atoms/cartAtom";
import { AppWrapperStyle } from "../styles/AppWrapperStyle";
import HeaderWrapper from "./HeaderWrapper";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS } from "../components/GraphQL/Queries";

const AppWrapper = () => {
  const cartDropDown = useRecoilValue(cartDropDownState);
  const { error, loading, data } = useQuery(ALL_PRODUCTS);

  return (
    <>
      <HeaderWrapper />
      <AppWrapperStyle primary={cartDropDown ? true : false}>
        <App
          all={data?.categories[0]}
          tech={data?.categories[2]}
          clothes={data?.categories[1]}
        />
      </AppWrapperStyle>
    </>
  );
};

export default AppWrapper;
