const initialState = {
    loading: false
}

export default function authReducer (state= initialState, action) {
    if (action.type === "MISC/LOADING" ){
        return {...state, loading:action.payload}
    }
    return state;
}