import styled from "styled-components";

export const ProductStyle = styled.div`
  max-width: 12rem;
  & .product-name-bold {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  & .cart-product-name {
    margin-bottom: 1.25rem;
  }
  & .pdp-product-name {
    margin-bottom: 2.6875rem;
  }

  & .modal-product-name {
    font-size: 0.875rem;
    line-height: 1.6rem;
    margin-bottom: 0.5rem;
    max-width: 5.5rem;
  }
  & .modal-product-name strong {
    font-weight: 400;
  }
`;
