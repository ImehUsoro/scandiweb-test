import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 23rem;
  position: relative;

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
    margin-bottom: 1.5625rem;
  }
  & .product-image {
  }
  & .icon {
    position: absolute;
    right: 10%;
    bottom: 20%;
    z-index: 10;
    width: 3.25rem;
    height: 3.25rem;
    cursor: pointer;
    opacity: 0;
  }
`;
