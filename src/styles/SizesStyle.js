import styled, { css } from "styled-components";

export const SizesStyles = styled.div`
  & .sizes {
    display: flex;
    gap: 1.333rem;
    margin-bottom: 2.5rem;
    /* border: 1px solid red; */
  }
  & .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
  & .sizes p {
    border: 1px solid black;
    cursor: pointer;
    padding: 0.875rem 1.375rem;
    font-size: ;
  }
  & div.sizes p:hover {
    background-color: black;
    color: white;
  }
  & div.sizes p:active {
    background-color: black;
    color: white;
  }
`;
