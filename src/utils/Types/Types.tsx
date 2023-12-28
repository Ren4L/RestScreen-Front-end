import React, {ChangeEvent, CSSProperties, MouseEventHandler, ReactNode} from "react";
import {Types} from "@utils";

export interface IAuth {
    email:string,
    password:string
}

export interface IReg {
    email:string,
    nickname:string,
    password:string,
    passwordRepeat:string,
}

export interface IUser{
    id?:number,
    nickname?:string,
    email?:string,
    photo?:string,
    description?:string,
    createdAt?:string,
    updatedAt?:string,
    accessToken?:string,
    password?:string,
}


interface IUserAction {
    type:string;
    payload?:Types.IUser;
}

export interface IForgot {
    email:string,
}

export interface INavButton {
    content:string,
    link?:string,
    id?:string,
    active?: boolean,
    notBar?: boolean,
    css?:CSSProperties,
    onClick?:MouseEventHandler<HTMLDivElement>,
    children?:ReactNode
}

export interface IProfilIcon {
    className?:string,
    handleClick?:MouseEventHandler
}

export interface IButton {
    content:string,
    link?:string,
    style?:string,
    css?:CSSProperties,
    handleClick?:MouseEventHandler
}

export interface IInput {
    placeholder:string,
    name: string
    className?:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
}

export interface ICircleButton{
    children:ReactNode,
    link?:string
    handleClick?:MouseEventHandler,
    margin?: boolean,
    scale?: number,
}

export interface IMessageBlock{
    id: number,
    photo?:string,
    nickname: string,
    time:Date,
    lastMessage: string,
    countMessage?: number,
}

export interface IMessage{
    id: number,
    isCompanion?:boolean,
    photo?:string,
    nickname: string,
    time:Date,
    message: string,
}

export interface IVideo{
    id:number,
    url:string,
    poster?: string,
    category: string,
    title: string,
    datePublic: Date,
    views: number,
    authorId:number,
    authorName: string,
    authorPhoto?: string,
}

export interface IComment{
    id: number,
    authorName: string,
    authorPhoto?: string,
    comment: string,
    datePublic: Date,
    likes: number,
    dislikes: number
}











