import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 5rem;
  /* border: 1px solid red; */
  /* padding: 0rem 6.25rem; */

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
  }
  li:hover {
    color: #5ece7b;
    border-bottom: 2px solid;
  }
  & li.active {
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
  & div.checkout {
    display: flex;
    align-items: flex-start;
    gap: 1.375rem;
  }
  & div.checkout button {
    padding: 0;
    border: none;
    background: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    /* border: 1px solid red; */
  }
  & div.checkout div.currency {
    position: absolute;
    top: 1.4rem;
    left: -1.55rem;
    flex-direction: column;
    width: 7rem;
    padding-bottom: 1rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }
  & div.checkout div.currency p {
    padding-top: 1.25rem;
    padding-right: 2.5rem;
    padding-left: 1.25rem;
  }
  & div.checkout div {
    display: flex;
    position: relative;
  }
  & div.checkout div span.item-number {
    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    background: black;
    color: white;
    width: 1.25rem;
    height: 1.252rem;
    border-radius: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & div.checkout div.cart span:hover {
    cursor: pointer;
  }
  & div.checkout div.cart div.drop-down {
    position: absolute;
    top: 2.4rem;
    left: -19rem;
    width: 20.3125rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 0.5rem 1rem 1.25rem;
    /* border: 1px solid red; */
    /* background-color: #5ece7b; */
  }
`;

/* border: 1px solid red; */
