import React, {FC, Fragment, useEffect, useRef} from 'react';
import './Authorization.scss';
import {Button, Header, Input} from "@components";
import {Icons, Validation, Types, UserController} from "@utils";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";


const Authorization:FC = () => {
    const [AuthForm, setAuthForm] = useState<Types.IAuth>({email:'vladisakov28@gmail.com', password:'12345678'});
    const [ErrorForm, setErrorForm] = useState<string>(' ');
    const FormRef = useRef<HTMLFormElement>(null);
    const ErrorRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    async function submitAuth(e:React.FormEvent) {
        e.preventDefault();
        let result = Validation.Auth(FormRef, AuthForm, ErrorRef);
        if (!result.flag) {
            setErrorForm(result.message);
            return;
        }
        let response = (await UserController.auth(dispatch, {email:AuthForm.email, password:AuthForm.password})) as string;

        if (!response){
            navigate('/');
            return;
        }

        if (!ErrorRef.current.classList.contains("Form__error--block__active")) {
            ErrorRef.current.classList.toggle("Form__error--block__active");
        }
        setErrorForm(response);
    }

    useEffect(() => {
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
                    <Input type="email" onChange={(e)=>{setAuthForm({...AuthForm, email:e.target.value})}} className='margin--el' placeholder='test@gmail.com'/>
                    <div className="Form__input--title">{t("Form.password")}</div>
                    <Input type="password" onChange={(e)=>{setAuthForm({...AuthForm, password:e.target.value})}} className='margin--el' placeholder='••••••••'/>
                    <div ref={ErrorRef} className='Form__error--block'>
                        <Icons.Error/>
                        <span>{t(ErrorForm)}</span>
                    </div>
                    <Icons.Google className='margin--el'/>
                    <div className="Form__foot--button margin--el">{t("Form.forgotPass")} <Link to={'/Forgotpass'}>{t("Form.recoverPass")}</Link></div>
                    <Button content={t("Button.signIn")} link='/Auth'/>
                </form>
            </main>
        </Fragment>
    );
};

export default Authorization;