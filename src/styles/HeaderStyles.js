import styled, { css } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
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
    /* border-bottom: 2px solid; */
    font-weight: 600;
  }
  div img:hover {
    cursor: pointer;
  }
  div span {
    font-weight: 500;
    font-size: large;
  }
  & div.cart {
    display: flex;
    align-items: flex-start;
    gap: 1.375rem;
  }
  & div.cart button {
    padding: 0;
    border: none;
    background: none;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    /* border: 1px solid red; */
  }
  & div.cart div.currency {
    position: absolute;
    top: 1.4rem;
    left: -1.25rem;
    flex-direction: column;
    width: 7.125rem;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
      drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
  }
  & div.cart div.currency button {
    padding-top: 1.25rem;
    padding-right: 2.5rem;
    padding-left: 1.25rem;
  }
  & div.cart div {
    display: flex;
    position: relative;
  }
  & div.cart div span {
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
  & div.cart div span:hover {
    cursor: pointer;
  }
`;

/* div > a {
  display: flex;
  align-items: center;
  color: red;
} */

/* border: 1px solid red; */
