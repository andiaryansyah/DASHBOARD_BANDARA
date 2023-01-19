const initialState = {
  data: [],
  filter: "",
  status: "all",
  loading: false,
};

export default function respondenReducer(state = initialState, action) {
  if (action.type === "SET_DATA") {
    return { ...state, data: action.payload };
  }
  if (action.type === "SET_FILTER") {
    return { ...state, filter: action.payload };
  }
  if (action.type === "SET_STATUS") {
    return { ...state, status: action.payload };
  }
  if (action.type === "LOADING_PASBANDARA") {
    return { ...state, loading: action.payload };
  }

  return state;
}
