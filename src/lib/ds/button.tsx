import React, { useMemo } from "react";
import styled from "styled-components";
import tokens from "./tokens";

export enum Variant {
    Standard = "standard",
    Naked = "naked",
}

export enum Color {
    Danger = "danger",
    Default = "default"
}

interface CustomButtonProps {
    variant?: Variant;
    color?: Color;
    startIcon?: any;
    endIcon?: any;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

// interface ButtonProps {
//     variant?: Variant;
//     color?: Color;
//     startIcon?: any;
//     endIcon?: any;
//     children: any
// }

type ButtonProps = NativeButtonProps & CustomButtonProps;

// this is a private implementation that should not be exported
const BaseButton = styled.button<CustomButtonProps>`
    font-family: ${tokens.fontFamily};
    font-size: ${tokens.typeScale[2]}px;
    border-width: 1px;
    border-style: solid;
    &:hover {
        cursor: pointer;
    }
`;


const getNakedButtonFontColor = (props: ButtonProps) => {
    switch (props.color) {
        case Color.Danger:
            return tokens.colors.red;
        default:
            return tokens.colors.gray800;
        
    }
}

const NakedButton = styled(BaseButton)`
    color: ${getNakedButtonFontColor};
    border-color: transparent;
    &:hover {
        text-decoration: underline;
    }
`;

const getStandardButtonBackgroundColor = (props: ButtonProps) => {
    switch (props.color) {
        case Color.Danger:
            return tokens.colors.red;
        default:
            return tokens.colors.white;
    }
};

const getStandardButtonBorderColor = (props: ButtonProps) => {
    switch (props.color) {
        case Color.Danger:
            return tokens.colors.red;
        default:
            return tokens.colors.gray300;
    }
}

const getStandardButtonFontColor = (props: ButtonProps) => {
    if(props.color === Color.Danger) {
        return tokens.colors.white;
    } else {
        return tokens.colors.gray800;
    }
}

const StandardButton = styled(BaseButton)`
    border-radius: 5px;
    background-color: ${getStandardButtonBackgroundColor};
    border-color: ${getStandardButtonBorderColor};
    color: ${getStandardButtonFontColor};
    height: ${tokens.spaces[3]}px;
`;

const getButtonComponentByVariant = (variant: Variant) => {
    switch (variant) {
        case Variant.Naked:
            return NakedButton;
        default:
            return StandardButton;
    }
}

const ButtonStartIconContainer = styled.span`
    margin-right: ${tokens.spaces[1]}px;
`;

const ButtonEndIconContainer = styled.span`
    margin-left: ${tokens.spaces[1]}px;
`;

const Button = (props: ButtonProps) => {
    const ButtonVariant = useMemo(
        () => getButtonComponentByVariant(props.variant!),
        [props.variant]
    );

    const {children, startIcon, endIcon, ...rest} = props;

    return (
        <ButtonVariant {...rest}>
            {startIcon && <ButtonStartIconContainer>{startIcon}</ButtonStartIconContainer>}
            {children}
            {endIcon && <ButtonEndIconContainer>{endIcon}</ButtonEndIconContainer>}

        </ButtonVariant>
    );
}

Button.defaultProps = {
    variant: Variant.Standard,
    color: Color.Default
}

export default Button;
