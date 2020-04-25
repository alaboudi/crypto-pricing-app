import { ActionsObservable, ofType } from "redux-observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import { take } from "ramda";
import { createAppKickedOffEvent, createAppInitializedEvent, createAppInitializationFailed } from "../actions";
import catalogueService from "../../services/catalogue-service";
import pricingService from "../../services/pricing-service";
import Stock from "../../models/stock";

const createStockCatalogueMap = (stocks: Stock[]): Map<number,Stock> => {
    const catalogueEntries: [number, Stock][] = stocks.map(stock => [stock.id, stock]);
    return new Map(catalogueEntries);
};

const createPriceMap = (prices: number[], ids: number[]): Map<number,number> => {
    const priceEntries: [number, number][] = ids.map((id,index) => [id, prices[index]]);
    return new Map(priceEntries);
}

const getInitialInformation = async () => {
    const stocks = await catalogueService();
    const firstFiveStocksIds = take(5, stocks).map(stock => stock.id);
    const prices = await Promise.all(firstFiveStocksIds.map(pricingService));

    return {
        catalogue: createStockCatalogueMap(stocks),
        prices: createPriceMap(prices, firstFiveStocksIds),
        selectedStocks: firstFiveStocksIds
    }
}


const bootstrapEpic = (actions$: ActionsObservable<any>) => (
    actions$.pipe(
        ofType(createAppKickedOffEvent),
        switchMap(() => from(getInitialInformation())),
        map(createAppInitializedEvent),
        catchError(() => of(createAppInitializationFailed))
    )
);

export default bootstrapEpic;