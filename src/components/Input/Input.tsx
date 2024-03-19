import React, {useRef} from 'react';
import styles from './Input.module.scss';
import {Icons, Types} from "@utils";

const Input = ({placeholder, type = "text", name, className = '', value, onChange}:Types.IInput) => {
    let input = useRef<HTMLInputElement>(null);
    return (
        <div className={`${styles.inputContainer} ${className}`}>
            <input value={value} onChange={onChange} ref={input} name={name} type={type} className={styles.Input} placeholder={placeholder}/>
            {type === 'password' ? <Icons.Eye inputRef={input}/> : ''}
        </div>
    );
};

export default Input;