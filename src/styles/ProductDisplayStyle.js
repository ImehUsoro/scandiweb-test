import styled from "styled-components";

export const ProductDisplayStyle = styled.div`
  display: flex;
  gap: 0.75rem;

  & .count-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .action {
    border: 1px solid black;
    width: 2.8125rem;
    height: 2.8125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
    font-weight: 300;
  }
  & .modal-action {
    border: 1px solid black;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & .count {
    text-align: center;
  }
`;
