import React from "react";
import MultiSelect from "./multi-select";

export default {
    title: 'DS|MultiSelect',
    component: MultiSelect
}

export const lessOptions = () => {
    const options = new Map<number, string>(
        [
            [1, "Option 1"],
            [2, "Option 2"],
            [3, "Option 3"],
            [4, "Option 4"],
            [5, "Option 5"],
            [6, "Option 6"],
            [7, "Option 7"],
            [8, "Option 8"]
        ]
    );

    const selected = [1];
    return (
        <MultiSelect
            placeholder="Select a value"
            options={options}
            selected={selected}
            onChange={() => {}}
        />
    );
};

export const moreOptions = () => {
    const options = new Map<number, string>(
        [
            [1, "Option 1"],
            [2, "Option 2"],
            [3, "Option 3"],
            [4, "Option 4"],
            [5, "Option 5"],
            [6, "Option 6"],
            [7, "Option 7"],
            [8, "Option 8"]
        ]
    );
    const selected = [1, 2];
    return (
        <MultiSelect
            placeholder="Select a value"
            options={options}
            selected={selected}
            onChange={() => {}}
        />
    );
};
