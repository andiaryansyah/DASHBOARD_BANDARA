import axios from 'axios';
// import { toast } from "react-toastify";

export function setUsers (payload) {
    return {
        type:"SET_USERS",
        payload:payload
    }
}
export const setLoading = (payload) => {
  return { 
    type: "USERS/LOADING", 
    payload:payload 
  };
};

export function getUsers () {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            await axios
              ({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}/user/all`,
                headers: {
                    access_token: localStorage.getItem('token')
                  }
            })
              .then((res) => {
                dispatch(setLoading(false));
                dispatch(setUsers(res.data));
              })
              .catch((err) => {
                dispatch(setLoading(false));
                console.log(err);
              });
          } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
          }
    }
}

