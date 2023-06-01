import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Loader} from "@components";
import {Icons, Types} from "@utils";
import './Player.scss';
import {Favourites} from "../../utils/Icons/Icons";



const Player = ({video}:{video:Types.IVideo}) => {
    const [Video, setVideo] = useState<Types.IVideo | null>(video),
        VideoPlayer = useRef<HTMLVideoElement | null>(),
        VideoPlayerContainer = useRef<HTMLDivElement | null>(),
        [Duration, setDuration] = useState<number | null>(),
        [CurrentTime, setCurrentTime] = useState<number | null>(),
        [is2X, setIs2X] = useState<boolean>(false),
        isPlaying = useRef<boolean>(true),
        [isLoading, setIsLoading] = useState<boolean>(false);
    let Playing:NodeJS.Timer;

    useEffect(() => {
        setVideo(video);
        document.addEventListener('keyup', handlePlayerKey);
        return () => {
            clearInterval(Playing);
            document.removeEventListener('keyup', handlePlayerKey);
        };
    }, [video]);

    function handleRangeChange(event: React.FormEvent) {
        // @ts-ignore
        VideoPlayer?.current?.currentTime = event.target.value;
    }

    function handlePlay() {
        if (!isPlaying.current){
            VideoPlayer?.current?.play();
            isPlaying.current = true;
        }
        else {
            VideoPlayer?.current?.pause();
            isPlaying.current = false;
        }
    }

    function Roll5Second() {
        //@ts-ignore
        VideoPlayer?.current?.currentTime += 5;
    }

    function RollBack5Second() {
        //@ts-ignore
        VideoPlayer?.current?.currentTime -= 5;
    }

    function getTiming() {
        let time = new Date(Duration * 1000);
        let currentTime = new Date(CurrentTime * 1000);
        let result = '';

        if (currentTime.getUTCHours() != 0)
            result += `${currentTime.getUTCHours() || "00"}:${currentTime.getUTCMinutes() || "00"}:${currentTime.getUTCSeconds() || "00"}/`;
        else
            result += `${currentTime.getUTCMinutes() || "00"}:${currentTime.getUTCSeconds() || "00"}/`;

        if (time.getUTCHours() != 0)
            result += `${time.getUTCHours() || "00"}:${time.getUTCMinutes() || "00"}:${time.getUTCSeconds() || "00"}`;
        else
            result += `${time.getUTCMinutes() || "00"}:${time.getUTCSeconds() || "00"}`;
        return result;
    }

    function change2X() {
        if (!is2X) {
            //@ts-ignore
            VideoPlayer?.current?.playbackRate = 2;
        }
        else {
            //@ts-ignore
            VideoPlayer?.current?.playbackRate = 1;
        }
        setIs2X(prevState => !prevState);
    }

    function changeFullScreen() {
        const fullscreenElement = document.fullscreenElement;
        if (fullscreenElement) {
            document.exitFullscreen();
        } else {
            VideoPlayerContainer?.current?.requestFullscreen();
        }
    }

    function handlePlayerKey(event: KeyboardEvent) {
        switch (event.code){
            case 'Space':
                handlePlay();
                break;
            case 'ArrowRight':
                Roll5Second();
                break;
            case 'ArrowLeft':
                RollBack5Second();
                break;
            case 'F11':
                changeFullScreen();
                break;
            case 'ArrowUp':
                //@ts-ignore
                VideoPlayer?.current?.volume += 0.2;
                break;
            case 'ArrowDown':
                //@ts-ignore
                VideoPlayer?.current?.volume -= 0.2;
                break;
        }
    }

    return (
        <div ref={VideoPlayerContainer} className="Video--container">
            <Loader visible={isLoading}/>
            <video
                ref={VideoPlayer}
                onLoadedMetadata={(e) => {
                    setDuration(VideoPlayer?.current?.duration);
                    Playing = setInterval(() => {
                        if (VideoPlayer?.current?.readyState != 4)
                            setIsLoading(true);
                        else
                            setIsLoading(false);
                        if (VideoPlayer?.current?.currentTime < VideoPlayer?.current?.duration)
                            setCurrentTime(() => VideoPlayer?.current?.currentTime);
                        else
                            clearInterval(Playing);
                    })
                }}
                autoPlay
                className="Player"
                src={Video?.url} />
            <div className="element--control">
                <input type="range" value={CurrentTime || 0} min={0} max={Duration || 0} onChange={handleRangeChange}/>
                <div className="footer--element">
                    <div className="right--container">
                        <Icons.Play is_Playing={isPlaying} handleClick={handlePlay} />
                        <Icons.Roll5Second handleClick={Roll5Second}/>
                        <Icons.Volume VideoPlayer={VideoPlayer?.current}/>
                        <div className='Video--timing'>{useMemo(()=>getTiming(),[Duration, CurrentTime])}</div>
                    </div>
                    <div className="left--container">
                        <div className={`video--2x${is2X ? " video--2x--active" : ''}`} onClick={change2X}>2X</div>
                        <Icons.FullScreen changeFullScreen={changeFullScreen}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;