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
                            photo="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                            nickname="Dantey"
                            lastMessage="Такой неунывающий оптимист... что бы ни стряслось. Попадает часто в разные комичные ситуации. Но не все же должны быть серьезными- у всех рас и их представителей свои качества. Джа-Джа сыграл не последнюю роль в миссии Куай-Гона и Оби-Вана. Не приведи он их в Ото-Гунга, неизвестно, как бы все сложилось. Ведь он, испугавшись гнева главных гунганов, мог бы и не помогать Джедаям-сказать, что моя нельзя идти в подводный город, моя вляпайся, моя сильно-сильно пугайся! А мне нравится дружба Джа-Джа и Падме. И еще-как он говорит."
                            time={new Date(Date.now())}
                            countMessage={1}
                        />
                        <MessageBlock
                            id={2}
                            nickname="MSTkrut"
                            lastMessage="Хорошие обзоры, но там на предыдущих страницах я бросал ссылку на Икотику, у него не хуже, а то и лучше. Сложно судить, просто они разные, эти сугубо информативные, а там творчество. "
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