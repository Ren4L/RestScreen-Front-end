import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Icons, Types, Validation} from "@utils";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Header, Input} from "@components";
import './ForgotPassword.scss';

const ForgotPassword = () => {
    const [ForgotForm, setForgotForm] = useState<Types.IReg>({email:'', password:'', nickname:'', repeatPass:''});
    const [ErrorForm, setErrorForm] = useState<string>(' ');
    const FormRef = useRef<HTMLFormElement>(null);
    const ErrorRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const {t} = useTranslation();

    function submitReg(e:React.FormEvent):void {
        e.preventDefault();
        let result = Validation.ForgotPass(FormRef, ForgotForm, ErrorRef);
        if (result.flag) {
            navigate('/Auth');
        }
        else {
            setErrorForm(result.message);
        }
    }

    useEffect(() => {
        document.title = t('Form.forgotTitle')
    })

    return (
        <Fragment>
            <Header type={'regAuthHome'}/>
            <main className="Forgot--Form">
                <form ref={FormRef} className='Form' onSubmit={submitReg}>
                    <h1 className='margin--el'>{t("Form.nameForgot")}</h1>
                    <h2 className='margin--el'>{t("Form.forgotTitle")}</h2>
                    <div className="Form__input--title">{t("Form.email")}</div>
                    <Input name="email" onChange={(e)=>{setForgotForm({...ForgotForm, email:e.target.value})}} className='margin--el' placeholder='test@gmail.com'/>
                    <div ref={ErrorRef} className='Form__error--block'>
                        <Icons.Error/>
                        <span>{t(ErrorForm)}</span>
                    </div>
                    <Button content={t("Button.forgot")} style='orange--forgot'/>
                </form>
            </main>
        </Fragment>
    );
};

export default ForgotPassword;