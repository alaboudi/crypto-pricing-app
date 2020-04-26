import styled from "styled-components";
import tokens from "./tokens";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px ${tokens.colors.gray100};
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${tokens.colors.gray100};
  }
`;

interface TableHeaderProps {
  isAsc?: boolean;
  isDsc?: boolean;
}

const getSortMakerContent = (props: TableHeaderProps) => {
  if(props.isAsc) {
    return "'▲'";
  } else if(props.isDsc) {
    return "'▼'";
  } else {
    return ""
  }
}

export const TableHeader = styled.th<TableHeaderProps>`
  font-family: ${tokens.fontFamily};
  text-align: left;
  color: ${tokens.colors.gray800};
  font-weight: bold;
  padding: ${tokens.spaces[2]}px ${tokens.spaces[3]}px;
  &:first-of-type, &:last-of-type {
    padding-right: ${tokens.spaces[4]}px;
    padding-left: ${tokens.spaces[4]}px;
  }
  &:after {
    display: inline-block;
    margin-left: ${tokens.spaces[2]}px;
    content: ${getSortMakerContent};
    height: ${tokens.spaces[2]}px;
    width: ${tokens.spaces[2]}px;
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
