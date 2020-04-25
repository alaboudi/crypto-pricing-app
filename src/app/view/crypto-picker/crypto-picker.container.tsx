import React, { ChangeEvent, useCallback } from "react";
import {createSelector} from "@reduxjs/toolkit";
import {useSelector, useDispatch} from "react-redux";
import Stock from "../../models/stock";
import {selectCatalogue, selectSelectedStocks} from "../../store/reducer";
import CryptoPicker from "./crypto-picker.component";
import { createStockAddedEvent, createStockRemovedEvent } from "../../store/actions";

const createCryptoListFromCatalogue = (catalogue: Map<number, Stock>): Map<number, string> => {
    const entries: [number, string][] = Array.from(catalogue).map(([id, stock]) => [id, stock.name]);
    return new Map(entries);
}

const selectCryptoList = createSelector(
    selectCatalogue,
    createCryptoListFromCatalogue
);

const CryptoPickerContainer = () => {
    const cryptoList = useSelector(selectCryptoList);
    const selectedCryptoIds = useSelector(selectSelectedStocks);
    const dispatch = useDispatch();

    const onCryptoChangeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const stockId = Number(event.currentTarget.dataset.id);
            if(event.currentTarget.checked) {
                dispatch(createStockAddedEvent({stockId}))
            } else {
                dispatch(createStockRemovedEvent({stockId}));
            }
        },
        [dispatch]
    )

    return (
        <CryptoPicker
            onCryptoChange={onCryptoChangeHandler}
            cryptoList={cryptoList}
            selectedCryptoIds={selectedCryptoIds}
        />
    );
}

export default CryptoPickerContainer;
