import React from 'react';
import loaderImg from './PreLoader.png';
import './Loader.scss';

const Loader = ({visible} : {visible?:boolean}) => {
    return (
        <div className="Loader--container" style={{display:visible ? 'flex' : 'none'}}>
            <img className="Loader" src={loaderImg} alt="Loader"/>
        </div>
    );
};

export default Loader;