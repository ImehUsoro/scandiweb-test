import styled from "styled-components";

export const SizesStyles = styled.div`
  & .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  & .pdp-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  & .modal-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  & .title {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
  }
  & .modal-title {
    font-size: 0.875rem;
  }
  & .sizes {
    display: flex;
    gap: 0.5rem;
  }
  & .modal-sizes {
    display: flex;
    gap: 0.5rem;
  }
  & .pdp-sizes {
    display: flex;
    gap: 0.75rem;
  }

  & .sizes span {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    width: 4rem;
    height: 2.8125rem;
  }
  & .pdp-sizes span {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    width: 4rem;
    height: 2.8125rem;
  }
  & .modal-sizes span {
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
  & div.sizes span:hover {
    background-color: black;
    color: white;
  }
  & div.pdp-sizes span:hover {
    background-color: black;
    color: white;
  }
  & div.modal-sizes span:hover {
    background-color: black;
    color: white;
  }
`;
