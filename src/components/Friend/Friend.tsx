import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Icons, Types} from "@utils";
import styles from './Friend.module.scss';

const Friend = ({id, email, photo, nickname}:Types.IUser) => {
    const navigate = useNavigate(),
        {t} = useTranslation();
    return (
        <div onClick={() => navigate('/Profile/'+id)} className={styles.container}>
            {photo ?
                <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                :
                <div className={styles.photoNull}><Icons.Profile/></div>
            }
            <div className={styles.rightPart}>
                <div className={styles.name}>{nickname}</div>
                <Link onClick={e => e.stopPropagation()} to={'/Chat/'+id}>{t('Friends.writeMessage')}</Link>
            </div>
        </div>
    );
};

export default Friend;