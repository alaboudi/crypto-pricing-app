import styled from "styled-components";
import tokens from "./tokens";

const Chip = styled.span`
  padding: ${tokens.spaces[1]}px;
  background-color: ${tokens.colors.gray100};
  font-size: ${tokens.typeScale[0]}px;
  font-family: ${tokens.fontFamily};
  border-radius: 5px;
`;

export default Chip;
