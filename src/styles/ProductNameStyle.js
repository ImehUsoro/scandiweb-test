import styled from "styled-components";

export const ProductStyle = styled.div`
  & .product-name {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 400;
    margin-bottom: 1.25rem;
  }
  & .pdp-product-name {
    font-size: 1.875rem;
    line-height: 2.5rem;
    font-weight: 400;
    margin-bottom: 2.6875rem;
  }

  & .modal-product-name {
    font-size: 0.875rem;
    line-height: 1.6rem;
    margin-bottom: 0.5rem;
  }
  & .modal-product-name strong {
    font-weight: 400;
  }
`;
