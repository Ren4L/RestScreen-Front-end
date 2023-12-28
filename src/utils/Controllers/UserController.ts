import {Types, UserApiController} from "@utils";
import {Dispatch} from "redux";
import {NavigateFunction} from "react-router-dom";

export default class UserController {
    static async auth(dispatch: Dispatch, payload:Types.IUser) {
        try {
            const response = (await UserApiController.auth({email:payload.email, password:payload.password}));
            let responseData = response.data as Types.IUser;
            localStorage.setItem('token', responseData.accessToken);
            dispatch({type:'setData', payload: responseData});
        }
        catch (e) {
            if (e.response.status) {
                return e.response.data.errors[0];
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
            if (e.response.status) {
                return e.response.data.errors[0];
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
            if (e.response.status === 401) {
                localStorage.clear();
                dispatch({type:'clearData'});
            }
        }
    }
}