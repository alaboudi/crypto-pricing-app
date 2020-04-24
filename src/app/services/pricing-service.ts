interface ResponsePricing {
    id: number;
    quote: {
        USD: {
            price: number;
        }
    }
}

interface APIResponse {
    data: Record<number, ResponsePricing>
}

const requester = (id: number): Promise<APIResponse> => {
    return fetch(`https://www.stackadapt.com/coinmarketcap/quotes?id=${id}`)
        .then(res => res.json());
}

const adapter = ( id: number) => (response: APIResponse): number => {
    return response.data[id].quote.USD.price;
}

const pricingService = (id: number): Promise<number> => {
    return requester(id).then(adapter(id));
}

export default pricingService;
