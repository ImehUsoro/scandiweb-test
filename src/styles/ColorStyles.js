import styled from "styled-components";

export const ColorStyle = styled.div`
  & .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  & .pdp-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 2.25rem;
  }
  & .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
  }
  & .modal-title {
    font-size: 0.875rem;
  }
  & .cart-page {
    margin-top: 1rem;
  }
  & .colors {
    display: flex;
    gap: 0.625rem;
    /* margin-bottom: 0.5rem; */
  }
  & .colors span {
    width: 2rem;
    height: 2rem;
    border: 1px solid transparent;
  }
  & .modal-colors {
    display: flex;
    gap: 0.625rem;
  }
  & .modal-colors span {
    width: 1rem;
    height: 1rem;
    border: 1px solid transparent;
  }
  & .colors span:hover {
    border: 1px solid #5ece7b;
  }
  & .grey {
    background-color: grey;
  }
  & .black {
    background-color: black;
  }
  & .green {
    background-color: green;
  }
`;
