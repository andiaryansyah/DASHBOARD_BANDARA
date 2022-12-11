const initialState = {
    auth: false,
    dashboard:{},
}

export default function authReducer (state= initialState, action) {
    if (action.type === "SET_AUTH" ){
        return {...state, auth:action.payload}
    }

    if (action.type === "DATA_DASHBOARD" ){
        return {...state, dashboard:action.payload}
    }
    return state;
}