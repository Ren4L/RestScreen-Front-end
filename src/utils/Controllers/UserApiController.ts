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

    static async getUser({id}:Types.IUser):Promise<AxiosResponse<Types.IUser>> {
        return Api.get<Types.IUser>('/user/get/' + id);
    }

    static async editOneColumn(obj: Types.IUser, column: string):Promise<AxiosResponse<Types.IUser>> {
        return Api.put<Types.IUser>(`/user/${column}`, obj);
    }

    static async getLinks(id: number):Promise<AxiosResponse<Types.ILink[]>> {
        return Api.get<Types.ILink[]>('/user/links/' + id);
    }
    static async createLink(data: FormData):Promise<AxiosResponse<Types.ILink[]>> {
        return Api.post<Types.ILink[]>('/user/link/', data, {
            headers:{"Content-Type": "multipart/form-data"}
        });
    }
    static async deleteLink(id: number):Promise<AxiosResponse<Types.ILink[]>> {
        return Api.delete<Types.ILink[]>(`/user/link/${id}`);
    }
}