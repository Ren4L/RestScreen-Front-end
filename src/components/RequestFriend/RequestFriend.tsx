import React from 'react';
import styles from './RequestFriend.module.scss';
import {Icons, Types} from '@utils';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useWindowSizeState} from "@hooks";
import {CircleButton} from "@components";

const RequestFriend = ({id, mail, photo, nickname}:Types.IUser) => {
    const navigate = useNavigate(),
            {t} = useTranslation(),
        {WindowSize} = useWindowSizeState();
    return (
        <div onClick={() => navigate('/Profile/'+id)} className={styles.container}>
            {photo ?
                <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                :
                <div className={styles.photoNull}><Icons.Profile/></div>
            }
            <div className={styles.rightPart}>
                <div className={styles.name}>{nickname}</div>
                <div className={styles.buttonContainer}>
                    {WindowSize < 750 ? <CircleButton scale={35}><Icons.AddFriend scale={20}/></CircleButton> : <button className={styles.buttonAccept}>{t("Friends.accept")}</button>}
                    {WindowSize < 750 ? <CircleButton scale={35}><Icons.NotAcceptFriend scale={20}/></CircleButton> : <button className={styles.buttonNotAccept}>{t("Friends.notAccept")}</button>}
                </div>
            </div>
        </div>
    );
};

export default RequestFriend;