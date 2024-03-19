import React, {Dispatch, FC, MouseEventHandler, MutableRefObject, Ref, SetStateAction, useState} from 'react';
import styles from './Icons.module.scss';
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useTypedSelector} from "@hooks";
import {Types} from "@utils";

export const Logo = ({TextOn = true}: { TextOn?: boolean }) => {
    const navigate:NavigateFunction = useNavigate();
    return (
        <div className={styles.LogoContainer} onClick={() => navigate('/')}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.1601 17.16V30.84C42.1601 33.08 40.9601 35.16 39.0201 36.3L27.1401 43.16C25.2001 44.28 22.8001 44.28 20.8401 43.16L8.96008 36.3C8.00362 35.7455 7.20994 34.949 6.65877 33.9906C6.1076 33.0322 5.81835 31.9456 5.82008 30.84V17.16C5.82008 14.92 7.02008 12.84 8.96008 11.7L20.8401 4.84C22.7801 3.72 25.1801 3.72 27.1401 4.84L39.0201 11.7C40.9601 12.84 42.1601 14.9 42.1601 17.16Z" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.5 24V21.6C19.5 18.52 21.68 17.26 24.34 18.8L26.42 20L28.5 21.2C31.16 22.74 31.16 25.26 28.5 26.8L26.42 28L24.34 29.2C21.68 30.74 19.5 29.48 19.5 26.4V24Z" stroke="#FF4D00" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {TextOn ? <div className={styles.LogoContent}>RestScreen</div> : ''}
        </div>
    );
};

