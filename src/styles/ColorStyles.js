import styled from "styled-components";

export const ColorStyle = styled.div`
  span {
    /* border: 1px solid transparent; */
  }
  span:hover {
    border: 1px solid #5ece7b;
  }
  & .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  & .pdp-container {
    margin-bottom: 2.25rem;
  }
  & .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
  }
  & .modal-title {
    font-size: 0.875rem;
  }
  & .colors {
    display: flex;
    gap: 0.625rem;
  }
  & .modal-colors {
    display: flex;
    gap: 0.625rem;
  }
  & .colors span {
    width: 2rem;
    height: 2rem;
    box-sizing: border-box;
    box-shadow: 3px 5px 3px 0 rgb(0 0 0 / 0.1), 0 5px 2px -1px rgb(0 0 0 / 0.1);
  }
  & .modal-colors span {
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
  }
  & .colors span:hover {
    border: 1px solid #5ece7b;
  }
  & .modal-colors span:hover {
    border: 1px solid #5ece7b;
  }
  & .background {
    border: 2px solid #5ece7b;
  }
`;
