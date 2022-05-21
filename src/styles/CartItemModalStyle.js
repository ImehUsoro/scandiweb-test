import styled from "styled-components";

export const CartItemModalStyles = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & .product-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    pointer-events: none;
  }
`;
