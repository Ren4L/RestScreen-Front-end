import React, {useEffect} from 'react';
import {Header, NavBar} from "@components";
import './Chat.scss';
import {useTranslation} from "react-i18next";

const Chat = () => {
    const {t} = useTranslation();
    useEffect(() => {document.title = t("Chat.title")}, [t]);
    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={1}/>
                <div className="Chat--container">
                    <h1>{t('Chat.title')}</h1>
                    <div className="Chat">
                        <div className=""></div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Chat;