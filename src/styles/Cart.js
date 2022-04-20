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
    margin-top: 5rem;
    margin-bottom: 3.75rem;
    color: #1d1f22;
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
  & .product-display {
    display: flex;
    gap: 0.75rem;
  }
  & .count-section {
    display: flex;
    flex-direction: column;
    gap: 1.875rem;
  }
  & .action {
    border: 1px solid black;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
    font-weight: 300;
  }
  & .count {
    text-align: center;
  }
`;
