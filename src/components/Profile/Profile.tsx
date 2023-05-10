import React, {useState} from 'react';
import {Icons} from "@utils";
import styles from './Profile.module.scss';
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {CircleButton, NavButton} from "@components";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";

const Profile = () => {
    const {WindowSize} = useWindowSizeState();
    let userSelector = useTypedSelector(state => state.user);
    let profileSelector = useTypedSelector(state => state.modal.profile);
    let dispatch = useDispatch();
    const {t} = useTranslation();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({type: 'disableEverythingExcept/profile'});
    };
    const modalWindow =
        <div className={`${styles.containerModal} ${profileSelector ? styles.containerModalActive : ''}`}>
            <div className={styles.profileContainer}>
                {userSelector.photo ? <div className={styles.icon} style={{background:`url(${userSelector.photo}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className={styles.ProfileIcon}/>}
                <div className={styles.nickContainer}>
                    <p>{userSelector.nickname}</p>
                    <p>@{userSelector.nickname}</p>
                </div>
            </div>
            <hr className={styles.line}/>
            <div className={styles.buttonContainer}>
                <NavButton css={{width:'100%'}} notBar={true} link={'/Profile/'+(userSelector.id)} content={t("Button.personalAccount")}><Icons.ProfileButton/></NavButton>
                <NavButton css={{width:'100%'}} notBar={true} link="/auth" content={t("Button.exit")}><Icons.Exit/></NavButton>
            </div>
        </div>;

    if (WindowSize > 600)
        return (
            <>
                <div onClick={handleClick} className={styles.container}>
                    {userSelector.photo ? <div className={styles.icon} style={{background:`url(${userSelector.photo}) 50% 50%/cover no-repeat`}}/> : <CircleButton handleClick={handleClick} margin={false}><Icons.Profile/></CircleButton>}
                    <div className={styles.content}>{userSelector.nickname}</div>
                </div>
                {modalWindow}
            </>
        );
    else
        return (
                <>
                    {userSelector.photo ? <div onClick={handleClick} className={styles.icon} style={{background:`url(${userSelector.photo}) 50% 50%/cover no-repeat`}}/> : <CircleButton handleClick={handleClick}><Icons.Profile/></CircleButton>}
                    {modalWindow}
                </>
        );
};

export default Profile;