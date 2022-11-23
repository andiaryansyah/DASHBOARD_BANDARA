const initialState = {
    data:[],
    loading:false,
}

export default function respondenReducer (state= initialState, action) {
if (action.type === "SET_DATA" ){
 return {...state, data:action.payload}
}
if (action.type === "SET_LOADING" ){
    return {...state, loading:action.payload}
   }


return state;
}