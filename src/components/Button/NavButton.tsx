import React from 'react';
import styles from './Button.module.scss';
import {NavigateFunction, useNavigate} from "react-router-dom";
import {Types} from '@utils';
import {useTypedSelector} from "@hooks";


const NavButton = ({content = '', id='', notBar = false, active = false, onClick, link, css, children }:Types.INavButton) => {
    const navigate:NavigateFunction = useNavigate();
    const menuSelector = css ? {value:true} : useTypedSelector(state => state.menu);
    return (
        <div style={css} id={id} className={`${styles.containerNav} ${!menuSelector.value ? styles.containerClose : ''} ${notBar ? styles.containerNavNotBar : ''}`} onClick={link ? () => navigate(link) : onClick }>
            {children}
            <button className={`${!onClick ? styles.hollow : styles.hollowClose} ${active ? styles.hollowActive : ''}`}>
                <span>{content}</span>
            </button>
        </div>
    );
};

export default NavButton;