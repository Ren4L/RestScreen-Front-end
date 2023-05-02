import React, {FC, Fragment, useEffect, useRef} from 'react';
import './Authorization.scss';
import {Button, Header, Input} from "@components";
import {Icons, Validation, Types} from "@utils";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";


const Authorization:FC = () => {
    const [AuthForm, setAuthForm] = useState<Types.IAuth>({email:'', password:''});
    const [ErrorForm, setErrorForm] = useState<string>(' ');
    const FormRef = useRef<HTMLFormElement>(null);
    const ErrorRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    function submitAuth(e:React.FormEvent):void {
        e.preventDefault();
        let result = Validation.Auth(FormRef, AuthForm, ErrorRef);
        if (result.flag) {
            dispatch({type:"setData", payload:{
                nickname:'Ren4L',
                email:AuthForm.email,
                id:1,
                photo:'https://lh3.googleusercontent.com/a/AGNmyxZCvySfNInadKTB2kw94bxLrvODzeA4IBsoXDE2fw=s96-c'}})
            navigate('/');
        }
        else if (ErrorForm !== result.message){
            setErrorForm(result.message);
        }
    }

    useEffect(() => {
        dispatch({type: 'clearData'});
        document.title = t('Button.signIn');
    })

    return (
        <Fragment>
            <Header type={'reg'}/>
            <main className="Auth--Form">
                <form ref={FormRef} className='Form' onSubmit={submitAuth}>
                    <h1 className='margin--el'>{t("Button.signIn")}</h1>
                    <h2 className='margin--el'>{t("Form.title")}</h2>
                    <div className="Form__input--title">{t("Form.email")}</div>
                    <Input name="email" onChange={(e)=>{setAuthForm({...AuthForm, email:e.target.value})}} className='margin--el' placeholder='test@gmail.com'/>
                    <div className="Form__input--title">{t("Form.password")}</div>
                    <Input name="password" onChange={(e)=>{setAuthForm({...AuthForm, password:e.target.value})}} className='margin--el' placeholder='••••••••'/>
                    <div ref={ErrorRef} className='Form__error--block'>
                        <Icons.Error/>
                        <span>{t(ErrorForm)}</span>
                    </div>
                    <Icons.Google className='margin--el'/>
                    <div className="Form__foot--button margin--el">{t("Form.forgotPass")} <Link to={'/Forgotpass'}>{t("Form.recoverPass")}</Link></div>
                    <Button content={t("Button.signIn")}/>
                </form>
            </main>
        </Fragment>
    );
};

export default Authorization;