import React, {FC} from 'react';
import {Routes, Route } from "react-router-dom";
import {
    Authorization,
    Chat, Favourite,
    ForgotPassword,
    Friends,
    Home,
    Messanger, MySubscriptions,
    NotFound,
    Profile,
    Registration, UploadVideo,
    Video
} from "@pages";
import ProtectedRoute from "./ProtectedRoute";


const Router:FC = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute/>}>
                <Route path='/Messanger' element={<Messanger/>}/>
                <Route path='/Chat/:id' element={<Chat/>}/>
                <Route path="/Friends" element={<Friends/>}/>
                <Route path="/Profile/:id" element={<Profile/>}/>
                <Route path="Favourite" element={<Favourite/>}/>
                <Route path="/MySubscriptions" element={<MySubscriptions/>}/>
                <Route path="/UploadVideo" element={<UploadVideo/>}/>
            </Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/Video/:id' element={<Video/>}/>
            <Route path='/Auth' element={<Authorization/>}/>
            <Route path='/Reg' element={<Registration/>}/>
            <Route path="/ForgotPass" element={<ForgotPassword/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default Router;