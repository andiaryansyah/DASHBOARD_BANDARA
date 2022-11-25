const initialState = {
    auth: false
}

export default function authReducer (state= initialState, action) {
    if (action.type === "SET_AUTH" ){
        return {...state, auth:action.payload}
    }
    return state;
}