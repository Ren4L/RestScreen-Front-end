import React, {useEffect, useState} from "react";

export default function useWindowSizeState():{WindowSize:number, setWindowSize: React.Dispatch<React.SetStateAction<number>>} {
    const [WindowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', resizeWindow);
        function resizeWindow() {
            setWindowSize(window.innerWidth);
        }
        return () => window.removeEventListener('resize', resizeWindow);
    })

    return {WindowSize, setWindowSize};
}