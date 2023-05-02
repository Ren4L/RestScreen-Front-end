import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {Authorization, Chat, ForgotPassword, Home, Messanger, Registration} from "@pages";


const Router:FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Messanger' element={<Messanger/>}/>
            <Route path='/Chat/:id' element={<Chat/>}/>
            <Route path='/Auth' element={<Authorization/>}/>
            <Route path='/Reg' element={<Registration/>}/>
            <Route path="/ForgotPass" element={<ForgotPassword/>}/>
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>
    );
};

export default Router;