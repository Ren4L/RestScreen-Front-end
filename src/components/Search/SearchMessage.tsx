import React from 'react';
import styles from './Search.module.scss';
import {Icons} from "@utils";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {useWindowSizeState} from "@hooks";

const SearchMessage = () => {
    const {t} = useTranslation();
    const {WindowSize} = useWindowSizeState();
    const dispatch = useDispatch();

    function handleFilter(){
        dispatch({type: 'disableEverythingExcept/filterMessage'});
    }
    return (
        <div className={styles.containerSearchMessage}>
            <Icons.Search/>
            <input type="search" placeholder={t('Input.search')}/>
            {WindowSize < 1034.99 ?
                <div onClick={handleFilter} className={styles.parameters}>{t('Messanger.parameters')}<Icons.ChevronDown/></div>
            : null}
        </div>
    );
};

export default SearchMessage;