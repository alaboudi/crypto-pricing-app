import React from "react";

import MultiSelect from "../../../lib/ds/multi-select";

export interface CryptoPickerProps {
    selectedCryptoIds: number[];
    cryptoList: Map<number, string>;
}

const CryptoPicker = (props: CryptoPickerProps) => (
    <MultiSelect
        onChange={() => {}}
        options={props.cryptoList}
        placeholder="Select Crypto Currencies"
        selected={props.selectedCryptoIds}
    />
);

export default CryptoPicker;
