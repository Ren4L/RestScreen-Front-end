import {Api, Types} from '@utils';
import {AxiosResponse} from "axios";

export default class UserApiController {
    static auth({email, password}:Types.IAuth):Promise<AxiosResponse<Types.IUser>> {
        return Api.post<Types.IUser>('/user/auth', {email, password});
    }

    static async register({nickname, email, password, passwordRepeat}:Types.IReg):Promise<AxiosResponse<Types.IUser>> {
        return Api.post<Types.IUser>('/user/register', {nickname, email, password, passwordRepeat});
    }

    static async logout():Promise<void> {
        return Api.delete('/user/logout');
    }
}