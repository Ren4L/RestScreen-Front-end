import {MutableRefObject} from "react";
import {Types} from '@utils';
import ValidationError from "./ValidationError";
import inputStyles from '../../components/Input/Input.module.scss';

export default class Validation{
    static Auth(FormRef:MutableRefObject<HTMLFormElement>, AuthForm:Types.IAuth, ErrorRef:MutableRefObject<HTMLDivElement>):{flag:boolean, message?:string}{
        try {
            Array.from(FormRef.current.elements).forEach((el:HTMLInputElement)=>{
                if (el.type !== 'submit' && el.classList.contains(inputStyles.Error)) {
                    el.classList.toggle(inputStyles.Error);
                }
            })
            if (!AuthForm.email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))
                throw new ValidationError("Error.emailNotCorrect", 0);
            if (!AuthForm.password.match(/^[a-zA-Z0-9]{8,16}$/))
                throw new ValidationError("Error.passwordNotCorrect", 1);
            return {flag:true}
        }
        catch (err){
            FormRef.current.elements[err.inputIndex].classList.toggle(inputStyles.Error);
            if (!ErrorRef.current.classList.contains("Form__error--block__active")) {
                ErrorRef.current.classList.toggle("Form__error--block__active");
            }
            return {flag:false, message:err.message}
        }
    }
    static Reg(FormRef:MutableRefObject<HTMLFormElement>, RegForm:Types.IReg, ErrorRef:MutableRefObject<HTMLDivElement>):{flag:boolean, message?:string}{
        try {
            Array.from(FormRef.current.elements).forEach((el:HTMLInputElement)=>{
                if (el.type !== 'submit' && el.classList.contains(inputStyles.Error)) {
                    el.classList.toggle(inputStyles.Error);
                }
            })
            if (!RegForm.nickname.match(/^[a-zA-Z0-9]{5,10}$/))
                throw new ValidationError("Error.nicknameNotCorrect", 0);
            if (!RegForm.email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))
                throw new ValidationError("Error.emailNotCorrect", 1);
            if (!RegForm.password.match(/^[a-zA-Z0-9]{8,16}$/))
                throw new ValidationError("Error.passwordNotCorrect", 2);
            if (RegForm.password !== RegForm.repeatPass)
                throw new ValidationError("Error.repeatPassNotCorrect", 3);
            return {flag:true}
        }
        catch (err){
            FormRef.current.elements[err.inputIndex].classList.toggle(inputStyles.Error);
            if (!ErrorRef.current.classList.contains("Form__error--block__active")) {
                ErrorRef.current.classList.toggle("Form__error--block__active");
            }
            return {flag:false, message:err.message}
        }
    }
    static ForgotPass(FormRef:MutableRefObject<HTMLFormElement>, ForgotForm:Types.IForgot, ErrorRef:MutableRefObject<HTMLDivElement>):{flag:boolean, message?:string}{
        try {
            Array.from(FormRef.current.elements).forEach((el:HTMLInputElement)=>{
                if (el.type !== 'submit' && el.classList.contains(inputStyles.Error)) {
                    el.classList.toggle(inputStyles.Error);
                }
            })
            if (!ForgotForm.email.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/))
                throw new ValidationError("Error.emailNotCorrect", 0);
            return {flag:true}
        }
        catch (err){
            FormRef.current.elements[err.inputIndex].classList.toggle(inputStyles.Error);
            if (!ErrorRef.current.classList.contains("Form__error--block__active")) {
                ErrorRef.current.classList.toggle("Form__error--block__active");
            }
            return {flag:false, message:err.message}
        }
    }
}

