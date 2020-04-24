import React from 'react';
import CryptoPicker from "./crypto-picker";
import CryptoPriceTracker from "./crypto-price-tracker";
import Title from "../../lib/ds/title";
import Subtitle from "../../lib/ds/subtitle";
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
            <CryptoPriceTracker />
        </Spacer>
    </Container>
);

export default App;
