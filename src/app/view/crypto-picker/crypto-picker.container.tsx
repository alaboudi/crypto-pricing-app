import {createSelector, createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import Stock from "../../models/stock";
import {selectCatalogue, selectSelectedStocks, State} from "../../state/reducer";
import CryptoPicker, {CryptoPickerProps} from "./crypto-picker.component";

const createCryptoListFromCatalogue = (catalogue: Map<number, Stock>): Map<number, string> => {
    const entries: [number, string][] = Array.from(catalogue).map(([id, stock]) => [id, stock.name]);
    return new Map(entries);
}

const selectCryptoList = createSelector(
    selectCatalogue,
    createCryptoListFromCatalogue
);

const selectors = createStructuredSelector<State, CryptoPickerProps>({
    cryptoList: selectCryptoList,
    selectedCryptoIds: selectSelectedStocks
});

const CryptoPickerContainer = connect(selectors)(CryptoPicker);

export default CryptoPickerContainer;
