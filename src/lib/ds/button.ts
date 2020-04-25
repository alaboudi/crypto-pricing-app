import styled from "styled-components";
import tokens from "./tokens";

const Button = styled.button`
    color: ${tokens.colors.red};
    font-family: ${tokens.fontFamily};
    font-size: ${tokens.typeScale[2]}px;
    border: 0;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default Button;
