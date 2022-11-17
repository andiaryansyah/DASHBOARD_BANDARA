const initialState = {
    data:[],
}

export default function respondenReducer (state= initialState, action) {
if (action.type === "SET_DATA" ){
 return {...state, data:action.payload}
}

return state;
}