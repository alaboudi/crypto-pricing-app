import styled from "styled-components";
import tokens from "./tokens";

const Spacer = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${tokens.spaces[2]}px;
  }
`;

export default Spacer;

