import React from 'react';
import BannerImg from './NotAuthImg.png';
import {useTranslation} from "react-i18next";

const NotAuthBanner = () => {
    const {t} = useTranslation();
    return (
        <div className="Not--Auth--Banner">
            <h1>{t("Home.banner")}</h1>
            <img className="Not--Auth--Img" src={BannerImg}/>
        </div>
    );
};

export default NotAuthBanner;