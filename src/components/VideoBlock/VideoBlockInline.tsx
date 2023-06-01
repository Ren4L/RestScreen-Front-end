import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './VideoBlock.module.scss';
import {EndingWordController, Icons, Types} from "@utils";
import {useTranslation} from "react-i18next";
import {Loader} from "@components";
import {useNavigate} from "react-router-dom";

const VideoBlockInline = ({poster, url, id, category, title, authorId, authorName, authorPhoto, views, datePublic }:Types.IVideo) => {
    const {t} = useTranslation();
    const VideoRef = useRef<HTMLVideoElement>(null);
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [Duration, setDuration] = useState<string | React.ReactNode>(<Loader visible={true}/>);
    const [IsFavourite, setIsFavourite] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(()=>{
        VideoRef.current.src = url;
        VideoRef.current.addEventListener('loadedmetadata', () => {
            let time = new Date(parseInt((VideoRef.current.duration * 1000).toString()));
            if (time.getUTCHours() != 0)
                setDuration(`${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`);
            else
                setDuration(`${time.getUTCMinutes()}:${time.getUTCSeconds()}`);
            VideoRef.current.src = '';
        });

    },[])

    return (
        <div onClick={()=> navigate('/Video/'+id)} ref={ContainerRef} className={styles.containerInline}>
            <div className={styles.count}>{id}</div>
            <div className={styles.videoCont}>
                <div className={styles.favourity} onClick={(event) => {event.stopPropagation(); setIsFavourite(prevState => !prevState)}}><Icons.Favourites fill={IsFavourite}/></div>
                <div className={styles.timing}>{Duration}</div>
                <video className={styles.video} autoPlay ref={VideoRef} style={{background:`url(${poster}) 50% 50%/cover no-repeat`}}></video>
            </div>
            <div className={styles.infContainer}>
                <div className={styles.category}>{t("CategoryVideo." + category)}</div>
                <h2 className={`${styles.title} ${styles.padding}`}>{title}</h2>
                <div className={styles.timeAndViewsContainer}>
                    <div>{useMemo(() => EndingWordController.getNumber(views, t, "Video.views"), [views, t])}</div>
                    <div className={styles.timeAgo}>{useMemo(()=> EndingWordController.getDatePublic(datePublic, t), [t])}</div>
                </div>
                <div className={styles.authorContainer} onClick={(event)=> {event.stopPropagation(); navigate('/Profile/'+authorId)}}>
                    <div className={styles.photo} style={{background:`url(${authorPhoto}) 50% 50%/cover no-repeat`}}/>
                    <div className={styles.name}>{authorName}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoBlockInline;