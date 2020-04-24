import {createSelector, createStructuredSelector} from "reselect";
import CryptoPriceTracker, { CryptoPriceTrackerProps } from "./crypto-price-tracker.component";
import { connect } from "react-redux";
import Stock from "../../models/stock";
import {selectCatalogue, selectPrices, selectSelectedStocks, State} from "../../state/reducer";

const createCryptos = (
    catalogue: Map<number, Stock>,
    prices: Map<number, number>,
    selectedStocks: number[]
): { rank: number; symbol: string; price: string; }[] => {
    return selectedStocks.map(stockId => {
        const catalogueEntry = catalogue.get(stockId)!;
        const price = prices.get(stockId)!;
        return {
            rank: catalogueEntry.rank,
            symbol: catalogueEntry.symbol,
            price: String(price)
        }
    })
}

const selectCryptos = createSelector(
    selectCatalogue,
    selectPrices,
    selectSelectedStocks,
    createCryptos
);

const selectors = createStructuredSelector<State, CryptoPriceTrackerProps>({
    cryptos: selectCryptos
});

const CryptoPriceTrackerContainer = connect(selectors)(CryptoPriceTracker);

export default CryptoPriceTrackerContainer;
