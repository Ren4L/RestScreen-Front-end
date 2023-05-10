import React, {useEffect} from 'react';
import {Header, NavBar} from "@components";
import {useTranslation} from "react-i18next";
import './Messanger.scss';
import MessageBlock from "../../components/MessageBlock/MessageBlock";
import SearchMessage from "../../components/Search/SearchMessage";
import {useTypedSelector, useWindowSizeState} from "@hooks";


const Messanger = () => {
    const {t} = useTranslation();
    const {WindowSize} = useWindowSizeState();
    const MessageFilterSelector = useTypedSelector(state => state.modal.filterMessage);
    useEffect(() => {document.title = t("Messanger.title")}, [t]);

    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={1}/>
                <div className="Message--List--container">
                    <div className="Messages">
                        <h1>{t('Messanger.title')}</h1>
                        <SearchMessage/>
                        <MessageBlock
                            id={1}
                            photo="https://lh3.googleusercontent.com/a/AGNmyxZCvySfNInadKTB2kw94bxLrvODzeA4IBsoXDE2fw=s96-c"
                            nickname="Dantey"
                            lastMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            time={new Date(Date.now())}
                            countMessage={2}
                        />
                        <MessageBlock
                            id={2}
                            nickname="MSTkrut"
                            lastMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            time={new Date(Date.now())}
                        />
                    </div>
                    {WindowSize < 1034.99 && !MessageFilterSelector ?
                    null :
                    <div className="Message--Category--Container">
                        <div className="Message--Category Message--Category--Active">{t("Messanger.category1")}</div>
                        <div className="Message--Category">{t("Messanger.category2")}</div>
                        <div className="Message--Category">{t("Messanger.category3")}</div>
                    </div>}
                </div>
            </main>
        </>
    );
};

export default Messanger;