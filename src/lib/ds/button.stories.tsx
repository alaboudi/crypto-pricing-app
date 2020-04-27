import React from "react";
import Button, { Variant, Color } from "./button";

export default {
    title: "DS|Button",
    component: Button
}

export const basicNakedButton = () => (
    <Button variant={Variant.Naked}>Basic Button</Button>
);

export const dangerNakedButton = () => (
    <Button variant={Variant.Naked} color={Color.Danger}>Danger Button</Button>
);

export const basicStandardButton = () => (
    <Button variant={Variant.Standard}>Standard Button</Button>
);

export const dangerStandardButton = () => (
    <Button variant={Variant.Standard} color={Color.Danger}>Danger Button</Button>
);

export const withEndIcon = () => (
    <Button variant={Variant.Standard} color={Color.Danger} endIcon="▼">Danger Button</Button>
)