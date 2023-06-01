import React from 'react';
import {useTypedSelector} from "@hooks";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const userSelector = useTypedSelector(state => state.user);

    return userSelector.nickname ? <Outlet/> : <Navigate to='/Auth'/>;
};

export default ProtectedRoute;