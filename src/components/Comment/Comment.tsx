import React, {useMemo, useState} from 'react';
import styles from './Comment.module.scss';
import {EndingWordController, Icons, Types} from '@utils';
import {useTranslation} from "react-i18next";

const Comment = ({id, authorName, authorPhoto, comment, datePublic, likes, dislikes}:Types.IComment) => {
    const [isLike, setIsLike] = useState<boolean>(true),
          {t} = useTranslation();
    return (
        <div className={styles.container}>
            {authorPhoto ? <div className={styles.icon} style={{background:`url(${authorPhoto}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className={styles.ProfileIcon}/>}
            <div className={styles.contentContainer}>
                <div className={styles.nameAndDate}>
                    <div className={styles.name}>{authorName}</div>
                    <div className={styles.date}>{useMemo(() => EndingWordController.getDatePublic(datePublic, t), [t])}</div>
                </div>
                <div className={styles.comment}>{comment}</div>
                <div className={styles.likeAndDislike}>
                    <Icons.Like fill={isLike} handleClick={()=>setIsLike(prevState => true)}/>
                    <div className={styles.counter}>{useMemo(()=>EndingWordController.getNumber(likes, t, ''), [likes, t])}</div>
                    <Icons.Like fill={!isLike} handleClick={()=>setIsLike(prevState => false)} isLike={false}/>
                    <div className={styles.counter}>{useMemo(()=>EndingWordController.getNumber(dislikes, t, ''), [dislikes, t])}</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;