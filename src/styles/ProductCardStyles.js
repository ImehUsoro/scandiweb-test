import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 23rem;
  position: relative;

  p {
    margin: 0;
  }
  img {
    height: 20.625rem;
    width: 22.125rem;
    margin-bottom: 1.5rem;
  }
  :hover {
    box-shadow: 0 10px 15px 10px rgb(0 0 0 / 0.1),
      0 4px 6px 5px rgb(0 0 0 / 0.1);
  }
  & .no-stock {
    opacity: 0.5;
    pointer-events: none;
  }
  & .icon {
    position: absolute;
    right: 5%;
    bottom: 8%;
    width: 3.25rem;
    height: 3.25rem;
    cursor: pointer;
    opacity: 0;
  }
  :hover .icon {
    opacity: 1;
  }
  & .out-of-stock {
    color: #8d8f9a;
    font-size: 1.5rem;
    position: absolute;
    top: 40%;
    left: 30%;
  }
  & .product-name {
    line-height: 1.8rem;
    font-weight: 300;
  }
  & .price {
    font-weight: 500;
    line-height: 1.8rem;
  }
  & .product-image img {
    object-fit: contain;
    width: 22.125rem;
    height: 20.625rem;
    margin-bottom: 1.5rem;
  }
  ${(props) =>
    props.primary &&
    css`
      opacity: 0.5;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  ${(props) =>
    props.primary &&
    css`
      pointer-events: none;
    `}
`;
