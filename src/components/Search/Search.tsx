import React from 'react';
import styles from "./Search.module.scss";
import {Icons} from "@utils";
import {useTranslation} from "react-i18next";
import {useWindowSizeState} from "@hooks";

const Search = () => {
    const {WindowSize} = useWindowSizeState();
    const {t} = useTranslation();
    return (
        <div className={styles.container}>
            {WindowSize > 600 ? <input type="text" placeholder={t("Input.search")}/> : ''}
            <Icons.Search/>
            {WindowSize > 600 ? <Icons.Filters/> : ''}
        </div>
    );
};

export default Search;