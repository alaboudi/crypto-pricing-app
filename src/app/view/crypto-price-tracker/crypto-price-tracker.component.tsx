import React, {MouseEvent} from "react";
import {Table, TableData, TableHeader, TableRow, TableHead, TableBody} from "../../../lib/ds/table";

interface CryptoPriceTrackerProps {
    cryptos: { rank: number; symbol: string; price: string; }[];
    onDeleteClick: (event: MouseEvent<HTMLTableDataCellElement>) => void;
}

const CryptoPriceTracker = (props: CryptoPriceTrackerProps) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableHeader>CMC Rank</TableHeader>
                <TableHeader>Symbol</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader></TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.cryptos.map(crypto => (
                <TableRow>
                    <TableData>{crypto.rank}</TableData>
                    <TableData>{crypto.symbol}</TableData>
                    <TableData>{crypto.price}</TableData>
                    <TableData onClick={props.onDeleteClick}>Delete</TableData>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default CryptoPriceTracker;
