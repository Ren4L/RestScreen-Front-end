import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, Header, NavBar, VideoBlock} from "@components";
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import './Profile.scss';
import {EndingWordController, Icons, Types} from "@utils";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";

const users = [
    {id:0, nickname: "Ren4L", email: "vladisakov28@gmail.com", photo: "https://lh3.googleusercontent.com/a/AGNmyxZCvySfNInadKTB2kw94bxLrvODzeA4IBsoXDE2fw=s96-c"},
    {id:1, nickname: "Dantey", email: "123123@dsd.sd", photo: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"},
    {id:2, nickname: "MSTkrut", email: "vlad@dsd.sd"}
];

const socials = [
    {name: 'Instagram', url: "https://www.instagram.com/"},
    {name: 'VK', url: "https://vk.com/ren4l"},
    {name: 'Youtube', url: "https://www.youtube.com/"},
    {name: 'Facebook', url: "https://ru-ru.facebook.com/"},
    {name: 'Telegram', url: "https://web.telegram.org/a/"},
]

const Profile = () => {
    const {t} = useTranslation(),
            [Profile, setProfile] = useState<Types.IUser | null>(),
            [Content, setContent] = useState<string>('Video'),
            [IsFriend, setIsFriend] = useState<boolean>(false),
            ContentRef = useRef<HTMLDivElement | null>(),
            params = useParams(),
            menu = useTypedSelector(state => state.menu),
            user = useTypedSelector(state => state.user),
            dispatch = useDispatch(),
            {WindowSize} = useWindowSizeState();

    useEffect(() => {
        setProfile(users[+params.id]);
        document.title = t('Profile.title');
        if (WindowSize < 851)
            dispatch({type:'setData', payload:{value:false}});
    }, [t, WindowSize, params]);

    function changeContent() {
        switch (Content) {
            case "Video":
                return(
                    <div className={`Video--List${menu.value && WindowSize > 850 ? ' Video--List--Open--Menu' : ''}`}>
                        <VideoBlock
                            id={1}
                            poster='https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/281ff1a0-85dc-4ab5-bbc4-a359eb501b1f/600x900'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='entertainment'
                            title="Тайны Смолвиля"
                            datePublic={new Date(1684954213000)}
                            views={101121}
                            authorId={Profile?.id}
                            authorName={Profile?.nickname}
                            authorPhoto={Profile?.photo}
                        />
                        <VideoBlock
                            id={2}
                            poster='https://avatars.dzeninfra.ru/get-zen_doc/1780598/pub_5f968b0cb2613332b0ccceb8_5f968c2724d0d15a6650c390/scale_1200'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='nature'
                            title="Прекрасные явления природы"
                            datePublic={new Date('05.05.2023')}
                            views={1201}
                            authorId={Profile?.id}
                            authorName={Profile?.nickname}
                            authorPhoto={Profile?.photo}
                        />
                        <VideoBlock
                            id={3}
                            poster='https://thumbs.dfs.ivi.ru/storage2/contents/1/a/95ce1934c524cb39631f2ea1969308.jpg'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='humor'
                            title="Импровизация"
                            datePublic={new Date(1683571813000)}
                            views={86324632}
                            authorId={Profile?.id}
                            authorName={Profile?.nickname}
                            authorPhoto={Profile?.photo}
                        />
                        <VideoBlock
                            id={4}
                            poster='https://globalnews.ca/wp-content/uploads/2020/12/Dancing-robots.jpg?quality=85&strip=all&w=1200'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='scienceAndTechnology'
                            title="Boston Dynamics"
                            datePublic={new Date(1432147813000)}
                            views={12}
                            authorId={Profile?.id}
                            authorName={Profile?.nickname}
                            authorPhoto={Profile?.photo}
                        />
                    </div>
                );
            case "Information":
                return(
                    <div className="Information--block--container">
                        <div className="Information--block">
                            <div className="Information--block--title">{t('Profile.information1')}</div>
                            <div className="Information--block--content">Это канал любителя искусства и науки.</div>
                        </div>
                        <div className="Information--block">
                            <div className="Information--block--title">{t('Profile.information2')}</div>
                            {socials.map((el:any, index:number) => <div key={index} className="Information--block--social">{el.name}: <a href={el.url}>{el.url}</a></div>)}
                        </div>
                    </div>
                );
        }
    }

    function handleChangeContent(event: React.MouseEvent<HTMLDivElement>) {
        let target = event.target as HTMLDivElement;
        ContentRef?.current?.classList.toggle('Profile--bookmarks--active');
        ContentRef.current = target;
        target.classList.toggle('Profile--bookmarks--active');
        setContent(target.dataset.bookmark);
    }

    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={null}/>
                <div className="Profile--List--container">
                    <h1>{t('Profile.title')}</h1>
                    <div className="Profile--banner" style={{background:`url(https://cdn.pixabay.com/photo/2020/02/21/11/16/mountain-landscape-4867269_960_720.jpg) 50% 50%/cover no-repeat`}}></div>
                    <div className="Profile--inf">
                        {Profile?.photo ?
                            <div className="photo" style={{background: `url(${Profile?.photo}) 50% 50%/cover no-repeat`}}></div>
                            :
                            <div className="photoNull"><Icons.Profile/></div>
                        }
                        <div className="Profile--inf--content">
                            <div className="Profile--name">{Profile?.nickname}</div>
                            <div className="Profile--inf--partTwo">
                                {/*<div className="Profile--inf--name">@{Profile?.nickname}</div>*/}
                                <div className="Profile--inf--subscribeAndVideoContainer">
                                    <div className="Profile--inf--subscribeAndVideo">{useMemo(() => EndingWordController.getNumber(20, t, "Profile.subscribe"), [t])}</div>
                                    <div className="Profile--inf--subscribeAndVideo">{useMemo(() => EndingWordController.getNumber(2, t, "Profile.video"), [t])}</div>
                                </div>
                                {Profile?.id != user?.id ? (!IsFriend ? <Button handleClick={() => setIsFriend(prevState => !prevState)} content={t("Profile.addFriend")}/>: null) : <Button link="/UploadVideo" content={t("Profile.addVideo")}/>}
                            </div>
                        </div>
                    </div>
                    <div className="Profile--bookmarks--container">
                        <div ref={ContentRef} onClick={handleChangeContent} data-bookmark="Video" className="Profile--bookmarks Profile--bookmarks--active">{t("Profile.bookmark1")}</div>
                        <div onClick={handleChangeContent} data-bookmark="Information" className="Profile--bookmarks">{t("Profile.bookmark2")}</div>
                    </div>
                    {useMemo(() => changeContent(), [Content, WindowSize, menu.value, Profile])}
                </div>
            </main>
        </>
    );
};

export default Profile;