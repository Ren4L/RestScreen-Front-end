import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypesReducers} from "../../store/store";

export const useTypedSelector:TypedUseSelectorHook<TypesReducers> = useSelector;