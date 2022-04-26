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
    margin-bottom: 2.5rem;
    color: white;
  }
  button:hover {
    background-color: #52b36c;
  }
  & .product-display {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-right: 2.5rem;
  }
  & .product-display img {
    cursor: pointer;
    width: 5rem;
    height: 5rem;
  }
  & .product-image {
    margin-right: 6.25rem;
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
    font-size: 1rem;
  }
`;
