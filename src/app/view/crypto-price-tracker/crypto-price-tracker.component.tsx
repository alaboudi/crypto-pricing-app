import React from "react";
import {Table, TableData, TableHeader, TableRow, TableHead, TableBody} from "../../../lib/ds/table";
import Button from "../../../lib/ds/button";

export interface CryptoPriceTrackerProps {
    cryptos: { rank: number; symbol: string; price: string; }[];
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
                    <TableData><Button>Delete</Button></TableData>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

export default CryptoPriceTracker;
