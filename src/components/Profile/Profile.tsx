import React from 'react';
import {Icons} from "@utils";
import styles from './Profile.module.scss';
import {useTypedSelector, useWindowSizeState} from "@hooks";

const Profile = () => {
    const {WindowSize} = useWindowSizeState();
    let userSelector = useTypedSelector(state => state.user);

    if (WindowSize > 600)
        return (
            <div className={styles.container}>
                {userSelector.photo ? <div className={styles.icon} style={{background:`url(${userSelector.photo}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className={styles.ProfileIcon}/>}
                <div className={styles.content}>{userSelector.nickname}</div>
            </div>
        );
    else
        return (
                <>{userSelector.photo ? <div className={styles.icon} style={{background:`url(${userSelector.photo}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className={styles.ProfileIcon}/>}</>
        );
};

export default Profile;