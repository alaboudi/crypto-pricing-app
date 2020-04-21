import styled from "styled-components";
import tokens from "./tokens";

const Subtitle = styled.h2`
  font-size: ${tokens.typeScale[4]}px;
  font-family: ${tokens.fontFamily};
  color: ${tokens.colors.gray500};
  font-weight: 200;
  line-height: 1.5;
`
export default Subtitle;
