import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  max-width: 77.5rem;
  margin: auto;

  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }
  li {
    padding: 0.25rem 1rem 2rem 1rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }
  li:hover {
    color: #5ece7b;
  }
  & .active {
    color: #5ece7b;
    border-bottom: 2px solid;
    font-weight: 600;
  }
  div img:hover {
    cursor: pointer;
  }
  div span {
    font-weight: 500;
    font-size: large;
  }
  & .checkout {
    display: flex;
    align-items: flex-start;
    gap: 1.375rem;
  }
  & .checkout button {
    border: none;
    background: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    padding: 0;
  }
  & .checkout button span {
    margin-right: 0.625rem;
    align-self: center;
  }
  & .checkout .currency {
    position: absolute;
    top: 1.4rem;
    left: -1.55rem;
    flex-direction: column;
    width: 7.125rem;
    padding: 0.875rem 0;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    z-index: 2;
  }
  & .checkout .currency p {
    font-family: "Raleway", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0.375rem 0;
    padding: 0.5rem 2.375rem 0.5rem 1.25rem;
    text-align: center;
  }
  & .checkout .currency p:hover {
    background-color: #eeeeee;
  }
  & .checkout div {
    display: flex;
    position: relative;
  }
  & .checkout .item-number {
    position: absolute;
    top: -0.6rem;
    right: -0.7rem;
    background: black;
    color: white;
    width: 1.25rem;
    height: 1.252rem;
    border-radius: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .checkout .cart span:hover {
    cursor: pointer;
  }
`;
