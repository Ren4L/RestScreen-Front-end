import React, {useEffect} from 'react';
import {Header, NavBar, VideoBlockInline} from "@components";
import {useTranslation} from "react-i18next";
import './Favourite.scss';

const Favourite = () => {
    const {t} = useTranslation();

    useEffect(() => {document.title = t('Button.favourites');}, [t]);

    return (
        <>
            <Header type='searchPersonal'/>
            <main className='Container'>
                <NavBar activeButton={4}/>
                <div className="Favourite--List--container">
                    <h1>{t('Button.favourites')}</h1>
                    <VideoBlockInline
                        id={1}
                        poster='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'
                        url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                        category='nature'
                        title="Прекрасные явления природы в мире пустыни"
                        datePublic={new Date('05.05.2023')}
                        views={101121}
                        authorId={1}
                        authorName="Dantey"
                        authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                    />
                    <VideoBlockInline
                        id={1}
                        poster='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'
                        url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                        category='nature'
                        title="Прекрасные явления природы в мире пустыни"
                        datePublic={new Date('05.05.2023')}
                        views={101121}
                        authorId={1}
                        authorName="Dantey"
                        authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                    />
                    <VideoBlockInline
                        id={1}
                        poster='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'
                        url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                        category='nature'
                        title="Прекрасные явления природы в мире пустыни"
                        datePublic={new Date('05.05.2023')}
                        views={101121}
                        authorId={1}
                        authorName="Dantey"
                        authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                    />
                    <VideoBlockInline
                        id={1}
                        poster='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png'
                        url='https://firebasestorage.googleapis.com/v0/b/netconnectv2-9fd5b.appspot.com/o/files%2FSmallville%20(2001)_s01e01_720p.mp4?alt=media&token=f28a1ff0-b3d4-4adf-924a-ba5759e0c70f'
                        category='nature'
                        title="Прекрасные явления природы в мире пустыни"
                        datePublic={new Date('05.05.2023')}
                        views={101121}
                        authorId={1}
                        authorName="Dantey"
                        authorPhoto="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                    />
                </div>
            </main>
        </>
    );
};

export default Favourite;