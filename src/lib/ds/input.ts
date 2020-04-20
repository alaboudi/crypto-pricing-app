import styled from "styled-components";
import tokens from "./tokens";

const Input = styled.input`
  height: ${tokens.spaces[3]}px;
  border: 1px solid ${tokens.colors.gray300};
  font-family: ${tokens.fontFamily};
  padding-left: ${tokens.spaces[2]}px;
  font-size: ${tokens.typeScale[2]}px;
  border-radius: 5px;
`;

export default Input;
