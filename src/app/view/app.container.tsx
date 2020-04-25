import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import App from "./app";
import { createAppKickedOffEvent } from "../store/actions";

const AppContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createAppKickedOffEvent());
    }, [dispatch])

    return <App />
};

export default AppContainer;