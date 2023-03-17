import React from 'react';
import {NavButton} from "@components";
import {useTranslation} from "react-i18next";
import {Icons} from "@utils";
import styles from "./NavBar.module.scss";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";

const NavBar = () => {
    const {WindowSize} = useWindowSizeState();
    const {t} = useTranslation();
    const menuSelector = useTypedSelector(state => state.menu);
    const dispatch = useDispatch();
    if (WindowSize > 850)
        return (
            <nav className={`${styles.container} ${menuSelector.value ? styles.container : styles.containerdeActive}`}>
                <NavButton onClick={() => dispatch({type: 'changeData'})} id='close' content={t("Button.close")}><Icons.Close/></NavButton>
                <NavButton content={t("Button.messanger")}><Icons.Messages/></NavButton>
                <NavButton content={t("Button.mySubscribe")}><Icons.Burger/></NavButton>
                <NavButton content={t("Button.friends")}><Icons.Friends/></NavButton>
                <NavButton content={t("Button.favourites")}><Icons.Favourites/></NavButton>
            </nav>
        );
    else
        return (
            <nav className={WindowSize > 600 ? styles.containerAdaptive850 : styles.containerAdaptive600}>
                <NavButton content={t("Button.messanger")}><Icons.Messages/></NavButton>
                <NavButton content={t("Button.mySubscribe")}><Icons.Burger/></NavButton>
                <NavButton content={t("Button.friends")}><Icons.Friends/></NavButton>
                <NavButton content={t("Button.favourites")}><Icons.Favourites/></NavButton>
            </nav>
        );
};

export default NavBar;