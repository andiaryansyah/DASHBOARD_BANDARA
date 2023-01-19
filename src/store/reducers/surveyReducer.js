const initialState = {
    data:[],
    total: 0,
}

export default function respondenReducer (state= initialState, action) {
if (action.type === "SURVEY/TOTAL" ){
    return {...state, total:action.payload}
    }
    if (action.type === "SURVEY/DATA" ){
        return {...state, data:action.payload}
    }
    return state;
}