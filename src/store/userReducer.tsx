import {Types} from "@utils";

interface UserAction {
    type:string;
    payload?:Types.IUser;
}

const defaultState:Types.IUser = {
    id: 0,
    nickname: '',
    photo: '',
}

export default (state = defaultState, action:UserAction):Types.IUser => {
    switch (action.type) {
        case "setData":
            return {...state, ...action.payload}
        case "clearData":
            return {
                ...state,
                id: undefined,
                nickname: undefined,
                email: undefined,
                photo: undefined,
                description: undefined,
                createdAt: undefined,
                updatedAt: undefined,
                accessToken: undefined,
                password: undefined,
            }
        default:
            return state;
    }
}