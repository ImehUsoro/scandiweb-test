import styled from "styled-components";

export const TotalStyle = styled.div`
  margin-top: 2rem;
  p {
    margin: 0;
  }
  button {
    border: none;
    color: white;
    background-color: #5ece7b;
    padding: 0.8125rem 7.21875rem;
    cursor: pointer;
  }
  button:hover {
    background-color: #52b36c;
  }
  & .tax {
    margin-bottom: 0.5rem;
  }
  & .qty {
    margin-bottom: 1.5rem;
  }
  & .total {
    margin-bottom: 1rem;
  }
`;
