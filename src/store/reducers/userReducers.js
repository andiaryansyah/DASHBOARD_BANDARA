const initialState = {
    users:[],
    loading:false,
}

export default function respondenReducer (state= initialState, action) {
if (action.type === "SET_USERS" ){
 return {...state, users:action.payload}
}
if (action.type === "SET_LOADING" ){
    return {...state, loading:action.payload}
   }


return state;
}