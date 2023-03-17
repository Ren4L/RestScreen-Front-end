import React, {FC} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Router} from '@components';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

const App:FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default App;