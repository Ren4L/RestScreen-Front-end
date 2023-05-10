import React, {useEffect} from 'react';
import {Header} from "@components";
import Lottie from "lottie-react";
import NotFoundJson from './404_Lottie.json';
import './NotFound.scss';
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();

    useEffect(() => {document.title = t("NotFound.title")},[t]);

    return (
        <>
            <Header type='home'/>
            <div className="NotFound--container">
                <h1 className="NotFound--title1">404</h1>
                <h2 className="NotFound--title2">{t("NotFound.title")}</h2>
                <Lottie animationData={NotFoundJson} className="Animation--404"/>
            </div>
        </>
    );
};

export default NotFound;