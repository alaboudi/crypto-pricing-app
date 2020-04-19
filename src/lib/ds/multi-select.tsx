import React from "react"
import styled from "styled-components";
import tokens from "./tokens";

import Checkbox from "./checkbox";

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
}

const MultiSelect = (props: MultiSelectProps) => (
    <>
        <OptionContainer>
            <Checkbox />
        </OptionContainer>
    </>
);
