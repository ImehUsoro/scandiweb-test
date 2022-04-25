import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 23rem;
  position: relative;

  p {
    margin: 0;
  }
  :hover {
    box-shadow: 0 10px 15px 10px rgb(0 0 0 / 0.1),
      0 4px 6px 5px rgb(0 0 0 / 0.1);
  }
  :hover .icon {
    opacity: 1;
  }
  img {
    height: 20.625rem;
    width: 22.125rem;
    margin-bottom: 1.5rem;
  }
  & .product-name {
    line-height: 1.8rem;
    font-weight: 300;
  }
  & .price {
    font-weight: 500;
    line-height: 1.8rem;
  }
  & .icon {
    position: absolute;
    right: 5%;
    /* bottom: 11.5%; */
    bottom: 9%;
    width: 3.25rem;
    height: 3.25rem;
    cursor: pointer;
    opacity: 0;
  }
  & .product-image {
    object-fit: contain;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
