import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Icons, Types, Validation} from "@utils";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Header, Input} from "@components";
import './Registration.scss';

const Registration = () => {
    const [RegForm, setRegForm] = useState<Types.IReg>({email:'', password:'', nickname:'', repeatPass:''});
    const [ErrorForm, setErrorForm] = useState<string>(' ');
    const FormRef = useRef<HTMLFormElement>(null);
    const ErrorRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const {t} = useTranslation();

    function submitReg(e:React.FormEvent):void {
        e.preventDefault();
        let result = Validation.Reg(FormRef, RegForm, ErrorRef);
        if (result.flag) {
            navigate('/Auth');
        }
        else {
            setErrorForm(result.message);
        }
    }

    useEffect(() => {
        document.title = t('Button.reg')
    })

    return (
        <Fragment>
            <Header type={'auth'}/>
            <main className="Reg--Form">
                <form ref={FormRef} className='Form' onSubmit={submitReg}>
                    <h1 className='margin--el'>{t("Button.reg")}</h1>
                    <h2 className='margin--el'>{t("Form.title")}</h2>
                    <div className="Form__input--title">{t("Form.nickname")}</div>
                    <Input name="text" onChange={(e)=>{setRegForm({...RegForm, nickname:e.target.value})}} className='margin--el' placeholder='Vlad123'/>
                    <div className="Form__input--title">{t("Form.email")}</div>
                    <Input name="email" onChange={(e)=>{setRegForm({...RegForm, email:e.target.value})}} className='margin--el' placeholder='test@gmail.com'/>
                    <div className="Form__input--title">{t("Form.password")}</div>
                    <Input name="password" onChange={(e)=>{setRegForm({...RegForm, password:e.target.value})}} className='margin--el' placeholder='••••••••'/>
                    <div className="Form__input--title">{t("Form.repeatPass")}</div>
                    <Input name="password" onChange={(e)=>{setRegForm({...RegForm, repeatPass:e.target.value})}} className='margin--el' placeholder='••••••••'/>
                    <div ref={ErrorRef} className='Form__error--block'>
                        <Icons.Error/>
                        <span>{t(ErrorForm)}</span>
                    </div>
                    <div className="margin--el Reg__contract">{t("Form.contract")}</div>
                    <Button content={t("Button.reg")} style='white'/>
                </form>
            </main>
        </Fragment>
    );
};

export default Registration;