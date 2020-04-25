import React, { ChangeEvent } from "react";

import MultiSelect from "../../../lib/ds/multi-select";

export interface CryptoPickerProps {
    selectedCryptoIds: number[];
    cryptoList: Map<number, string>;
    onCryptoChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const CryptoPicker = (props: CryptoPickerProps) => (
    <MultiSelect
        onChange={props.onCryptoChange}
        options={props.cryptoList}
        placeholder="Select Crypto Currencies"
        selected={props.selectedCryptoIds}
    />
);

export default CryptoPicker;
