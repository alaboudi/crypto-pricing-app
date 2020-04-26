import {createAction} from "@reduxjs/toolkit";

export const createAppKickedOffEvent = createAction("Application KickOff");

interface AppInitializedEventPayload {
    selectedStocks: number[];
    catalogue: Map<number, any>;
    prices: Map<number, number>;
}
export const createAppInitializedEvent = createAction<AppInitializedEventPayload>("Application Initialized");

export const createAppInitializationFailed = createAction("Application Initialization Failed");

interface StockAddedEventPayload {
    stockId: number;
}
export const createStockAddedEvent = createAction<StockAddedEventPayload>("Stock Added");

interface StockPriceRetrievedEventPayload {
    id: number;
    price: number;
}
export const createStockPriceRetrievedEvent = createAction<StockPriceRetrievedEventPayload>("Stock Price Retrieved");

interface StockPriceRetrievalFailedEventPayload {
    stockId: number;
}
export const createStockPriceRetrievalFailedEvent = createAction<StockPriceRetrievalFailedEventPayload>("Stock Price Retrieval Failed");

interface StockRemovedEventPayload {
    stockId: number;
}
export const createStockRemovedEvent = createAction<StockRemovedEventPayload>("Stock Removed");

export const createAttemptedToExceedMaxAllowableStocksEvent = createAction("Attempted To Exceed Max Allowable Stocks");
