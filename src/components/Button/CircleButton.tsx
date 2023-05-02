import React from 'react';
import {Link} from "react-router-dom";
import styles from './Button.module.scss';
import {Types} from "@utils";

const CircleButton = ({children, link, handleClick, margin = true}: Types.ICircleButton) => {
    return (
        <Link to={link} onClick={handleClick} className={`${styles.CircleContainer} ${!margin ? styles.CircleContainerNotMargin : ''}`}>
            {children}
        </Link>
    );
};

export default CircleButton;