import styled from "styled-components";

export const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 1.25rem;
  padding-bottom: 1.875rem;

  & .product-name {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 400;
  }

  & .modal-product-name {
    font-size: 0.875rem;
    line-height: 1.6rem;
  }
  & .modal-product-name strong {
    font-weight: 400;
  }

  & .product-price {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
  & .modal-product-price {
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  & .product-display {
    align-items: stretch;
    display: flex;
    gap: 0.75rem;
  }
  & .count-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  & .modal {
    border: 1px solid red;
  }
`;
