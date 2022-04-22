import styled from "styled-components";

export const CartStyle = styled.div`
  margin-bottom: 3.375rem;
  p {
    margin: 0;
  }
  strong {
    font-weight: 600;
  }

  & .heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
    padding-top: 5rem;
    padding-bottom: 3.75rem;
    color: #1d1f22;
    border-bottom: 1px solid #e5e5e5;
  }

  & .cart {
    display: flex;
    justify-content: space-between;
    max-width: 68.625rem;
    border-top: 1px solid #e5e5e5;
    padding: 1.25rem 0;
  }
  & .product-name {
    /* line-height: 1.875rem; */
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 400;
  }
  & .product-price {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
