import React, {useState} from 'react';
import styles from "./Search.module.scss";
import {Icons} from "@utils";
import {useTranslation} from "react-i18next";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";

const Search = () => {
    const {WindowSize} = useWindowSizeState();
    const [OpenSearch, setOpenSearch] = useState<boolean>(false);
    const {t} = useTranslation();
    let filterSelector = useTypedSelector(state => state.modal.filterSearch);
    let dispatch = useDispatch();
    let handleClickFilter = () => {
        dispatch({type: 'disableEverythingExcept/filterSearch'});
    };

    const modalWindow = <div className={`${styles.modal} ${filterSelector ? styles.modalActive : ''}`}>
        <div className={styles.radioContainer}>
            <p>{t("Filter.timing")}</p>
            <hr style={{border: "1px solid #525060", width:"100%"}}/>
            <label className={styles.labelCont}><input type="radio" name="timing" value='less4'/><span>{t("Filter.less4")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="timing" value='from4to20'/><span>{t("Filter.from4to20")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="timing" value='more20'/><span>{t("Filter.more20")}</span></label>
        </div>
        <div className={styles.radioContainer}>
            <p>{t("Filter.dateDownload")}</p>
            <hr style={{border: "1px solid #525060", width:"100%"}}/>
            <label className={styles.labelCont}><input type="radio" name="dateDownload" value='lastHour'/><span>{t("Filter.lastHour")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="dateDownload" value='today'/><span>{t("Filter.today")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="dateDownload" value='atThisWeek'/><span>{t("Filter.atThisWeek")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="dateDownload" value='atThisMonth'/><span>{t("Filter.atThisMonth")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="dateDownload" value='atThisYear'/><span>{t("Filter.atThisYear")}</span></label>
        </div>
        <div className={styles.radioContainer}>
            <p>{t("Filter.sorting")}</p>
            <hr style={{border: "1px solid #525060", width:"100%"}}/>
            <label className={styles.labelCont}><input type="radio" name="sorting" value='dateDownload'/><span>{t("Filter.dateDownload")}</span></label>
            <label className={styles.labelCont}><input type="radio" name="sorting" value='timing'/><span>{t("Filter.timing")}</span></label>
        </div>
    </div>;
    const handleClick = () => {
        dispatch({type:'setDataSearchFilter', payload: false});
        setOpenSearch(prevState => !prevState);
    };

    if (WindowSize > 600)
        return (
            <>
                <div className={styles.container}>
                    <input type="search" placeholder={t("Input.search")}/>
                    <Icons.Search/>
                    <Icons.Filters setModalVisible={handleClickFilter}/>
                </div>
                {modalWindow}
            </>
        );
    else
        return (
            <>
                <div style={{cursor:'pointer'}} onClick={handleClick} className={styles.container}>
                    <Icons.Search/>
                </div>
                <div className={`${styles.containerSize} ${OpenSearch ? styles.containerSizeActive : ''}`}>
                    <div>
                        <input type="search" placeholder={t("Input.search")}/>
                        <Icons.Search className={styles.iconSearch}/>
                    </div>
                    <Icons.Filters setModalVisible={handleClickFilter}/>
                    <Icons.Cross handleClick={() => {
                        setOpenSearch(false);
                        dispatch({type: 'setDataSearchFilter', payload: false});
                    }}/>
                </div>
                {modalWindow}
            </>
        );
};

export default Search;