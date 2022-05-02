import styled from "styled-components";

export const SizesStyles = styled.div`
  span {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
  }
  span:hover {
    background-color: black;
    color: white;
  }
  & .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  & .pdp-container {
    margin-bottom: 1.5rem;
  }
  & .cart-container {
    margin-bottom: 1rem;
  }
  & .modal-container {
    margin-bottom: 0.5rem;
  }
  & .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
  }
  & .modal-title {
    font-size: 0.875rem;
  }
  & .sizes {
    display: flex;
    gap: 0.75rem;
  }
  & .modal-sizes {
    display: flex;
    gap: 0.5rem;
  }

  & .sizes span {
    font-size: 1rem;
    width: 4rem;
    height: 2.8125rem;
  }
  & .modal-sizes span {
    font-size: 0.875rem;
    width: 2.5rem;
    height: 1.5rem;
  }

  & .background {
    background-color: #1d1f22;
    color: #ffffff;
  }
`;
