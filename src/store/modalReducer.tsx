interface Action {
    type:string;
    payload?:boolean;
}

export interface IModal{
    [key:string]:any,
    filterSearch: boolean,
    filterMessage: boolean,
    filterFriends: boolean,
    profile: boolean,
}

const defaultState:IModal = {
    filterSearch: false,
    filterMessage: false,
    filterFriends: false,
    profile: false,
}

export default (state = defaultState, action:Action):IModal => {

    if (action.type.includes('disableEverythingExcept/')){
        const property: keyof IModal = action.type.replace("disableEverythingExcept/", "");
        return {
            ...state,
            filterMessage: false,
            filterSearch: false,
            filterFriends: false,
            profile: false,
            [property]: !state[property],
        };
    }

    switch (action.type) {
        case "changeDataProfile":
            return {...state, profile:!state.profile}
        case "setDataProfile":
            return {...state, profile: action.payload}
        case "changeDataSearchFilter":
            return {...state, filterSearch:!state.filterSearch}
        case "setDataSearchFilter":
            return {...state, filterSearch: action.payload}
        case "changeDataMessageFilter":
            return {...state, filterMessage:!state.filterMessage}
        case "setDataMessageFilter":
            return {...state, filterMessage: action.payload}
        case "changeDataFriendsFilter":
            return {...state, filterFriends:!state.filterFriends}
        case "setDataFriendsFilter":
            return {...state, filterFriends: action.payload}
        default:
            return state;
    }
}