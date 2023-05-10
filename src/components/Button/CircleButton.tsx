import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";
import styles from './Button.module.scss';
import {Types} from "@utils";

const CircleButton = ({scale = 43, children, link, handleClick, margin = true}: Types.ICircleButton) => {
    return (
        <Link style={{width: scale+'px', height: scale+"px"}} to={link} onClick={handleClick} className={`${styles.CircleContainer} ${!margin ? styles.CircleContainerNotMargin : ''}`}>
            {children}
        </Link>
    );
};

export default CircleButton;