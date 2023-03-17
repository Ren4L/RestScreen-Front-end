import React, {FC, Fragment} from 'react';
import styles from "./Header.module.scss";
import {Button, Profile, Search, Select} from "@components";
import {useTranslation} from "react-i18next";
import {useWindowSizeState} from "@hooks";


const AuthButtons:FC = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            <Button content={t("Button.home")} link='/'/>
            <Button content={t("Button.signIn")} link='/Auth'/>
        </div>
    );
};

const RegButtons:FC = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            <Button content={t("Button.home")} link='/'/>
            <Button style='white' content={t("Button.reg")} link='/Reg'/>
        </div>
    );
};

const RegAuthButtons:FC = () => {
    const {t} = useTranslation();
    return (
        <Fragment>
            <Search/>
            <div className={styles.buttonContainer}>
                <Select/>
                <Button style='white' content={t("Button.reg")} link='/Reg'/>
                <Button content={t("Button.signIn")} link='/Auth'/>
            </div>
        </Fragment>
    );
};

const RegAuthHomeButtons:FC = () => {
    const {t} = useTranslation();
    return (
        <div className={styles.buttonContainer}>
            <Select/>
            <Button content={t("Button.home")} link='/'/>
            <Button style='white' content={t("Button.reg")} link='/Reg'/>
            <Button content={t("Button.signIn")} link='/Auth'/>
        </div>
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
            return <div className={styles.profileAndLangContainer}>
                        <Search/>
                        <Profile/>
                        <Select/>
                    </div>
    }

    return <>{getSearchPersonalButtons()}</>;
};

export {
    AuthButtons,
    RegButtons,
    RegAuthButtons,
    RegAuthHomeButtons,
    SearchPersonalButtons,
};