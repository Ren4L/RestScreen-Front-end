import React, {useMemo} from 'react';
import styles from './MessageBlock.module.scss';
import {Icons, Types} from "@utils";
import {useWindowSizeState} from "@hooks";
import {useNavigate} from "react-router-dom";

const MessageBlock = ({id, photo, nickname, time, lastMessage, countMessage}:Types.IMessageBlock) => {
    const {WindowSize} = useWindowSizeState();
    const navigate = useNavigate();
    const lastMessageSize = (WindowSize:number) => {
        if (WindowSize > 1920)
            return 140;
        else if (WindowSize > 1720)
            return 120;
        else if (WindowSize > 1500)
            return 90;
        else if (WindowSize > 1300)
            return 80;
        else if (WindowSize > 1200)
            return 60;
        else if (WindowSize > 1000)
            return 40;
        else if (WindowSize > 900)
            return 29;
        else if (WindowSize > 850)
            return 20;
        else
            return 20;
    }

    return (
        <div onClick={() => navigate('/Chat/' + id)} className={styles.container}>
            {photo ?
                <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                :
                <div className={styles.photoNull}><Icons.Profile/></div>
            }
            <div className={styles.NickAndMessageContainer}>
                <div className={styles.nickname}>{nickname}</div>
                <div className={styles.message}>{lastMessage.slice(0, useMemo(() => lastMessageSize(WindowSize), [WindowSize])) + '...'}</div>
            </div>
            <div className={styles.TimeAndCountContainer}>
                <div className={styles.time}>{time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</div>
                {countMessage ? <div className={styles.count}>{countMessage}</div> : null}
            </div>
        </div>
    );
};

export default MessageBlock;