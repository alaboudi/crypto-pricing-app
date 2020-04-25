import React, {useState, useRef, ChangeEvent} from "react";
import styled from "styled-components";
import useOutsideClickHandler from "./hooks/useOutsideClickHandler";
import tokens from "./tokens";

import Checkbox from "./checkbox";
import Label from "./label";
import Input from "./input";

const Container = styled.div`
  display: inline-block;
  position: relative;
`;

const OptionsContainer = styled.div`
  position: absolute;
  border-radius: 5px;
  width: 100%;
  top: calc(100% + ${tokens.spaces[2]}px);
  max-height: ${tokens.spaces[6]}px;
  box-shadow: 1px 2px 6px 1px ${tokens.colors.gray100};
  overflow-y: auto;
`;

const Option = styled.div`
  background-color: ${tokens.colors.white};
  height: ${tokens.spaces[3]}px;
  padding-left: ${tokens.spaces[2]}px;
  padding-top: ${tokens.spaces[1]}px;
`;

type Serializable = number | string;

interface MultiSelectProps {
    options: Map<Serializable, string>;
    selected: Serializable[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const MultiSelect = (props: MultiSelectProps) => {
    const [AreOptionsVisible, setAreOptionsVisible] = useState<boolean>(false);
    const containingElementRef = useRef(null);

    const showOptions = () => {
        setAreOptionsVisible(true);
    }

    const hideOptions = () => {
        setAreOptionsVisible(false);
    }

    useOutsideClickHandler(containingElementRef, hideOptions);

    return (
        <Container ref={containingElementRef}>
            <Input placeholder={props.placeholder} onClick={showOptions} readOnly/>
            {AreOptionsVisible && (
                <OptionsContainer>
                    {Array.from(props.options).map(([id, label]) => (
                        <Option key={id}>
                            <Checkbox
                                data-id={id}
                                onChange={props.onChange}
                                checked={props.selected.includes(id)}
                            />
                            <Label>{label}</Label>
                        </Option>
                    ))}
                </OptionsContainer>
            )}
        </Container>
    );
};

export default MultiSelect;
