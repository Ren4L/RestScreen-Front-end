interface MenuAction {
    type:string;
    payload?:boolean;
}

export interface IMenu{
    value: boolean,
}

const defaultState:IMenu = {
    value: true
}

export default (state = defaultState, action:MenuAction):IMenu => {
    switch (action.type) {
        case "changeData":
            return {...state, value:!state.value}
        case "setData":
            return {...state, value: action.payload}
        default:
            return state;
    }
}