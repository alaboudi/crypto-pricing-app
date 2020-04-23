import React from 'react';
import CryptoPicker from "./crypto-picker";
import Title from "../../lib/ds/title";
import Subtitle from "../../lib/ds/subtitle";
import { Table, TableHeader, TableData, TableRow, TableBody, TableHead } from "../../lib/ds/table";
import Container from "../../lib/ds/container";
import TitleGroup from "../../lib/ds/title-group";
import Spacer from "../../lib/ds/spacer";

const App = () => (
    <Container>
        <TitleGroup>
            <Title>Crypto Stock Market <span aria-label="stock-market" role="img">💹</span></Title>
            <Subtitle>A non reliable crypto price tracker</Subtitle>
        </TitleGroup>

        <Spacer>
            <CryptoPicker />
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
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                    <TableRow>
                        <TableData>1</TableData>
                        <TableData>BTC</TableData>
                        <TableData>$15</TableData>
                        <TableData>Delete</TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </Spacer>
    </Container>
);

export default App;
