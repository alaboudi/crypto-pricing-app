import { toast } from 'react-toastify';
import { ActionsObservable, ofType, combineEpics } from "redux-observable";
import { createAppKickedOffEvent, createAttemptedToExceedMaxAllowableStocksEvent } from '../actions';
import { tap, ignoreElements } from 'rxjs/operators';

const registerToast = (actions$: ActionsObservable<any>) => (
    actions$.pipe(
        ofType(createAppKickedOffEvent.type),
        tap(() => toast.configure()),
        ignoreElements()
    )
);

const showMaximumStockWarning = (actions$: ActionsObservable<any>) => (
    actions$.pipe(
        ofType(createAttemptedToExceedMaxAllowableStocksEvent.type),
        tap(() => toast("🦄 10 stocks at at time baby!", {
            position: toast.POSITION.TOP_RIGHT,
          })),
        ignoreElements()
    )
);

const toastEpics = combineEpics(registerToast, showMaximumStockWarning);

export default toastEpics;
