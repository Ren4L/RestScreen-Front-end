import React, {ReactNode} from 'react';
import {Icons} from "@utils";
import {AuthButtons, HomeButtons, RegAuthButtons, RegButtons, SearchPersonalButtons} from "./HeaderButtons";

import styles from "./Header.module.scss";
import {useWindowSizeState} from "@hooks";

interface IHeader {
    type?:string
}

const Header = ({type = "auth"}:IHeader) => {
    const {WindowSize} = useWindowSizeState();

    function getHeaderButtons(type:string):ReactNode {
        switch (type) {
            case "home":
                return <HomeButtons/>;
            case "auth":
                return <AuthButtons/>;
            case "reg":
                return <RegButtons/>;
            case "regAuth":
                return <RegAuthButtons/>;
            case "searchPersonal":
                return <SearchPersonalButtons/>;
        }
    }

    return (
        <header className={styles.container}>
            <Icons.Logo TextOn={WindowSize <= 850 ? false : true}/>
            {getHeaderButtons(type)}
        </header>
    );
};

export default Header;