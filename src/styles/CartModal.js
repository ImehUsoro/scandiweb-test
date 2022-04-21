import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartModalStyles = styled.div`
  background-color: white;
  position: absolute;
  top: 5.07rem;
  right: 0;
  max-width: 20.3125rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  padding: 1rem 1rem 1.25rem;
  z-index: 10;

  p {
    margin: 0;
  }
  & .heading {
    margin-bottom: 1.5625rem;
  }
  & .total {
    display: flex;
    justify-content: space-between;
    margin-top: 2.625rem;
    margin-bottom: 2.1875rem;
  }
  & .total p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
  & .total span {
    font-weight: 700;
  }
  & .actions {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
  }

  & .view-bag {
    border: 1px solid black;
    padding: 0.8125rem 2.25rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }
  & .checkout {
    background-color: #5ece7b;
    padding: 0.8125rem 2.25rem;
    text-transform: uppercase;
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
