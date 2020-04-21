import styled from "styled-components";
import tokens from "./tokens";

const Title = styled.h1`
  font-size: ${tokens.typeScale[5]}px;
  font-family: ${tokens.fontFamily};
  font-weight: 200;
  line-height: 1.25;
`;

export default Title;
