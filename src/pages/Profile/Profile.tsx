import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, Header, Input, NavBar, VideoBlock} from "@components";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import './Profile.scss';
import {EndingWordController, UserApiController, Icons, Types, UserController} from "@utils";
import {useTypedSelector, useWindowSizeState} from "@hooks";
import {useDispatch} from "react-redux";
import LinkBlock from "../../components/LinkBlock/LinkBlock";



const Profile = () => {
    const {t} = useTranslation(),
    [Profile, setProfile] = useState<Types.IUser | null>(),
    [Content, setContent] = useState<string>('Video'),
    [IsFriend, setIsFriend] = useState<boolean>(false),
    [IsInputDescription, setIsInputDescription] = useState<boolean>(false),
    ContentRef = useRef<HTMLDivElement | null>(),
    params = useParams(),
    menu = useTypedSelector(state => state.menu),
    user = useTypedSelector(state => state.user),
    dispatch = useDispatch(),
    navigate = useNavigate(),
    {WindowSize} = useWindowSizeState(),
    [ErrorDescription, setErrorDescription] = useState<string>(' '),
    ErrorDescriptionRef = useRef<HTMLDivElement>(null),
    [ErrorLink, setErrorLink] = useState<string>(' '),
    ErrorLinkRef = useRef<HTMLDivElement>(null),
    BannerInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        UserApiController.getUser({id:+params.id}).then(res => setProfile(res?.data)).catch(() => navigate('/404'));
        UserApiController.getLinks(+params.id).then(res => dispatch({type:'setData', payload:{links:res?.data}}));
        document.title = t('Profile.title');
        if (WindowSize < 851)
            dispatch({type:'setData', payload:{value:false}});
    }, [t, WindowSize, params]);

    function editDescription(){
        UserController.editOneColumn(dispatch, user, "description")
            .then(res => {
                if (res == undefined) {
                    setIsInputDescription(false);
                    return;
                }
                setProfile({...Profile, description: user.description});
                if (!ErrorDescriptionRef.current.classList.contains("Form__error--block__active")) {
                    ErrorDescriptionRef.current.classList.toggle("Form__error--block__active");
                }
                setErrorDescription(res);
            });
    }

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
                            {
                                IsInputDescription ?
                                    <>
                                        <div className="Information--block--content">
                                            <Input className="Description--input" placeholder={t("Input.description")} name="Description" value={user.description} onChange={e => dispatch({type:'setData', payload:{description: e.target.value }})}/>
                                            <Icons.Cross handleClick={() => setIsInputDescription(false)}/>
                                            <Icons.Check onClick={editDescription} cursor="pointer"/>
                                        </div>
                                        <div ref={ErrorDescriptionRef} className='Form__error--block'>
                                            <Icons.Error/>
                                            <span>{t(ErrorDescription)}</span>
                                        </div>
                                    </>
                                    :
                                    <div className="Information--block--content">
                                        {user?.description ?? <span style={{color: "gray"}}>{t("Profile.defaultDescription")}</span>}
                                        {
                                            Profile?.id == user?.id ?
                                                <>
                                                    <Icons.Edit onClick={() => setIsInputDescription(true)} cursor="pointer"/>
                                                </>
                                                :
                                                <></>
                                        }
                                    </div>
                            }
                        </div>
                        <div className="Information--block">
                            <div className="Information--block--title">{t('Profile.information2')}</div>
                            {user.links.map((link) => <LinkBlock key={link.id} {...link} />)}
                            {Profile?.id == user?.id ?
                                <div className="Information--block__Add--link--Container">
                                    <form onSubmit={handleSubmitAddLinkForm} className="Information--block__Add--link">
                                        <label style={{display: "flex", alignItems: "center"}}>
                                            <Icons.Download className="Information--block__Link--icon"/>
                                            <input type="file" name="icon" style={{display:"none"}}/>
                                        </label>
                                        <Input className="Link--input" placeholder={t("Profile.linkTitle")} name="title" type="text"/>
                                        <Input className="Link--input" placeholder={t("Profile.link")} name="link" type="text"/>
                                        <Button content={t("Profile.add")}/>
                                    </form>
                                    <div ref={ErrorLinkRef} className='Form__error--block'>
                                        <Icons.Error/>
                                        <span>{t(ErrorLink)}</span>
                                    </div>
                                </div>
                                :
                                <></>
                            }
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

    async function handleSubmitAddLinkForm(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        formData.set("user_id", user.id.toString());
        try{
            const res = await UserApiController.createLink(formData);
            dispatch({type:'setData', payload:{links:res?.data}});
            const target = event.target as HTMLFormElement;
            target.reset();
            if (ErrorLinkRef.current.classList.contains("Form__error--block__active")) {
                ErrorLinkRef.current.classList.toggle("Form__error--block__active");
            }
        }
        catch (e) {
            if (!ErrorLinkRef.current.classList.contains("Form__error--block__active")) {
                ErrorLinkRef.current.classList.toggle("Form__error--block__active");
            }
            setErrorLink(e?.response?.data?.errors[0]);
        }
    }

    async function handleChangeBanner(event: React.FormEvent<HTMLInputElement>){
        console.log(event.target)
    }


    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={null}/>
                <div className="Profile--List--container">
                    <h1>{t('Profile.title')}</h1>
                    <div className="Profile--banner" style={{background: !Profile?.banner ? '#19181F' : `url('${Profile.banner}') 50% 50%/cover no-repeat`}}>
                        {
                            user.id == Profile?.id ?
                            <div className="Profile--banner__hover">
                                <Button handleClick={() => BannerInputRef.current.click()} content={t("Profile.uploadBanner")} style="white"></Button>
                                <input ref={BannerInputRef} onChange={handleChangeBanner} type="file" style={{display:"none"}}/>
                            </div>
                            : null
                        }
                        {
                            !Profile?.banner ?
                                <Icons.Image width="100" height="100"/>
                                : null
                        }
                    </div>
                    <div className="Profile--inf">
                        {Profile?.photo ?
                            <div className="photo" style={{background: `url('${Profile?.photo}') 50% 50%/cover no-repeat`}}></div>
                            :
                            <div className="photoNull"><Icons.Profile/></div>
                        }
                        <div className="Profile--inf--content">
                            <div className="Profile--name">{Profile?.nickname}</div>
                            <div className="Profile--inf--partTwo">
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
                    {useMemo(changeContent, [Content, WindowSize, menu.value, Profile, IsInputDescription, user.description, ErrorDescription, ErrorLink])}
                </div>
            </main>
        </>
    );
};

export default Profile;