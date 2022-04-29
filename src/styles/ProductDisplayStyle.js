import styled from "styled-components";

export const ProductDisplayStyle = styled.div`
  display: flex;
  gap: 0.75rem;

  & .main {
    width: 12.5rem;
    height: 18rem;
    object-fit: contain;
  }
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
    font-size: 1.875rem;
    font-weight: 300;
  }
  & .modal-action {
    width: 1.5rem;
    height: 1.5rem;
  }
  & .count {
    text-align: center;
  }
  & .image-section {
    position: relative;
  }
  & .image-toggles {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: flex;
    gap: 0.5rem;
  }
  & .image-toggles img {
    cursor: pointer;
  }

  & .modal-image {
    width: 7.5625rem;
    height: 11.875rem;
    object-fit: contain;
  }
`;
