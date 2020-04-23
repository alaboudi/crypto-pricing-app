import produce from "immer";
import {createReducer} from "@reduxjs/toolkit";
import { without } from "ramda";

import Stock from "../models/stock";
import {
    createAppInitializationFailed,
    createAppInitializedEvent,
    createAppKickedOffEvent,
    createStockAddedEvent,
    createStockPriceRetrievalFailedEvent,
    createStockPriceRetrievedEvent, createStockRemovedEvent
} from "./actions";

interface State {
    catalogue: Map<number, Stock>;
    prices: Map<number, number>;
    selectedStocks: number[];
    loading: boolean;
}

const INITIAL_STATE: State = {
    catalogue: new Map<number, any>(),
    prices: new Map<number, number>(),
    selectedStocks: [],
    loading: false
}

const handleAppKickOffEvent = produce((state: State) => {
    state.loading = true;
});

const handleAppInitializedEvent = (state: State, action: ReturnType<typeof createAppInitializedEvent>): State => ({
    loading: false,
    catalogue: action.payload.catalogue,
    selectedStocks: action.payload.selectedStocks,
    prices: action.payload.prices
});

const handleAppInitializationFailedEvent = produce((state: State) => {
    state.loading = false;
});

const handleStockAddedEvent = produce((state: State, action: ReturnType<typeof createStockAddedEvent>) => {
    state.loading = true;
    state.selectedStocks.push(action.payload.stockId);
});

const handleStockPriceRetrievedEvent = produce((state: State, action: ReturnType<typeof createStockPriceRetrievedEvent>) => {
    state.prices.set(action.payload.id, action.payload.cents);
    state.loading = false;
});

const handleStockPriceRetrievalFailedEvent = produce((state: State, action: ReturnType<typeof createStockPriceRetrievalFailedEvent>) =>  {
    state.loading = false;
    state.prices.delete(action.payload.stockId);
    state.selectedStocks = without([action.payload.stockId], state.selectedStocks);
});

const handleStockRemovedEvent = produce((state: State, action: ReturnType<typeof createStockRemovedEvent>) => {
    state.prices.delete(action.payload.stockId);
    state.selectedStocks = without([action.payload.stockId], state.selectedStocks);
});

const stateReducer = createReducer(INITIAL_STATE, {
    [createAppKickedOffEvent.type]: handleAppKickOffEvent,
    [createAppInitializedEvent.type]: handleAppInitializedEvent,
    [createAppInitializationFailed.type]: handleAppInitializationFailedEvent,
    [createStockAddedEvent.type]: handleStockAddedEvent,
    [createStockPriceRetrievedEvent.type]: handleStockPriceRetrievedEvent,
    [createStockPriceRetrievalFailedEvent.type]: handleStockPriceRetrievalFailedEvent,
    [createStockRemovedEvent.type]: handleStockRemovedEvent
});

export const selectCatalogue = (state: State) => state.catalogue;
export const selectPrices = (state: State) => state.prices;
export const selectSelectedStocks = (state: State) => state.selectedStocks;
export const selectLoading = (state: State) => state.loading;

export default stateReducer;
