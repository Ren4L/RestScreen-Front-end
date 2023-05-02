import React, {ChangeEvent, CSSProperties, MouseEventHandler, ReactNode} from "react";

export interface IAuth {
    email:string,
    password:string
}

export interface IReg {
    email:string,
    nickname:string,
    password:string,
    repeatPass:string,
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
}

export interface IInput {
    placeholder:string,
    name: string
    className?:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
}


export interface IUser{
    id?:number,
    nickname?:string,
    mail?:string,
    photo?:string,
}

export interface ICircleButton{
    children:ReactNode,
    link?:string
    handleClick?:MouseEventHandler,
    margin?: boolean,
}

export interface IMessageBlock{
    id: number,
    photo?:string,
    nickname: string,
    time:Date,
    lastMessage: string,
    countMessage?: number,
}