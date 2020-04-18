import React from "react";
import { Table, TableRow, TableData, TableHeader } from "./table";

export default {
    title: 'DS|Table',
    component: Table
}

export const defaultTable = () => (
    <Table>
        <TableRow>
            <TableHeader>
                Title 1
            </TableHeader>
            <TableHeader>
                Title 2
            </TableHeader>
            <TableHeader>
                Title 3
            </TableHeader>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
        <TableRow>
            <TableData>hi</TableData>
            <TableData>bye</TableData>
            <TableData>hehe</TableData>
        </TableRow>
    </Table>
);
