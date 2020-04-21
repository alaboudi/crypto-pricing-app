import styled from "styled-components";
import tokens from "./tokens";

const TitleGroup = styled.div`
  & > * {
    margin: 0;
  }
  margin: ${tokens.spaces[3]}px 0;
`;

export default TitleGroup;
