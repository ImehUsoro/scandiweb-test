import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  :hover {
    box-shadow: 0 10px 15px 10px rgb(0 0 0 / 0.1),
      0 4px 6px 5px rgb(0 0 0 / 0.1);
  }

  img {
    height: 20.625rem;
    width: 22.125rem;
    margin-bottom: 25px;
  }
`;
