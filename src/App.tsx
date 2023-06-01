import React, {FC, useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Router} from '@utils';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
import {useTranslation} from "react-i18next";

const App:FC = () => {
    const {i18n} = useTranslation()
    useEffect(() => {
        if (i18n.language === 'dev')
            i18n.changeLanguage('EN');
    }, []);
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