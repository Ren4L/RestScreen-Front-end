import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, Comment, Header, NavBar, Player} from "@components";
import './Video.scss';
import {useNavigate, useParams} from "react-router-dom";
import {EndingWordController, Icons, Types} from "@utils";
import {useTranslation} from "react-i18next";
import {useTypedSelector} from "@hooks";

const arrVideo:Types.IVideo[] = [
    {
        id:1,
        poster: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png',
        url: 'https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f',
        category: 'nature',
        title: "Тайны Смолвиля",
        datePublic: new Date(1683326976000),
        views: 101121,
        authorId: 1,
        authorName: "Dantey",
        authorPhoto: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png",
    }
];


const Video = () => {
    const params = useParams(),
        {t} = useTranslation(),
        navigate = useNavigate(),
        [UserComment, setUserComment] = useState<string>(""),
        [Video, setVideo] = useState<Types.IVideo | null>(),
        userSelector = useTypedSelector(state => state.user),
        ErrorRef = useRef<HTMLDivElement>(null),
        [isFavourite, setIsFavourite] = useState<boolean>(false),
        [isLike, setIsLike] = useState<boolean>(true),
        [isSubscribe, setIsSubscribe] = useState<boolean>(false),
        [ArrComments, setArrComments] = useState<Types.IComment[]>([
            {
                id:0,
                authorName: "Dantey",
                authorPhoto: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png",
                comment: "«Тайны Смоллвилля» стали уникальным проектом, который продержался на телеэкранах мира 10 лет, подарив зрителям интереснейшую историю становления Супермена. Сериал с особым уважением подошел к созданию целого мира, где молодой Кларк Кент взрослел и становился тем героем, которого мы хорошо знаем. Проект становился лучше и лучше от сезона к сезону, расширяя свою мифологию, аккуратно вводя известных почитателям комиксов героев и злодеев, знакомя с другими интересными персонажами. Удачные сценарные решения, красивые и классные актеры, добротные спецэффекты, что хорошо смотрелись для сериала, — все это позволило «Тайнам» стать культовым проектом, который и сегодня вспоминается с особой теплотой.",
                datePublic: new Date(1683656778477),
                likes: 143434234234,
                dislikes: 122342342343,
            },
            {
                id:1,
                authorName: "MSTkrut",
                comment: "Началось у меня всё с того, что однажды я решил посмотреть ветки двух персонажей комиксов DC, начиная с их самых первых появлений на больших и малых экранах. Речь о Бэтмене и Супермене. Никакие другие герои Малкольма Николсона (основателя DC-Comics) так не трогали моё сердце. Только эти двое. Посмотреть весь путь этих двоих. От того, как они надевали на себя ещё уж совсем смехотворные костюмы, подобные тому, в которые облачают детей на утренниках, с такими же (под стать костюмам) драками и разборками - вплоть до наших дней. Авось кто и окажется оригинальным. (Не мог не оказаться). Дошла очередь до ТВ-шоу, которое транслировалось на ТВ с 2001 по 2011 год. 'Тайны Смолвиля'.",
                datePublic: new Date('05.05.2023'),
                likes: 10,
                dislikes:123123,
            }
        ]);

    useEffect(() => {
        setVideo(arrVideo[0]);
        document.title = arrVideo[0].title;
    }, []);

    function handleCreateComment() {
        if ((UserComment.length < 5 || UserComment.length > 500 || UserComment.indexOf('/') != -1)) {
            if (ErrorRef?.current?.classList.contains('Comment__error--block__active'))
                return;
            ErrorRef?.current?.classList.toggle('Comment__error--block__active');
        }
        else{
            setArrComments(prevState => [
                {
                    id:prevState.length,
                    authorPhoto:userSelector.photo,
                    authorName:userSelector.nickname,
                    comment: UserComment,
                    dislikes: 0,
                    likes: 0,
                    datePublic: new Date()
                }, ...prevState]);
            setUserComment('');
            if (ErrorRef?.current?.classList.contains('Comment__error--block__active'))
                ErrorRef?.current?.classList.toggle('Comment__error--block__active');
        }
    }

    return (
        <>
            <Header type={userSelector?.nickname ? 'searchPersonal' : 'regAuth'}/>
            <main className='Container'>
                {userSelector?.nickname ? <NavBar activeButton={null}/> : null}
                <div className="VideoPlayer--List--container">
                    <Player video={Video}/>
                    <div className="Video--title">{Video?.title}</div>
                    <div className="Author--container">
                        <div className="Left--part--video">
                            <div className="Author" onClick={() => navigate('/Profile/'+Video?.authorId)}>
                                {Video?.authorPhoto ? <div className="icon" style={{background:`url(${Video?.authorPhoto}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className="ProfileIcon"/>}
                                <div className="Name">{Video?.authorName}</div>
                            </div>
                            {userSelector?.nickname ? <Button style={isSubscribe ? "orange--subscribe--active" : "orange--subscribe"} handleClick={() => setIsSubscribe(prevState => !prevState)} content={t(isSubscribe ? 'Video.youAreSubscribe' : 'Video.subscribe')}/> : null}
                        </div>
                        <div className="Right--part--video">
                            <div className="LikeAndDislike">
                                <Icons.Like fill={isLike} handleClick={()=>setIsLike(prevState => true)}/>
                                <div className="Grade--count">{useMemo(() => EndingWordController.getNumber(123032112243, t, ""),[t])}</div>
                                |
                                <Icons.Like fill={!isLike} handleClick={()=>setIsLike(prevState => false)} isLike={false}/>
                                <div className="Grade--count">{useMemo(() => EndingWordController.getNumber(123123123123, t, ""),[t])}</div>
                            </div>
                            {userSelector?.nickname ? <div className="Video--favorite" onClick={()=>setIsFavourite(prevState => !prevState)} ><Icons.Favourites fill={isFavourite}/></div> : null}
                        </div>
                    </div>
                    <h1 className="Video--Comment--h1">{t('Video.comments')}</h1>
                    <div className="Video--Comments--List">
                        <div className="Comment--count">{useMemo(() => EndingWordController.getComments(ArrComments.length, t), [ArrComments.length, t])}</div>
                        {userSelector?.nickname ? <div className="Create--comment">
                            <div className="Create--comment--input--container">
                                {userSelector?.photo ? <div className="icon" style={{background:`url(${userSelector?.photo}) 50% 50%/cover no-repeat`}}/> : <Icons.Profile className="ProfileIcon"/>}
                                <input value={UserComment} onChange={(event) => setUserComment(event.target.value)} type="text" className="Create--comment--input" placeholder={t("Video.addComment")}/>
                            </div>
                            <div ref={ErrorRef} className='Comment__error--block'>
                                <Icons.Error/>
                                <span>{t("Video.error")}</span>
                            </div>
                            <Button handleClick={handleCreateComment} content={t("Video.sendComment")}/>
                        </div> : null}
                        {useMemo(() => ArrComments.map((el, index) => <Comment key={el.id} id={el.id} authorName={el.authorName} authorPhoto={el.authorPhoto} comment={el.comment} datePublic={el.datePublic} likes={el.likes} dislikes={el.dislikes}/>), [ArrComments])}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Video;