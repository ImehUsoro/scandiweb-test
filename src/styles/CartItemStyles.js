import styled from "styled-components";

export const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding-top: 1.25rem;
  padding-bottom: 1.875rem;

  & .amount {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
