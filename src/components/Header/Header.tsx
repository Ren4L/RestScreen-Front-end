import React, {ReactNode, useEffect, useState} from 'react';
import {Icons} from "@utils";
import {AuthButtons, RegAuthButtons, RegAuthHomeButtons, RegButtons, SearchPersonalButtons} from "./HeaderButtons";

import styles from "./Header.module.scss";
import {useWindowSizeState} from "@hooks";

interface IHeader {
    type?:string
}

const Header = ({type = "auth"}:IHeader) => {
    const {WindowSize} = useWindowSizeState();

    function getHeaderButtons(type:string):ReactNode {
        switch (type) {
            case "auth":
                return <AuthButtons/>;
            case "reg":
                return <RegButtons/>;
            case "regAuth":
                return <RegAuthButtons/>;
            case "regAuthHome":
                return <RegAuthHomeButtons/>
            case "searchPersonal":
                return <SearchPersonalButtons/>;
        }
    }

    return (
        <header className={styles.container}>
            <Icons.Logo TextOn={WindowSize < 850 ? false : true}/>
            {getHeaderButtons(type)}
        </header>
    );
};

export default Header;