export const ChevronDown:FC = () => {
    return (
        <svg style={{minWidth:'20px'}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.05752 5.80749C2.11558 5.74928 2.18455 5.7031 2.26048 5.6716C2.33641 5.64009 2.41781 5.62387 2.50002 5.62387C2.58223 5.62387 2.66363 5.64009 2.73956 5.6716C2.81549 5.7031 2.88446 5.74928 2.94252 5.80749L10 12.8662L17.0575 5.80749C17.1156 5.74938 17.1846 5.70328 17.2605 5.67183C17.3365 5.64038 17.4178 5.6242 17.5 5.6242C17.5822 5.6242 17.6636 5.64038 17.7395 5.67183C17.8154 5.70328 17.8844 5.74938 17.9425 5.80749C18.0006 5.8656 18.0467 5.93458 18.0782 6.01051C18.1096 6.08643 18.1258 6.16781 18.1258 6.24999C18.1258 6.33217 18.1096 6.41354 18.0782 6.48947C18.0467 6.56539 18.0006 6.63438 17.9425 6.69249L10.4425 14.1925C10.3845 14.2507 10.3155 14.2969 10.2396 14.3284C10.1636 14.3599 10.0822 14.3761 10 14.3761C9.91781 14.3761 9.83641 14.3599 9.76048 14.3284C9.68455 14.2969 9.61558 14.2507 9.55752 14.1925L2.05752 6.69249C1.99931 6.63443 1.95314 6.56546 1.92163 6.48953C1.89012 6.4136 1.8739 6.3322 1.8739 6.24999C1.8739 6.16778 1.89012 6.08638 1.92163 6.01045C1.95314 5.93451 1.99931 5.86554 2.05752 5.80749Z" fill="white"/>
        </svg>
    );
};

export const Filters = ({setModalVisible}:{setModalVisible:Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div onClick={()=>setModalVisible(prevState => !prevState)} style={{maxWidth:"43px", maxHeight:"43px"}}>
            <svg cursor='pointer' width="43" height="43" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23.5" cy="24" r="23" stroke="#525060"/>
                <path d="M17.2062 13H31.7938C33.011 13 34 13.9492 34 15.1174V17.4539C34 18.3119 33.4484 19.3706 32.8969 19.9L28.1421 23.9341C27.4765 24.4634 27.039 25.5221 27.039 26.3801V30.9435C27.039 31.5824 26.6016 32.4221 26.0501 32.7507L24.5095 33.6816C23.0641 34.5395 21.0861 33.5721 21.0861 31.8745V26.2523C21.0861 25.5039 20.6486 24.5547 20.1922 24.0253L15.989 19.7722C15.4374 19.2611 15 18.2936 15 17.6547V15.227C15 13.9492 15.989 13 17.2062 13Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export const Search = ({className}:{className?:string}) => {
    return (
        <div className={className}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 22L20 20M11.5 21C12.7476 21 13.9829 20.7543 15.1355 20.2769C16.2881 19.7994 17.3354 19.0997 18.2175 18.2175C19.0997 17.3354 19.7994 16.2881 20.2769 15.1355C20.7543 13.9829 21 12.7476 21 11.5C21 10.2524 20.7543 9.0171 20.2769 7.86451C19.7994 6.71191 19.0997 5.66464 18.2175 4.78249C17.3354 3.90033 16.2881 3.20056 15.1355 2.72314C13.9829 2.24572 12.7476 2 11.5 2C8.98044 2 6.56408 3.00089 4.78249 4.78249C3.00089 6.56408 2 8.98044 2 11.5C2 14.0196 3.00089 16.4359 4.78249 18.2175C6.56408 19.9991 8.98044 21 11.5 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export const Profile = ({className='', handleClick}:Types.IProfilIcon) => {
    return (
        <svg cursor="pointer" style={{minWidth: "43px"}} className={className} onClick={handleClick} width="43" height="43" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0819 20.9818C23.9579 20.9694 23.809 20.9694 23.6726 20.9818C22.249 20.9335 20.9001 20.333 19.9116 19.3074C18.9231 18.2819 18.3726 16.9118 18.3766 15.4874C18.3766 12.4487 20.8324 9.98057 23.8834 9.98057C24.6058 9.96754 25.3236 10.0969 25.996 10.3613C26.6684 10.6257 27.282 11.0199 27.802 11.5215C28.322 12.0231 28.7381 12.6222 29.0266 13.2845C29.3151 13.9469 29.4703 14.6596 29.4833 15.382C29.4963 16.1043 29.367 16.8222 29.1026 17.4945C28.8382 18.1669 28.4439 18.7806 27.9424 19.3006C27.4408 19.8206 26.8417 20.2367 26.1793 20.5252C25.517 20.8136 24.8042 20.9688 24.0819 20.9818ZM17.8805 25.5585C14.879 27.5677 14.879 30.842 17.8805 32.8389C21.2913 35.121 26.8849 35.121 30.2957 32.8389C33.2972 30.8296 33.2972 27.5553 30.2957 25.5585C26.8973 23.2888 21.3037 23.2888 17.8805 25.5585Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Eye = ({inputRef}:{inputRef?:MutableRefObject<HTMLInputElement>}) => {
    function Click() {
        switch (inputRef.current.type) {
            case "password":
                inputRef.current.type = "text";
                break;
            case "text":
                inputRef.current.type = "password";
                break;
            default:
                break;
        }
    }
    return (
        <svg onClick={Click} cursor='pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z" stroke="#4C4B57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#4C4B57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Google = ({className = ''} : {className:string}) => {
    return (
        <svg className={className} cursor='pointer' width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="45" height="45" rx="5" fill="#FF4D00"/>
            <path d="M36.6 19.95H23.2834V25.1917H31.075C30.9334 26.4667 30.0834 28.45 28.2417 29.725C27.1084 30.575 25.4084 31.1417 23.2834 31.1417C19.6 31.1417 16.3417 28.7334 15.2084 25.1917C14.925 24.3417 14.7834 23.35 14.7834 22.3584C14.7834 21.3667 14.925 20.375 15.2084 19.525C15.35 19.2417 15.35 18.9584 15.4917 18.8167C16.7667 15.8417 19.7417 13.7167 23.2834 13.7167C25.975 13.7167 27.675 14.85 28.8084 15.8417L32.775 11.875C30.3667 9.75004 27.1084 8.33337 23.2834 8.33337C17.7584 8.33337 12.9417 11.45 10.675 16.125C9.68337 18.1084 9.1167 20.2334 9.1167 22.5C9.1167 24.7667 9.68337 26.8917 10.675 28.875C12.9417 33.55 17.7584 36.6667 23.2834 36.6667C27.1084 36.6667 30.3667 35.3917 32.6334 33.2667C35.325 30.8584 36.8834 27.175 36.8834 22.7834C36.8834 21.65 36.7417 20.8 36.6 19.95Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Error = () => {
    return (
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.95352 1.51199C5.96822 1.50393 5.98475 1.4998 6.00152 1.49999C6.01803 1.49993 6.03429 1.50406 6.04877 1.51199C6.06592 1.52228 6.07993 1.53706 6.08927 1.55474L11.232 10.305C11.259 10.35 11.2583 10.398 11.2335 10.4422C11.224 10.4604 11.2101 10.4759 11.193 10.4872C11.1782 10.4964 11.1609 10.5008 11.1435 10.5H0.85952C0.842111 10.5008 0.824853 10.4964 0.81002 10.4872C0.792961 10.4759 0.779034 10.4604 0.76952 10.4422C0.757161 10.4214 0.750764 10.3976 0.751028 10.3734C0.751293 10.3492 0.758209 10.3255 0.77102 10.305L5.91302 1.55474C5.92239 1.53709 5.93639 1.52231 5.95352 1.51199ZM6.73652 1.17449C6.66228 1.04517 6.55523 0.937719 6.42618 0.862999C6.29712 0.788279 6.15064 0.748932 6.00152 0.748932C5.8524 0.748932 5.70592 0.788279 5.57687 0.862999C5.44781 0.937719 5.34076 1.04517 5.26652 1.17449L0.12377 9.92474C-0.21898 10.5082 0.19202 11.25 0.85877 11.25H11.1435C11.8103 11.25 12.222 10.5075 11.8785 9.92474L6.73652 1.17449Z" fill="#FF1F0F"/>
            <path d="M5.25146 9C5.25146 8.9015 5.27086 8.80398 5.30856 8.71298C5.34625 8.62199 5.40149 8.53931 5.47113 8.46967C5.54078 8.40002 5.62346 8.34478 5.71445 8.30709C5.80545 8.2694 5.90297 8.25 6.00146 8.25C6.09996 8.25 6.19748 8.2694 6.28848 8.30709C6.37947 8.34478 6.46215 8.40002 6.53179 8.46967C6.60144 8.53931 6.65668 8.62199 6.69437 8.71298C6.73207 8.80398 6.75146 8.9015 6.75146 9C6.75146 9.19891 6.67245 9.38967 6.53179 9.53033C6.39114 9.67098 6.20038 9.75 6.00146 9.75C5.80255 9.75 5.61179 9.67098 5.47113 9.53033C5.33048 9.38967 5.25146 9.19891 5.25146 9ZM5.32496 4.49625C5.31498 4.40163 5.32499 4.30597 5.35437 4.21547C5.38374 4.12497 5.43181 4.04166 5.49545 3.97094C5.5591 3.90022 5.63691 3.84367 5.72382 3.80496C5.81074 3.76625 5.90482 3.74625 5.99996 3.74625C6.09511 3.74625 6.18919 3.76625 6.27611 3.80496C6.36302 3.84367 6.44083 3.90022 6.50448 3.97094C6.56812 4.04166 6.61619 4.12497 6.64556 4.21547C6.67494 4.30597 6.68495 4.40163 6.67496 4.49625L6.41247 7.1265C6.40365 7.22983 6.35637 7.32608 6.27998 7.39622C6.2036 7.46637 6.10367 7.50529 5.99996 7.50529C5.89626 7.50529 5.79633 7.46637 5.71995 7.39622C5.64356 7.32608 5.59628 7.22983 5.58746 7.1265L5.32496 4.49625Z" fill="#FF1F0F"/>
        </svg>
    );
};

export const mySubscriptions = () => {
    return (
        <svg cursor='pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(1.5,1)" d="M15.41 2.99999C17.35 2.99999 18.91 4.56999 18.91 6.49999C18.91 8.38999 17.41 9.92999 15.54 9.99999C15.4536 9.98999 15.3664 9.98999 15.28 9.99999M17.34 19C18.06 18.85 18.74 18.56 19.3 18.13C20.86 16.96 20.86 15.03 19.3 13.86C18.75 13.44 18.08 13.16 17.37 13M8.15997 9.86999C8.05997 9.85999 7.93997 9.85999 7.82997 9.86999C6.68217 9.83102 5.59461 9.34683 4.7976 8.51995C4.00059 7.69307 3.55671 6.58844 3.55997 5.43999C3.55997 2.98999 5.53997 0.99999 7.99997 0.99999C9.17621 0.978773 10.3127 1.42568 11.1594 2.2424C12.0061 3.05912 12.4938 4.17875 12.515 5.35499C12.5362 6.53123 12.0893 7.66771 11.2726 8.51444C10.4558 9.36117 9.33621 9.84877 8.15997 9.86999ZM3.15997 13.56C0.739971 15.18 0.739971 17.82 3.15997 19.43C5.90997 21.27 10.42 21.27 13.17 19.43C15.59 17.81 15.59 15.17 13.17 13.56C10.43 11.73 5.91997 11.73 3.15997 13.56Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Messages:FC = () => {
    return (
        <svg cursor='pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.578 17.5113 12.9966 16.3904 13 15.23C13 12.39 10.54 10.09 7.50003 10.09C6.34003 10.09 5.27003 10.42 4.38003 11C4.35003 10.75 4.34003 10.5 4.34003 10.24C4.34003 5.69 8.29003 2 13.17 2C18.05 2 22 5.69 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 13.47 2.94 11.92 4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Friends = () => {
    return (
        <svg cursor='pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59M18 7.16C17.9371 7.14999 17.8729 7.14999 17.81 7.16C17.1426 7.13587 16.5108 6.85321 16.048 6.37176C15.5852 5.89032 15.3277 5.2478 15.33 4.58C15.33 3.15 16.48 2 17.91 2C18.5943 2 19.2505 2.27182 19.7343 2.75566C20.2182 3.23951 20.49 3.89574 20.49 4.58C20.4882 5.24827 20.228 5.88996 19.7639 6.37081C19.2998 6.85167 18.6678 7.13445 18 7.16ZM5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C6.82737 7.13587 7.45921 6.85321 7.922 6.37176C8.38478 5.89032 8.64226 5.2478 8.64 4.58C8.64 3.15 7.49 2 6.06 2C5.37574 2 4.71951 2.27182 4.23567 2.75566C3.75182 3.23951 3.48 3.89574 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16ZM12 14.63C11.9371 14.62 11.8729 14.62 11.81 14.63C11.1426 14.6059 10.5108 14.3232 10.048 13.8418C9.58522 13.3603 9.32775 12.7178 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C12.5943 9.47 13.2505 9.74182 13.7343 10.2257C14.2182 10.7095 14.49 11.3657 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63ZM9.09 17.78C7.68 18.72 7.68 20.26 9.09 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.09 17.78Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Favourites = ({hover = true, fill = false}) => {
    return (
        <svg className={hover ? styles.Favorite : ''} style={fill ? {fill:'white'}:null} cursor='pointer' width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(-0.3, 0)" d="M13.1417 21.411C12.7917 21.5297 12.1889 21.5297 11.8389 21.411C8.80556 20.3626 2 15.9513 2 8.47397C2 5.17048 4.60556 2.5 7.83333 2.5C9.73889 2.5 11.4306 3.42973 12.5 4.89355C13.55 3.44951 15.2611 2.5 17.1667 2.5C20.3944 2.5 23 5.17048 23 8.47397C23 15.9513 16.1944 20.3626 13.1417 21.411Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export const Close = () => {
    let menuSelector = useTypedSelector(state => state.menu);

    if (menuSelector.value) {
        return (<svg cursor='pointer' width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path transform='translate(3, 3)' d="M1 15L15 1M15 15L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>)
    }
    else
        return (
            <svg cursor="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path transform='translate(0.5)' d="M3 5.5H21M3 12H21M3 18.5H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>)
};

export const Home = () => {
    return (
        <svg cursor="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path transform='translate(1,0.5)' d="M11 16.99V13.99M8.02 1.84004L2.63 6.04004C1.73 6.74004 1 8.23004 1 9.36004V16.77C1 19.09 2.89 20.99 5.21 20.99H16.79C19.11 20.99 21 19.09 21 16.78V9.50004C21 8.29004 20.19 6.74004 19.2 6.05004L13.02 1.72004C11.62 0.74004 9.37 0.79004 8.02 1.84004Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const ProfileButton = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.12 12.78C12.0403 12.77 11.9597 12.77 11.88 12.78C11.032 12.7514 10.2282 12.3944 9.63856 11.7842C9.04891 11.174 8.71953 10.3585 8.72001 9.50999C8.72001 7.69999 10.18 6.22999 12 6.22999C12.8594 6.22849 13.6851 6.5648 14.2988 7.16639C14.9126 7.76798 15.2654 8.58668 15.2811 9.44597C15.2969 10.3053 14.9743 11.1363 14.383 11.76C13.7917 12.3837 12.9789 12.75 12.12 12.78ZM18.74 19.38C16.9023 21.0691 14.496 22.0044 12 22C9.40001 22 7.04001 21.01 5.26001 19.38C5.36001 18.44 5.96001 17.52 7.03001 16.8C9.77001 14.98 14.25 14.98 16.97 16.8C18.04 17.52 18.64 18.44 18.74 19.38Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Exit = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9 7.55999C9.21 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54M15 12H3.62M5.85 8.64999L2.5 12L5.85 15.35" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Cross = ({handleClick}:{handleClick?:MouseEventHandler}) => {
    return(
        <div style={{cursor: 'pointer', position: "relative", zIndex: 5, maxHeight:"24px", display:"flex", alignItems:"center"}} onClick={handleClick}>
            <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path transform='translate(3, 3)' d="M1 15L15 1M15 15L1 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export const Auth = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3833 8.82003C10.7449 4.62003 12.9033 2.90503 17.6283 2.90503H17.7799C22.9949 2.90503 25.0833 4.99336 25.0833 10.2084V17.815C25.0833 23.03 22.9949 25.1184 17.7799 25.1184H17.6283C12.9383 25.1184 10.7799 23.4267 10.3949 19.2967M2.33325 14H17.3599" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.7583 10.0917L18.6666 14L14.7583 17.9083" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Reg = () => {
    return(
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5834 22.75H16.9167M19.25 25.0833V20.4167M13.9884 25.445C11.865 25.445 9.75338 24.9083 8.14338 23.835C5.32005 21.945 5.32005 18.865 8.14338 16.9867C11.3517 14.84 16.6134 14.84 19.8217 16.9867M14.1867 12.6817C14.07 12.67 13.93 12.67 13.8017 12.6817C12.4626 12.6362 11.1938 12.0713 10.2639 11.1066C9.3341 10.1419 8.81624 8.85321 8.82005 7.51334C8.8182 6.83356 8.95054 6.1601 9.20948 5.53156C9.46842 4.90303 9.84886 4.33177 10.329 3.85055C10.8091 3.36933 11.3795 2.9876 12.0075 2.72725C12.6354 2.46689 13.3086 2.33303 13.9884 2.33334C16.8467 2.33334 19.1684 4.65501 19.1684 7.51334C19.1684 10.3133 16.9517 12.5883 14.1867 12.6817Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const ArrowBack = () => {
    return(
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.57 0.930176L1.5 7.00018L7.57 13.0702M18.5 7.00018H1.67" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Plus = () => {
    return (
        <svg className={styles.Plus} cursor="pointer" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="#525060"/>
            <path d="M13 22H31M22 31V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Send = ({handleClick}:{handleClick: MouseEventHandler}) => {
    return (
        <svg onClick={handleClick} style={{minWidth:"36px", minHeight:"36px"}} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.165 20.4752L20.535 15.0902M11.1 9.48023L23.835 5.23523C29.55 3.33023 32.655 6.45023 30.765 12.1652L26.52 24.9002C23.67 33.4652 18.99 33.4652 16.14 24.9002L14.88 21.1202L11.1 19.8602C2.53499 17.0102 2.53499 12.3452 11.1 9.48023Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Play = ({handleClick, is_Playing}:{handleClick?:Function, is_Playing: React.MutableRefObject<boolean>}):JSX.Element => {

    if (!is_Playing?.current)
        return(
            <svg onClick={() => {
                handleClick();
            }} cursor="pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.0002V12.4402C8 8.02689 11.1333 6.21356 14.96 8.42689L18.04 10.2136L21.12 12.0002C24.9467 14.2136 24.9467 17.8269 21.12 20.0402L18.04 21.8269L14.96 23.6136C11.1333 25.7869 8 23.9869 8 19.5602V16.0002Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    else
        return(
            <svg onClick={() => {
                handleClick();
            }} cursor="pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.225 22.215V8.785C15.225 7.51 14.6867 7 13.3267 7H9.89833C8.53833 7 8 7.51 8 8.785V22.215C8 23.49 8.53833 24 9.89833 24H13.3267C14.6867 24 15.225 23.49 15.225 22.215ZM25 22.215V8.785C25 7.51 24.4617 7 23.1017 7H19.6733C18.3228 7 17.775 7.51 17.775 8.785V22.215C17.775 23.49 18.3133 24 19.6733 24H23.1017C24.4617 24 25 23.49 25 22.215Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
}

export const Roll5Second = ({handleClick}:{handleClick?:MouseEventHandler}) => {
    return(
        <svg onClick={handleClick} cursor="pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9867 24.2404V7.7604M5.01334 9.62707V22.3871C5.01334 25.0004 7.85334 26.6404 10.12 25.3337L15.6533 22.1471L21.1867 18.9471C23.4533 17.6404 23.4533 14.3737 21.1867 13.0671L15.6533 9.86707L10.12 6.6804C7.85334 5.37374 5.01334 7.0004 5.01334 9.62707Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Volume = ({VideoPlayer}:{VideoPlayer:HTMLVideoElement}) => {
    const [isOpen, setIsOpen] = useState(false);
    function handleInputChange(event: React.FormEvent) {
        //@ts-ignore
        VideoPlayer?.volume = event.target.value;
    }
    return(
        <label className={styles.label}>
            {isOpen ?
                <div className={styles.Volume}>
                    <input type="range" onChange={handleInputChange} value={VideoPlayer?.volume || 0.5} min={0} max={1} step={0.02}/>
                </div> : null}
            <svg style={{position:'relative', zIndex:'2'}} onClick={() => setIsOpen(prevState => !prevState)} cursor="pointer" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66666 13.3337V18.667C2.66666 21.3337 3.99999 22.667 6.66666 22.667H8.57332C9.06666 22.667 9.55999 22.8137 9.98666 23.067L13.88 25.507C17.24 27.6137 20 26.0804 20 22.1204V9.88037C20 5.90704 17.24 4.38704 13.88 6.4937L9.98666 8.9337C9.55999 9.18704 9.06666 9.3337 8.57332 9.3337H6.66666C3.99999 9.3337 2.66666 10.667 2.66666 13.3337Z" stroke="white" strokeWidth="1.5"/>
                <path d="M24 10.6663C25.1553 12.2044 25.78 14.076 25.78 15.9997C25.78 17.9233 25.1553 19.795 24 21.333M26.44 7.33301C28.3159 9.833 29.33 12.8741 29.33 15.9997C29.33 19.1252 28.3159 22.1664 26.44 24.6663" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </label>
    )
}

export const FullScreen = ({changeFullScreen}:{changeFullScreen:MouseEventHandler}) => {
    return(
        <svg cursor="pointer" onClick={changeFullScreen} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 8.00033L8.00002 24.0003M12 29.3337H20C26.6667 29.3337 29.3334 26.667 29.3334 20.0003V12.0003C29.3334 5.33366 26.6667 2.66699 20 2.66699H12C5.33335 2.66699 2.66669 5.33366 2.66669 12.0003V20.0003C2.66669 26.667 5.33335 29.3337 12 29.3337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 13.3333V8H18.6667M8 18.6667V24H13.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Like = ({handleClick, isLike = true, fill = false}:{handleClick:MouseEventHandler, isLike?:boolean, fill?:boolean}) => {
    return(
        <svg className={isLike ? styles.Like : styles.Dislike} style={fill ? {fill:'white'}:null} onClick={handleClick} cursor='pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.48001 18.3505L10.58 20.7505C10.98 21.1505 11.88 21.3505 12.48 21.3505H16.28C17.48 21.3505 18.78 20.4505 19.08 19.2505L21.48 11.9505C21.98 10.5505 21.08 9.35046 19.58 9.35046H15.58C14.98 9.35046 14.48 8.85046 14.58 8.15046L15.08 4.95046C15.28 4.05046 14.68 3.05046 13.78 2.75046C12.98 2.45046 11.98 2.85046 11.58 3.45046L7.48001 9.55046" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
            <path d="M2.38 18.3504V8.55039C2.38 7.15039 2.98 6.65039 4.38 6.65039H5.38C6.78 6.65039 7.38 7.15039 7.38 8.55039V18.3504C7.38 19.7504 6.78 20.2504 5.38 20.2504H4.38C2.98 20.2504 2.38 19.7504 2.38 18.3504Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const AddFriend = ({scale = 24}:{scale?:number}) => {
    return(
        <svg width={scale} height={scale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.40997 22C3.40997 18.13 7.25997 15 12 15C12.96 15 13.89 15.13 14.76 15.37M12 12C13.3261 12 14.5978 11.4732 15.5355 10.5355C16.4732 9.59785 17 8.32608 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5978 2.52678 13.3261 2 12 2C10.6739 2 9.40212 2.52678 8.46444 3.46447C7.52676 4.40215 6.99997 5.67392 6.99997 7C6.99997 8.32608 7.52676 9.59785 8.46444 10.5355C9.40212 11.4732 10.6739 12 12 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 18.0001C22 18.7501 21.79 19.46 21.42 20.0601C21.21 20.4201 20.94 20.7401 20.63 21.0001C19.93 21.6301 19.01 22.0001 18 22.0001C17.3106 22.0015 16.6326 21.8233 16.033 21.4832C15.4333 21.143 14.9325 20.6525 14.58 20.0601C14.1993 19.4405 13.9985 18.7272 14 18.0001C14 16.7401 14.58 15.6101 15.5 14.8801C16.088 14.4088 16.7972 14.1132 17.5458 14.0275C18.2945 13.9417 19.0522 14.0692 19.7315 14.3953C20.4108 14.7214 20.9842 15.2328 21.3856 15.8705C21.7869 16.5083 21.9999 17.2465 22 18.0001Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.44 18L17.43 18.99L19.56 17.02" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const NotAcceptFriend = ({scale = 24}:{scale?:number}) => {
    return(
        <svg width={scale} height={scale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.40997 22C3.40997 18.13 7.25997 15 12 15C12.96 15 13.89 15.13 14.76 15.37M12 12C13.3261 12 14.5978 11.4732 15.5355 10.5355C16.4732 9.59785 17 8.32608 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5978 2.52678 13.3261 2 12 2C10.6739 2 9.40212 2.52678 8.46444 3.46447C7.52676 4.40215 6.99997 5.67392 6.99997 7C6.99997 8.32608 7.52676 9.59785 8.46444 10.5355C9.40212 11.4732 10.6739 12 12 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.03 16.94L16.92 19.05M16.94 16.96L19.06 19.07M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C21.0675 20.6525 20.5667 21.143 19.967 21.4831C19.3674 21.8233 18.6894 22.0014 18 22C17.0155 22.0029 16.0659 21.6352 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.1993 19.4404 13.9985 18.7272 14 18C13.9994 17.4745 14.1024 16.9541 14.3031 16.4685C14.5039 15.9829 14.7985 15.5417 15.1701 15.1701C15.5417 14.7985 15.9829 14.5039 16.4685 14.3031C16.9541 14.1024 17.4745 13.9993 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Download = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return(
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17V11M9 11L7 13M9 11L11 13" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Edit = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Check = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="24" height="17" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L6 12L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const Link = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33325 10.8332C8.69113 11.3117 9.14772 11.7075 9.67204 11.994C10.1964 12.2805 10.7762 12.4508 11.3721 12.4935C11.9681 12.5362 12.5662 12.4502 13.126 12.2414C13.6858 12.0326 14.1942 11.7058 14.6166 11.2832L17.1166 8.78322C17.8756 7.99738 18.2956 6.94487 18.2861 5.85238C18.2766 4.7599 17.8384 3.71485 17.0658 2.94231C16.2933 2.16978 15.2482 1.73157 14.1558 1.72208C13.0633 1.71259 12.0108 2.13256 11.2249 2.89156L9.79159 4.31656" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.6666 9.16677C11.3087 8.68833 10.8521 8.29245 10.3278 8.00599C9.80347 7.71953 9.22367 7.54918 8.62771 7.50649C8.03176 7.46381 7.4336 7.5498 6.8738 7.75862C6.314 7.96744 5.80566 8.29421 5.38326 8.71677L2.88326 11.2168C2.12426 12.0026 1.70429 13.0551 1.71378 14.1476C1.72327 15.2401 2.16148 16.2851 2.93401 17.0577C3.70655 17.8302 4.7516 18.2684 5.84408 18.2779C6.93657 18.2874 7.98908 17.8674 8.77492 17.1084L10.1999 15.6834" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export const Image = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 15L16 10L5 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}