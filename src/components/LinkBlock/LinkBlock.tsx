import React from 'react';
import styles from './LinkBlock.module.scss';
import {Icons, Types, UserApiController} from "@utils";
import {useTypedSelector} from "@hooks";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

const LinkBlock = ({link, icon, title, id}:Types.ILink) => {
    const user = useTypedSelector(state => state.user),
        params = useParams(),
        dispatch = useDispatch();

    async function handleDeleteLink(){
        const links = await UserApiController.deleteLink(id);
        dispatch({type:'setData', payload:{links:links?.data}})
    }

    return (
        <div className={styles.container}>
            <a href={link} target="_blank">
                {icon == null ? <Icons.Link/> : <div className={styles.icon} style={{background: `url('${icon}') 50% 50%/cover no-repeat`}}></div>}
                <div className={styles.title}>{title}</div>
            </a>
            {user.id == +params.id ?
                <div className={styles.iconContainer}>
                    <Icons.Cross handleClick={handleDeleteLink}/>
                </div>
                :
                null
            }
        </div>
    );
};

export default LinkBlock;