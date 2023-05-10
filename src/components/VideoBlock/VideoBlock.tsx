import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from "./VideoBlock.module.scss";
import {useTranslation} from "react-i18next";
import {useWindowSizeState} from "@hooks";
import {EndingWordController, Icons, Types} from "@utils";
import {Loader} from "@components";
import {useNavigate} from "react-router-dom";


const VideoBlock = ({poster, url, id, category, title, authorId, authorName, authorPhoto, views, datePublic }:Types.IVideo) => {
    const {WindowSize} = useWindowSizeState();
    const {t} = useTranslation();
    const VideoRef = useRef<HTMLVideoElement>(null);
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [Duration, setDuration] = useState<string | React.ReactNode>(<Loader visible={true}/>);
    const navigate = useNavigate();
    let Animate:boolean = true;
    let TimeAnimate:NodeJS.Timeout;

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

    function handleMouseEnter() {
        Animate = true;
        TimeAnimate = setTimeout(() => {
            if (WindowSize > 850 && Animate) {
                ContainerRef?.current?.classList.toggle(styles.containerHover);
                VideoRef.current.style.background = 'black';
                VideoRef.current.src = url;
            }
        }, 1000)
    }

    function handleMouseLeave() {
        Animate = false;
        clearTimeout(TimeAnimate);
        if (WindowSize > 850 && ContainerRef.current.classList.contains(styles.containerHover)) {
            ContainerRef.current.classList.toggle(styles.containerHover);
            VideoRef.current.style.background = `url(${poster}) 50% 50%/cover no-repeat`;
            VideoRef.current.src = '';
        }
    }

    return (
        <div onClick={()=> navigate('/Video/'+id)} ref={ContainerRef} className={styles.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.favourity} onClick={(event) => {event.stopPropagation();}}><Icons.Favourites/></div>
            <div className={styles.timing}>{Duration}</div>
            <video autoPlay ref={VideoRef} style={{background:`url(${poster}) 50% 50%/cover no-repeat`}}></video>
            <div className={styles.infContainer}>
                <div className={styles.category}>{t("CategoryVideo." + category)}</div>
                <h2 className={`${styles.title} ${styles.padding}`}>{title}</h2>
                <div className={`${styles.timeAndViewsContainer} ${styles.padding}`}>
                    <div>{useMemo(() => EndingWordController.getNumber(views, t, "Video.views"), [views, t])}</div>
                    <div style={{paddingLeft:'5px'}}>{useMemo(()=> EndingWordController.getDatePublic(datePublic, t), [t])}</div>
                </div>
                <div className={styles.authorContainer} onClick={(event)=> {event.stopPropagation(); navigate('/Profile/'+authorId)}}>
                    <div className={styles.photo} style={{background:`url(${authorPhoto}) 50% 50%/cover no-repeat`}}/>
                    <div className={styles.name}>{authorName}</div>
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;