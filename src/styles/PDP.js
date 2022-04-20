import styled, { css } from "styled-components";

export const PDPstyle = styled.section`
  display: flex;
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
  }
  button:hover {
    background-color: #52b36c;
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
  & p.name {
    margin-bottom: 2.6875rem;
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
  & .description {
    font-family: "Roboto", sans-serif;
    line-height: 1.6rem;
    font-weight: 400;
  }
`;
