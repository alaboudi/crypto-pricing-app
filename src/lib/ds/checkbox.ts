import styled from "styled-components";
import tokens from "./tokens";

const Checkbox = styled.input.attrs(() => ({
    type: 'checkbox'
}))`
  appearance: none;
  background-color: #ffffff;
  border: 2px solid ${tokens.colors.gray300};
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
  padding: ${tokens.spaces[1]}px;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  
  &:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
  }
  
  &:checked {
      background-color: ${tokens.colors.blue500};
      border: 2px solid ${tokens.colors.blue500};
      box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
      color: ${tokens.colors.white};
  }
  
  &:checked:after {
      content: '\\2714';
      font-size: 14px;
      position: absolute;
      top: 0px;
      left: 3px;
      color: #ffffff;
  }
`;

export default Checkbox;
