import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {Authorization, ForgotPassword, Home, Registration} from "@pages";
import {useTranslation} from "react-i18next";


const Router:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Auth' element={<Authorization/>}/>
            <Route path='/Reg' element={<Registration/>}/>
            <Route path="/ForgotPass" element={<ForgotPassword/>}/>
        </Routes>
    );
};

export default Router;