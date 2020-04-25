import React, {MouseEvent} from "react";
import {Table, TableData, TableHeader, TableRow, TableHead, TableBody} from "../../../lib/ds/table";
import Button from "../../../lib/ds/button";

export interface CryptoPriceTrackerProps {
    cryptos: { id: number; rank: number; symbol: string; price: string; }[];
    onDeleteClick: (event: MouseEvent<HTMLButtonElement>) => void
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
                <TableRow key={crypto.symbol}>
                    <TableData>{crypto.rank}</TableData>
                    <TableData>{crypto.symbol}</TableData>
                    <TableData>${crypto.price}</TableData>
                    <TableData>
                        <Button data-id={crypto.id} onClick={props.onDeleteClick}>Delete</Button>
                    </TableData>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default CryptoPriceTracker;
