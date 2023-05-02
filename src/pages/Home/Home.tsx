import React, {Fragment, useEffect} from 'react';
import {Header, NavBar, VideoBlock} from "@components";
import {useTranslation} from "react-i18next";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import NotAuthBanner from "./NotAuthBanner";
import "./Home.scss";
import {useDispatch} from "react-redux";

const Home = () => {
    const {t} = useTranslation();
    let user = useTypedSelector(state => state.user);
    let menu = useTypedSelector(state => state.menu);
    let dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        document.title = t("Button.home");
        if (WindowSize < 851)
            dispatch({type:'setData', payload:{value:false}});

    }, [WindowSize])
    return (
        <Fragment>
            {!user.nickname ? <Header type='regAuth'/> : <Header type='searchPersonal'/>}
            <main className='Container'>
                {!user.nickname ? '' : <NavBar activeButton={0}/>}
                <div className={`Video--List--container${!user.id ? ' Video--List--container--NotAuth' : ''}`}>
                    {!user.nickname ? <NotAuthBanner/> : ''}
                    <h1>{!user.nickname ? t("Home.title1") : t("Home.title2")}</h1>
                    <div className={`Video--List${menu.value && WindowSize > 850 ? ' Video--List--Open--Menu' : ''}`}>
                        <VideoBlock/>
                        <VideoBlock/>
                        <VideoBlock poster='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'/>
                        <VideoBlock/>
                        <VideoBlock/>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Home;