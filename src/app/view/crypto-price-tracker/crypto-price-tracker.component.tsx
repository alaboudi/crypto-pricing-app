import React, {MouseEvent, useMemo} from "react";
import { useTable, useSortBy, Column, Cell } from "react-table";
import {Table, TableData, TableHeader, TableRow, TableHead, TableBody} from "../../../lib/ds/table";
import Button from "../../../lib/ds/button";

interface Crypto {
    id: number; rank: number; symbol: string; price: string;
}

export interface CryptoPriceTrackerProps {
    cryptos: Crypto[];
    onDeleteClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const CryptoPriceTracker = (props: CryptoPriceTrackerProps) => {
    const columns: Column<Crypto>[] = useMemo(
        () => [
            { Header: 'Rank', accessor: 'rank'},
            { Header: 'Symbol', accessor: 'symbol' },
            { Header: 'Price', accessor: 'price' },
            { id: 'action', Cell: ({ row }: Cell<Crypto>) => {
                return (<Button data-id={row.original.id} onClick={props.onDeleteClick}>Delete</Button>)
            }}
        ],
        [props.onDeleteClick]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<Crypto>({
        columns,
        data: props.cryptos
    }, useSortBy)

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(
                    headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => {
                                const isAsc = column.isSorted && !column.isSortedDesc;
                                const isDsc = column.isSorted && column.isSortedDesc;
                                return (
                                    <TableHeader isAsc={isAsc} isDsc={isDsc} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                    </TableHeader>
                                )
                            })}
                        </TableRow>
                    )
                )}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default CryptoPriceTracker;
