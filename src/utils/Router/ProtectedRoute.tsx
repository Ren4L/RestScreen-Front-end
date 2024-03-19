import React, {useEffect} from 'react';
import {useTypedSelector} from "@hooks";
import {Navigate, Outlet} from "react-router-dom";
import {UserController} from "@utils";
import {useDispatch} from "react-redux";

const ProtectedRoute = () => {
    const dispatch = useDispatch();
    const userSelector = useTypedSelector(state => state.user);
    useEffect(() => {
        if (localStorage.getItem("token")){
            UserController.checkAuth(dispatch);
        }
        else{
            localStorage.clear();
            dispatch({type:'clearData'});
        }
    }, [])
    return userSelector.nickname ? <Outlet/> : <Navigate to='/Auth'/>;
};

export default ProtectedRoute;