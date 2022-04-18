import styled, { css } from "styled-components";

export const AppStyle = styled.div`
  margin-bottom: 12rem;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 6rem 6rem 6rem;

  h1 {
    font-size: 2.265rem;
    font-weight: 400;
    display: inline-block;
    /* padding-left: 6.31rem; */
  }
`;

// props
// ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
