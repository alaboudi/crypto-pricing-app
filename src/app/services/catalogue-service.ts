import Stock from "../models/stock";

interface APIResponse {
    data: {"id": number; name: string; symbol: string; rank: number}[]
}

const requester = (): Promise<APIResponse> => {
    return fetch("https://www.stackadapt.com/coinmarketcap/map")
        .then(res => res.json());
};

const adapter = (apiResponse: APIResponse): Stock[] => {
    return apiResponse.data;
}

const catalogueService = (): Promise<Stock[]> => {
    return requester()
        .then(adapter);
}

export default catalogueService;