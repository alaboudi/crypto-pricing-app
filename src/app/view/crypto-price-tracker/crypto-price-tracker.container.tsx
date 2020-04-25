import React, { useCallback, MouseEvent } from "react";
import {createSelector} from "reselect";
import CryptoPriceTracker from "./crypto-price-tracker.component";
import { useSelector, useDispatch } from "react-redux";
import Stock from "../../models/stock";
import { selectCatalogue, selectPrices, selectSelectedStocks } from "../../store/reducer";
import { createStockRemovedEvent } from "../../store/actions";

const createCryptos = (
    catalogue: Map<number, Stock>,
    prices: Map<number, number>,
    selectedStocks: number[]
): { id: number; rank: number; symbol: string; price: string; }[] => {
    return selectedStocks.map(stockId => {
        const catalogueEntry = catalogue.get(stockId)!;
        const price = prices.get(stockId)!;
        return {
            id: catalogueEntry.id,
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

const CryptoPriceTrackerContainer = () => {
    const dispatch = useDispatch();
    const cryptos = useSelector(selectCryptos);

    const deleteStock = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            const stockId: number = Number(event.currentTarget.dataset.id);
            dispatch(createStockRemovedEvent({ stockId }));
        },
        [dispatch]
    )

    return <CryptoPriceTracker onDeleteClick={deleteStock} cryptos={cryptos}/>
}

export default CryptoPriceTrackerContainer;
