import React, {ChangeEvent, FormEvent, MouseEventHandler, useCallback, useRef} from 'react';
import styles from './Input.module.scss';
import {Icons, Types} from "@utils";

const Input = ({placeholder, name, className = '', onChange}:Types.IInput) => {
    let input = useRef<HTMLInputElement>(null);
    return (
        <div className={`${styles.inputContainer} ${className}`}>
            <input onChange={onChange} ref={input} type={name === 'password' ? "password" : "text" } className={styles.Input} placeholder={placeholder}/>
            {name === 'password' ? <Icons.Eye inputRef={input}/> : ''}
        </div>
    );
};

export default Input;