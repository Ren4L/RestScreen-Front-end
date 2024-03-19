import {Types, UserApiController} from "@utils";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";

export default class UserController {
    static async auth(dispatch: Dispatch, payload:Types.IUser) {
        try {
            const response = (await UserApiController.auth({email:payload.email, password:payload.password}));
            let responseData = response.data as Types.IUser;
            localStorage.setItem('token', responseData.accessToken);
            dispatch({type:'setData', payload: responseData});
        }
        catch (e) {
            if (e?.response?.status) {
                return e?.response?.data?.errors[0];
            }
        }
    }

    static async register(dispatch: Dispatch, payload:Types.IReg) {
        try {
            const response = (await UserApiController.register(payload));
            let responseData = response.data as Types.IUser;
            localStorage.setItem('token', responseData.accessToken);
            dispatch({type:'setData', payload: responseData});
        }
        catch (e) {
            if (e?.response?.status) {
                return e?.response?.data?.errors[0];
            }
        }
    }

    static async logout(dispatch: Dispatch) {
        try {
            await UserApiController.logout();
            localStorage.clear();
            dispatch({type:'clearData'});
        }
        catch (e) {
            if (e?.response?.status === 401) {
                localStorage.clear();
                dispatch({type:'clearData'});
            }
        }
    }

    static async checkAuth(dispatch: Dispatch){
        try{
            const response = await axios.get<Types.IUser>(`${process.env.BACK_END_DOMAIN}/api/user/refresh`, {withCredentials: true});
            localStorage.setItem('token', response?.data?.accessToken);
            dispatch({type:'setData', payload: response});
        }
        catch (e) {
            if (e?.response?.status === 401) {
                localStorage.clear();
                dispatch({type:'clearData'});
            }
        }
    }

    static async editOneColumn(dispatch: Dispatch, payload:Types.IUser, column: string) {
        try {
            const response = (await UserApiController.editOneColumn(payload, column));
            let responseData = response.data as Types.IUser;
            dispatch({type:'setData', payload: responseData});
        }
        catch (e) {
            if (e?.response?.status) {
                return e?.response?.data?.errors[0];
            }
        }
    }
}