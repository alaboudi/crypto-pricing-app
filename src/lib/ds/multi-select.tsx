import React from "react"
import styled from "styled-components";
import tokens from "./tokens";

import Checkbox from "./checkbox";
import Label from "./label";
import Input from "./input";

const OptionContainer = styled.div`
  background-color: ${tokens.colors.white};
  bottom-border: 1px solid ${tokens.colors.gray100};
  height: ${tokens.spaces[3]};
  padding-left: ${tokens.spaces[2]};
`;

//api will be <multiselect options={[{value:"", label:""}]} selected={[]}>

interface MultiSelectProps {
    options: { value: any; label: string }[];
    selected: any[];
    onChange: () => void
}

const MultiSelect = (props: MultiSelectProps) => (
    <>
        <Input />
        {props.options.map(option => (
            <OptionContainer>
                <Checkbox /><Label>{option.label}</Label>
            </OptionContainer>
        ))}

    </>
);

export default MultiSelect;
