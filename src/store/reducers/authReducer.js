const initialState = {
    auth: false,
    dashboard:{},
    loading: false
}

export default function authReducer (state= initialState, action) {
    if (action.type === "SET_AUTH" ){
        return {...state, auth:action.payload}
    }

    if (action.type === "DATA_DASHBOARD" ){
        return {...state, dashboard:action.payload}
    }

    if (action.type === "AUTH/LOADING" ){
        return {...state, loading:action.payload}
    }
    return state;
}