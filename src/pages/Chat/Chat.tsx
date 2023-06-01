import React, {useEffect, useMemo, useState} from 'react';
import {Header, Input, Message, NavBar} from "@components";
import './Chat.scss';
import {useTranslation} from "react-i18next";
import {Icons, Types} from "@utils";
import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector, useWindowSizeState} from "@hooks";

const Chat = () => {
    const companions = [
        {id:1, nickname: "Dantey", mail: "123123@dsd.sd", photo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"},
        {id:2, nickname: "MSTkrut", mail: "vlad@dsd.sd"}
    ];
    const [Companion, setCompanion] = useState<Types.IUser>(null),
        {t} = useTranslation(),
        params = useParams(),
        navigate = useNavigate(),
        userSelector = useTypedSelector(state => state.user),
        [UserMessage, setUserMessage] = useState<string>(''),
        [ArrMessage, setArrMessage] = useState<Types.IMessage[]>(),
        {WindowSize} = useWindowSizeState();
    useEffect(() => {document.title = t("Chat.title")}, [t]);
    useEffect(() => {
        for (const companion of companions) {
            if (companion.id === parseInt(params.id)) {
                setCompanion(companion);
            }
        }
    }, []);

    useEffect(() => {
        setArrMessage([
            {
                id: 0,
                nickname: userSelector.nickname,
                photo: userSelector.photo,
                time: new Date(),
                message: "Как вы относитесь к Джа Джа Бинксу?"
            },
            {
                id: 1,
                nickname: Companion?.nickname,
                photo: Companion?.photo,
                isCompanion: true,
                time: new Date(),
                message: "Такой неунывающий оптимист... что бы ни стряслось. Попадает часто в разные комичные ситуации. Но не все же должны быть серьезными- у всех рас и их представителей свои качества. Джа-Джа сыграл не последнюю роль в миссии Куай-Гона и Оби-Вана. Не приведи он их в Ото-Гунга, неизвестно, как бы все сложилось. Ведь он, испугавшись гнева главных гунганов, мог бы и не помогать Джедаям-сказать, что \"моя нельзя идти в подводный город, моя вляпайся, моя сильно-сильно пугайся!\" А мне нравится дружба Джа-Джа и Падме. И еще-как он говорит."
            },
        ]);
    }, [Companion?.id])

    function handleSendMessage(){
        if (UserMessage.length != 0){
            let message:Types.IMessage = {
                id: ArrMessage.length,
                message: UserMessage,
                time: new Date(Date.now()),
                nickname: userSelector.nickname,
                photo: userSelector.photo,
            };
            setArrMessage(prevState => [
                ...prevState,
                message
            ]);
            setUserMessage("");
        }

    }

    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={1}/>
                <div className="Chat--container">
                    <div className="Chat">
                        {WindowSize > 600 ?
                            <div className="Chat--header">
                                <div className="back" onClick={() => {navigate(-1)}}><Icons.ArrowBack/>{t("Chat.back")}</div>
                                <div className="companion">{Companion?.nickname}</div>
                                {Companion?.photo ?
                                    <div className="photo" style={{background: `url(${Companion?.photo}) 50% 50%/cover no-repeat`}}></div>
                                    :
                                    <div className="photoNull"><Icons.Profile/></div>
                                }
                            </div> :
                            <div className="Chat--header">
                                <div className="back" onClick={() => {navigate(-1)}}><Icons.ArrowBack/></div>
                                <div className="Chat--header--Profile">
                                    {Companion?.photo ?
                                        <div className="photo" style={{background: `url(${Companion?.photo}) 50% 50%/cover no-repeat`}}></div>
                                        :
                                        <div className="photoNull"><Icons.Profile/></div>
                                    }
                                    <div className="companion">{Companion?.nickname}</div>
                                </div>
                            </div>}
                        <div className="Chat--body">
                            {useMemo(()=> ArrMessage?.map((el)=> <Message isCompanion={el.isCompanion} key={el.id} id={el.id} nickname={el.nickname} photo={el.photo} time={el.time} message={el.message}/>),[ArrMessage])}
                        </div>
                        <div className="Chat--footer">
                            <label>
                                <input type="file" hidden/>
                                <Icons.Plus/>
                            </label>
                            <input value={UserMessage} onChange={(event) => setUserMessage(event.target.value)} className="Chat--input" type="text" placeholder={t("Chat.input")}/>
                            <Icons.Send handleClick={handleSendMessage}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Chat;