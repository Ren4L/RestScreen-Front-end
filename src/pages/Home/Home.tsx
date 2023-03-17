import React, {Fragment, useEffect} from 'react';
import {Header, NavBar, VideoBlock} from "@components";
import {useTranslation} from "react-i18next";
import {useTypedSelector} from "@hooks";
import NotAuthBanner from "./NotAuthBanner";
import "./Home.scss";

const Home = () => {
    const {t} = useTranslation();
    let user = useTypedSelector(state => state.user);
    useEffect(()=>{
        document.title = t("Button.home");
    })
    return (
        <Fragment>
            {!user.nickname ? <Header type='regAuth'/> : <Header type='searchPersonal'/>}
            <main className={!user.nickname ? 'Home--ContainerNotAuth' : 'Home--Container'}>
                {!user.nickname ? '' : <NavBar/>}
                <div className="Video--List--container">
                    {!user.nickname ? <NotAuthBanner/> : ''}
                    <h1>{t("Home.title2")}</h1>
                    <div className="Video--List">
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