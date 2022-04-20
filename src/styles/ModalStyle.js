import styled, { css } from "styled-components";

export const ModalStyle = styled.div`
  ${(props) =>
    props.primary &&
    css`
      background-color: #d3d3d7;
    `}
`;
