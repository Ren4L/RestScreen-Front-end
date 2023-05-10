import React, {FC, Fragment, useEffect} from 'react';
import styles from "./Header.module.scss";
import {Button, CircleButton, NavButton, Profile, Search, Select} from "@components";
import {useTranslation} from "react-i18next";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {Icons} from "@utils";
import {useDispatch} from "react-redux";


const AuthButtons:FC = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        dispatch({type:"setData", payload:true});
    }, []);
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            {
                WindowSize > 850 ?
                    <>
                        <Button content={t("Button.signIn")} link='/Auth'/>
                        <NavButton active={false} link="/" content={t("Button.toHome")}><Icons.Home/></NavButton>
                    </>
                    :
                    <>
                        <CircleButton link='/Auth'><Icons.Auth/></CircleButton>
                        <CircleButton link='/'><Icons.Home/></CircleButton>
                    </>
            }
        </div>
    );
};

const RegButtons:FC = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        dispatch({type:"setData", payload:true});
    }, []);
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            {
                WindowSize > 850 ?
                    <>
                        <Button style='white' content={t("Button.reg")} link='/Reg'/>
                        <NavButton active={false} link="/" content={t("Button.toHome")}><Icons.Home/></NavButton>
                    </>
                    :
                    <>
                        <CircleButton link='/Reg'><Icons.Reg/></CircleButton>
                        <CircleButton link='/'><Icons.Home/></CircleButton>
                    </>
            }
        </div>
    );
};

const RegAuthButtons:FC = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        dispatch({type:"setData", payload:true});
    }, []);
    return (
        <Fragment>
            <Search/>
            <div className={styles.buttonContainer}>
                {
                    WindowSize > 1100 ?
                        <>
                            <Select/>
                            <Button style='white' content={t("Button.reg")} link='/Reg'/>
                            <Button content={t("Button.signIn")} link='/Auth'/>
                        </>
                        :
                        <>
                            <CircleButton link='/Reg'><Icons.Reg/></CircleButton>
                            <CircleButton link='/Auth'><Icons.Auth/></CircleButton>
                            <Select/>
                        </>
                }
            </div>
        </Fragment>
    );
};


const SearchPersonalButtons = () => {
    const {WindowSize} = useWindowSizeState();

    function getSearchPersonalButtons() {
        if (WindowSize > 600)
            return <Fragment>
                        <Search/>
                        <div className={styles.profileAndLangContainer}>
                            <Select/>
                            <Profile/>
                        </div>
                    </Fragment>
        else
            return <div className={styles.profileAndLangContainerMobile}>
                        <Search/>
                        <Profile/>
                        <Select/>
                    </div>
    }

    return <>{getSearchPersonalButtons()}</>;
};

const HomeButtons:FC = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        dispatch({type:"setData", payload:true});
    }, []);
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            {
                WindowSize > 850 ?
                    <>
                        <NavButton active={false} link="/" content={t("Button.toHome")}><Icons.Home/></NavButton>
                    </>
                    :
                    <>
                        <CircleButton link='/'><Icons.Home/></CircleButton>
                    </>
            }
        </div>
    );
};

export {
    AuthButtons,
    RegButtons,
    RegAuthButtons,
    SearchPersonalButtons,
    HomeButtons
};