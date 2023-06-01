import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Friend, Header, NavBar, RequestFriend, SearchFriends} from "@components";
import {useTranslation} from "react-i18next";
import './Friends.scss';
import {Icons} from "@utils";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";

const Friends = () => {
    const {t} = useTranslation(),
        {WindowSize} = useWindowSizeState(),
        ActiveRef = useRef<HTMLDivElement | null>(),
        [Content, setContent] = useState<string>('All'),
        FriendsFilterSelector = useTypedSelector(state => state.modal.filterFriends),
        dispatch = useDispatch();

    useEffect(() => {
        document.title = t('Button.friends');
    }, []);

    function handleChangeContent(event: React.MouseEvent<HTMLElement>) {
        let target = event.target as HTMLDivElement;
        ActiveRef?.current?.classList.toggle('Friends--Category--Active');
        target.classList.toggle('Friends--Category--Active');
        ActiveRef.current = target;
        setContent(target.dataset.category);
    }

    function SwitchContent(){
        switch (Content) {
            case 'All':
                return(
                    <div className="Friends--block">
                        <div className="Friends--block--header">
                            <div className="block--header--title">{t("Friends.category1")}</div>
                            {WindowSize <= 1200 ? <div className="block--header--parameters" onClick={() => dispatch({type: 'disableEverythingExcept/filterFriends'})}>{t("Messanger.parameters")}<Icons.ChevronDown/></div> : null}
                        </div>
                        <SearchFriends/>
                        <Friend id={1} nickname="Dantey" mail="Dantey@mail.ru" photo="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"/>
                        <Friend id={2} nickname="MSTkrut" mail="MSTkrut@mail.ru"/>
                    </div>
                );
            case "Request":
                return(
                    <div className="Friends--block">
                        <div className="Friends--block--header">
                            <div className="block--header--title">{t("Friends.category2")}</div>
                            {WindowSize <= 1200 ? <div className="block--header--parameters" onClick={() => dispatch({type: 'disableEverythingExcept/filterFriends'})}>{t("Messanger.parameters")}<Icons.ChevronDown/></div> : null}
                        </div>
                        <RequestFriend id={4} nickname="MSTkrut2" mail="MSTkrut2@mail.ru"/>
                        <RequestFriend id={5} nickname="Lord_Games" mail="Lord_Games@mail.ru"/>
                    </div>
                );
        }
    }

    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={3}/>
                <div className="Friends--List--container">
                    <div className="Friends">
                        <h1>{t('Button.friends')}</h1>
                        {useMemo(()=> SwitchContent(), [Content, WindowSize, t])}
                        <div className='hidden--h40'></div>
                    </div>

                    {WindowSize <= 1200 && !FriendsFilterSelector ?
                        null :
                        <div className="Friends--Category--Container">
                            <div ref={ActiveRef} data-category="All" onClick={handleChangeContent} className="Friends--Category Friends--Category--Active">{t("Friends.category1")}</div>
                            <div data-category="Request" onClick={handleChangeContent} className="Friends--Category">{t("Friends.category2")}</div>
                        </div>}
                </div>
            </main>
        </>
    );
};

export default Friends;