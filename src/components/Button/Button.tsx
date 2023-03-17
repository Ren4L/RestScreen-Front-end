import React from 'react';
import styles from "./Button.module.scss";
import {Types} from "@utils";
import {NavigateFunction, useNavigate} from "react-router-dom";

const Button = ({content = '', style = 'orange', link, css }:Types.IButton) => {
    const navigate:NavigateFunction = useNavigate();
    return (
        <div className={styles.container} style={css} onClick={link ? () => navigate(link) : null}>
            <button className={styles[style]}>
                <span>{content}</span>
            </button>
        </div>
    );
};

export default Button;