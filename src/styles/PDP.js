import styled from "styled-components";

export const PDPstyle = styled.section`
  display: flex;
  padding-top: 5rem;
  margin-bottom: 4.5rem;
  p {
    margin: 0;
  }
  button {
    cursor: pointer;
    width: 100%;
    background-color: #5ece7b;
    border: none;
    padding: 1rem 2rem;
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
    color: white;
  }
  button:hover {
    background-color: #52b36c;
  }
  span {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
  }
  & div.product-display {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-right: 2.5rem;
  }
  & div.product-display img {
    cursor: pointer;
    width: 5rem;
    height: 5rem;
  }
  & .name {
    margin-bottom: 2.6875rem;
    font-size: 1.875rem;
    line-height: 2.5rem;
  }

  & div.product {
    margin-right: 6.25rem;
  }
  & div.product img {
    cursor: pointer;
    width: 38.125rem;
    height: 31.9375rem;
    object-fit: contain;
  }
  & .product-info {
    max-width: 18.75rem;
  }
  & .price {
    font-size: 1.5rem;
    margin-top: 2.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
  & .description {
    font-family: "Roboto", sans-serif;
    line-height: 1.6rem;
    font-weight: 400;
    font-size: 16px;
  }
`;
