import React from 'react';
import styles from './Button.module.scss';
import {NavigateFunction, useNavigate} from "react-router-dom";
import {Types} from '@utils';
import {useTypedSelector} from "@hooks";


const NavButton = ({content = '', id='', onClick, link, css, children }:Types.INavButton) => {
    const navigate:NavigateFunction = useNavigate();
    const menuSelector = useTypedSelector(state => state.menu)
    return (
        <div id={id} className={`${styles.containerNav} ${!menuSelector.value ? styles.containerClose : ''}`} onClick={link ? () => navigate(link) : onClick }>
            {children}
            <button style={css} className={!onClick ? styles.hollow : styles.hollowClose}>
                <span>{content}</span>
            </button>
        </div>
    );
};

export default NavButton;