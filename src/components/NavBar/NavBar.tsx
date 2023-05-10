import React, {useEffect} from 'react';
import {NavButton} from "@components";
import {useTranslation} from "react-i18next";
import {Icons} from "@utils";
import styles from "./NavBar.module.scss";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const NavBar = ({activeButton = 0}:{activeButton:number}) => {
    const {WindowSize} = useWindowSizeState();
    const {t} = useTranslation();
    const menuSelector = useTypedSelector(state => state.menu);
    const userSelector = useTypedSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userSelector.nickname && location.href.indexOf('/Video/') == -1)
            navigate('/auth');
        dispatch({type: "disableEverythingExcept/"});
    }, []);

    if (WindowSize > 850)
        return (
            <nav className={`${styles.container} ${menuSelector.value ? styles.container : styles.containerdeActive}`}>
                <NavButton onClick={() => dispatch({type: 'changeData'})} id='close' content={t("Button.close")}><Icons.Close/></NavButton>
                <NavButton active={activeButton === 0} link="/" content={t("Button.toHome")}><Icons.Home/></NavButton>
                <NavButton active={activeButton === 1} link="/Messanger" content={t("Button.messanger")}><Icons.Messages/></NavButton>
                <NavButton active={activeButton === 2} link="/MySubscriptions" content={t("Button.mySubscribe")}><Icons.mySubscriptions/></NavButton>
                <NavButton active={activeButton === 3} link="/Friends" content={t("Button.friends")}><Icons.Friends/></NavButton>
                <NavButton active={activeButton === 4} link="/Favourite" content={t("Button.favourites")}><Icons.Favourites/></NavButton>
                <footer className={menuSelector.value ? null : styles.footerOff}>Copyright ©2023, Isakov</footer>
            </nav>
        );
    else
        return (
            <nav className={WindowSize > 600 ? styles.containerAdaptive850 : styles.containerAdaptive600}>
                <NavButton active={activeButton === 0} link="/" content={t("Button.toHome")}><Icons.Home/></NavButton>
                <NavButton active={activeButton === 1} link="/Messanger" content={t("Button.messanger")}><Icons.Messages/></NavButton>
                <NavButton active={activeButton === 2} link="/MySubscriptions" content={t("Button.mySubscribe")}><Icons.mySubscriptions/></NavButton>
                <NavButton active={activeButton === 3} link="/Friends" content={t("Button.friends")}><Icons.Friends/></NavButton>
                <NavButton active={activeButton === 4} link="/Favourite" content={t("Button.favourites")}><Icons.Favourites/></NavButton>
            </nav>
        );
};

export default NavBar;