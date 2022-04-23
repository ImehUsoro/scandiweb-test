import styled from "styled-components";

export const ProductDisplayStyle = styled.div`
  display: flex;
  gap: 0.75rem;

  & .count-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .btn {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & .action {
    width: 2.8125rem;
    height: 2.8125rem;
    font-size: 30px;
    font-weight: 300;
  }
  & .modal-action {
    width: 1.5rem;
    height: 1.5rem;
  }
  & .count {
    text-align: center;
  }
`;
