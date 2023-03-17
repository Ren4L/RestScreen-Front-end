import React, {useRef} from 'react';
import styles from "./Select.module.scss";
import {Icons} from "@utils";
import {useTranslation} from "react-i18next";


const Select = () => {
    const select__current = useRef<HTMLDivElement>(null);
    const body = useRef<HTMLDivElement>(null);
    const {i18n} = useTranslation();

    function changeLang() {
        body.current.classList.toggle(styles.body__active);
        i18n.changeLanguage(i18n.language !== "RU" ? "RU" : "EN").then();
    }

    return (
        <div className={styles.container}>
            <label className={styles.activeLang} onClick={() => body.current.classList.toggle(styles.body__active)}>
                <div className={styles.header} >
                    <div ref={select__current} className={styles.current}>{i18n.language}</div>
                </div>
                <Icons.ChevronDown/>
            </label>
            <div ref={body} className={styles.body}>
                <div className={styles.item} onClick={changeLang}>{i18n.language !== "RU" ? "RU" : "EN"}</div>
            </div>
        </div>
    );
};

export default Select;