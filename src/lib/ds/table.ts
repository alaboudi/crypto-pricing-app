import styled from "styled-components";
import tokens from "./tokens";

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TableRow = styled.tr`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${tokens.colors.gray100};
  }
`;

export const TableHeader = styled.th`
  font-family: ${tokens.fontFamily};
  text-align: left;
  color: ${tokens.colors.gray800};
  font-weight: bold;
  padding: ${tokens.spaces[2]}px ${tokens.spaces[3]}px;
  &:first-of-type, &:last-of-type {
    padding-right: ${tokens.spaces[4]}px;
    padding-left: ${tokens.spaces[4]}px;
  }
`

export const TableData = styled.td`
  font-family: ${tokens.fontFamily};
  color: ${tokens.colors.gray800};
  padding: ${tokens.spaces[2]}px ${tokens.spaces[3]}px;
  &:first-of-type, &:last-of-type {
    padding-right: ${tokens.spaces[4]}px;
    padding-left: ${tokens.spaces[4]}px;
  }
`
