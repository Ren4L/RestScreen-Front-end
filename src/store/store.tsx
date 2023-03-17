import {combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist'
import menuReducer from "./menuReducer";

const persistConfig = {
    key: 'root',
    storage,
}

const rootCombineReducer = combineReducers({
    user:userReducer,
    menu:menuReducer,
})

const persistedReducer = persistReducer(persistConfig, rootCombineReducer);
export const store = createStore(persistedReducer);
export let persistor = persistStore(store);
export type TypesReducers = ReturnType<typeof rootCombineReducer>;
