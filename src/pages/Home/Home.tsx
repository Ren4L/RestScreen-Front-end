import React, {Fragment, useEffect} from 'react';
import {Header, NavBar, VideoBlock} from "@components";
import {useTranslation} from "react-i18next";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import NotAuthBanner from "./NotAuthBanner";
import "./Home.scss";
import {useDispatch} from "react-redux";

const Home = () => {
    const {t} = useTranslation();
    let user = useTypedSelector(state => state.user);
    let menu = useTypedSelector(state => state.menu);
    let dispatch = useDispatch();
    const {WindowSize} = useWindowSizeState();
    useEffect(()=>{
        document.title = t("Button.home");
        if (WindowSize < 851)
            dispatch({type:'setData', payload:{value:false}});

    }, [WindowSize])
    return (
        <>
            {!user.nickname ? <Header type='regAuth'/> : <Header type='searchPersonal'/>}
            <main className='Container'>
                {!user.nickname ? '' : <NavBar activeButton={0}/>}
                <div className={`Video--List--container${!user.id ? ' Video--List--container--NotAuth' : ''}`}>
                    {!user.nickname ? <NotAuthBanner/> : ''}
                    <h1>{!user.nickname ? t("Home.title1") : t("Home.title2")}</h1>
                    <div className={`Video--List${menu.value && WindowSize > 850 ? ' Video--List--Open--Menu' : ''}`}>
                        <VideoBlock
                            id={1}
                            poster='https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/281ff1a0-85dc-4ab5-bbc4-a359eb501b1f/600x900'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='entertainment'
                            title="Тайны Смолвиля"
                            datePublic={new Date(1684954213000)}
                            views={101121}
                            authorId={1}
                            authorName="Dantey"
                            authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        />
                        <VideoBlock
                            id={2}
                            poster='https://avatars.dzeninfra.ru/get-zen_doc/1780598/pub_5f968b0cb2613332b0ccceb8_5f968c2724d0d15a6650c390/scale_1200'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='nature'
                            title="Прекрасные явления природы"
                            datePublic={new Date('05.05.2023')}
                            views={1201}
                            authorId={1}
                            authorName="Dantey"
                            authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        />
                        <VideoBlock
                            id={3}
                            poster='https://thumbs.dfs.ivi.ru/storage2/contents/1/a/95ce1934c524cb39631f2ea1969308.jpg'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='humor'
                            title="Импровизация"
                            datePublic={new Date(1683571813000)}
                            views={86324632}
                            authorId={1}
                            authorName="Dantey"
                            authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        />
                        <VideoBlock
                            id={4}
                            poster='https://globalnews.ca/wp-content/uploads/2020/12/Dancing-robots.jpg?quality=85&strip=all&w=1200'
                            url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                            category='scienceAndTechnology'
                            title="Boston Dynamics"
                            datePublic={new Date(1432147813000)}
                            views={12}
                            authorId={1}
                            authorName="Dantey"
                            authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;