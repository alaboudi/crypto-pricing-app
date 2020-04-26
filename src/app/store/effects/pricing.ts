import { ActionsObservable, ofType } from "redux-observable";
import { createStockAddedEvent, createStockPriceRetrievedEvent, createStockPriceRetrievalFailedEvent } from "../actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { from, of } from "rxjs";
import pricingService from "../../services/pricing-service";

const pricingEpic = (actions$: ActionsObservable<any>) => (
    actions$.pipe(
        ofType<ReturnType<typeof createStockAddedEvent>>(createStockAddedEvent.type),
        mergeMap(stockAddedEvent => {
            const stockId = stockAddedEvent.payload.stockId;
            const payload = pricingService(stockId)
                .then(price => ({ id: stockId, price }))
            return from(payload);
        }),
        map(createStockPriceRetrievedEvent),
        catchError(() => of(createStockPriceRetrievalFailedEvent))
    )
);

export default pricingEpic;
