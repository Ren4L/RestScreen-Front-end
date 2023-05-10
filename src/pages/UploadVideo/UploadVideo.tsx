import React, {useEffect} from 'react';
import './UploadVideo.scss';
import {Button, Header, NavBar} from "@components";
import {useTranslation} from "react-i18next";
import {Icons} from "@utils";
import {useWindowSizeState} from "@hooks";

const UploadVideo = () => {
    const {t} = useTranslation(),
        {WindowSize} = useWindowSizeState();

    useEffect(() => {document.title = t('UploadVideo.title')},[t])
    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={null}/>
                <div className="Profile--List--container">
                    <h1>{t('UploadVideo.title')}</h1>
                    <div className="UploadVideo--Container">
                        <div className="UploadVideo--rowOne">
                            <input type="text" className="UploadVideo--input" placeholder={t("UploadVideo.nameVideo")}/>
                            <select className="UploadVideo--select">
                                <option value="-1" defaultChecked={true}>{t('CategoryVideo.selectCategory')}</option>
                                <option value="0">{t('CategoryVideo.nature')}</option>
                                <option value="1">{t('CategoryVideo.auto')}</option>
                                <option value="2">{t('CategoryVideo.humor')}</option>
                                <option value="3">{t('CategoryVideo.education')}</option>
                                <option value="4">{t('CategoryVideo.entertainment')}</option>
                                <option value="5">{t('CategoryVideo.scienceAndTechnology')}</option>
                            </select>
                        </div>
                        <div className="UploadVideo--rowTwo">
                            <label className="UploadVideo--label">
                                <div>{t("UploadVideo.uploadVideo")}</div>
                                <Icons.Download/>
                                <input type="file" hidden/>
                            </label>
                            {WindowSize <= 600 ? null : <Button content={t("UploadVideo.upload")}/>}
                            <label className="UploadVideo--label">
                                <div>{t("UploadVideo.uploadPoster")}</div>
                                <Icons.Download/>
                                <input type="file" hidden/>
                            </label>
                        </div>
                        {WindowSize >= 600 ? null : <Button content={t("UploadVideo.upload")}/>}
                    </div>
                </div>
            </main>
        </>
    );
};

export default UploadVideo;