import React from 'react';
import styles from './Search.module.scss';
import SearchMessage from "./SearchMessage";

const SearchFriends = () => {
    return (
        <div className={styles.containerSearchFriends}>
            <SearchMessage showParameterButton={false} media={false}/>
        </div>
    );
};

export default SearchFriends;