import React, {useRef, useState} from 'react';
import styles from "./VideoBlock.module.scss";
import {useTranslation} from "react-i18next";
import {useWindowSizeState} from "@hooks";
import {Icons} from "@utils";


const VideoBlock = ({poster = 'https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2F--------------2021-07-09---23.35?alt=media&token=a0a32b66-b672-4b2c-982f-794405143eee'}:{poster?:string}) => {
    const {WindowSize} = useWindowSizeState();
    const {t} = useTranslation();
    const VideoRef = useRef<HTMLVideoElement>(null);
    const ContainerRef = useRef<HTMLDivElement>(null);
    let Animate = true;
    let TimeAnimate:NodeJS.Timeout;

    function MouseEnter() {
        Animate = true;
        TimeAnimate = setTimeout(() => {
            if (WindowSize > 850 && Animate) {
                ContainerRef.current.classList.toggle(styles.containerHover);
                VideoRef.current.style.background = 'black';
                VideoRef.current.src = 'https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f';
            }
        }, 1000)
    }

    function MouseLeave() {
        Animate = false;
        clearTimeout(TimeAnimate);
        if (WindowSize > 850 && ContainerRef.current.classList.contains(styles.containerHover)) {
            ContainerRef.current.classList.toggle(styles.containerHover);
            VideoRef.current.style.background = `url(${poster}) 50% 50%/cover no-repeat`;
            VideoRef.current.src = '';
        }
    }

    return (
        <div ref={ContainerRef} className={styles.container} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
            <div className={styles.favourity}><Icons.Favourites/></div>
            <div className={styles.timing}>8:56</div>
            <video autoPlay ref={VideoRef} style={{background:`url(${poster}) 50% 50%/cover no-repeat`}}></video>
            <div className={styles.infContainer}>
                <div className={styles.category}>{t("CategoryVideo.nature")}</div>
                <h2 className={`${styles.title} ${styles.padding}`}>Прекрасные явления природы  в мире пустыни</h2>
                <div className={`${styles.timeAndViewsContainer} ${styles.padding}`}>
                    <div>576 тыс. {t("Video.views")}</div>
                    <div style={{paddingLeft:'5px'}}> 5 секунд {t("Video.back")}</div>
                </div>
                <div className={styles.authorContainer}>
                    <div className={styles.photo} style={{background:`url(https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png) 50% 50%/cover no-repeat`}}/>
                    <div className={styles.name}>Test123</div>
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;