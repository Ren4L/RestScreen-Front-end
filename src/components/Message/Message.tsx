import React from 'react';
import styles from './Message.module.scss';
import {Icons, Types} from '@utils';
import {useWindowSizeState} from "@hooks";

const Message = ({isCompanion = false, photo, message, time, nickname}:Types.IMessage) => {
    const {WindowSize} = useWindowSizeState();
    if (WindowSize <= 600 )
        return (
            <div className={styles.containerMobile}>
                {photo ?
                    <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                    :
                    <div className={styles.photoNull}><Icons.Profile/></div>
                }
                <div className={styles.nameAndMessage}>
                    <div className={styles.nameAndTime}>
                        <div className={styles.name}>{nickname}</div>
                        <div className={styles.time}>{time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</div>
                    </div>
                    <div className={styles.message}>{message}</div>
                </div>
            </div>
        )
    if (!isCompanion)
        return (
            <div className={styles.containerUser}>
                <div className={styles.nameAndMessage}>
                    <div className={styles.nameAndTime}>
                        <div className={styles.time}>{time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</div>
                        <div className={styles.name}>{nickname}</div>
                    </div>
                    <div className={styles.message}>{message}</div>
                </div>
                {photo ?
                    <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                    :
                    <div className={styles.photoNull}><Icons.Profile/></div>
                }
            </div>
        );
    else
        return (
            <div className={styles.container}>
                {photo ?
                    <div className={styles.photo} style={{background: `url(${photo}) 50% 50%/cover no-repeat`}}></div>
                    :
                    <div className={styles.photoNull}><Icons.Profile/></div>
                }
                <div className={styles.nameAndMessage}>
                    <div className={styles.nameAndTime}>
                        <div className={styles.name}>{nickname}</div>
                        <div className={styles.time}>{time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:{time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}</div>
                    </div>
                    <div className={styles.message}>{message}</div>
                </div>
            </div>
        );
};

export default Message;