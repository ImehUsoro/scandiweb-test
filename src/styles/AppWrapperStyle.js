import styled, { css } from "styled-components";

export const AppWrapperStyle = styled.div`
  width: 100%;
  ${(props) =>
    props.primary &&
    css`
      background-color: #d3d3d7;
      opacity: 0.3;
    `}
`;
