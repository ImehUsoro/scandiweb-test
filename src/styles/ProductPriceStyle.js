import styled from "styled-components";

export const ProductPriceStyle = styled.div`
  & .product-price {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 1.5rem;
  }
  & .modal-product-price {
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
  & .text {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
  }
  & .modal-amount {
    font-size: 1.125rem;
  }
`;
