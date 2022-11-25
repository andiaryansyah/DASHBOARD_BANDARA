import axios from 'axios';
import { toast } from "react-toastify";

export function setData (payload) {
    return {
        type:"SET_DATA",
        payload:payload
    }
}
export const setLoading = (payload) => {
  return { 
    type: "USERS/LOADING", 
    payload:payload 
  };
};

export function getData () {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            await axios
              ({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}/pasbandara/all`,
            })
              .then((res) => {
                dispatch(setLoading(false));
                dispatch(setData(res.data));
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

export function login (payload) {
  return async (dispatch, getState) => {
      try {
          dispatch(setLoading(true));
          await axios
            ({
              method: "POST",
              url: `${process.env.REACT_APP_API_URL}/user/login`,
              data: payload
          })
            .then((res) => {
              localStorage.setItem('token', res.data.access_token)
              dispatch(setLoading(false));
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            })
            .catch((err) => {
              dispatch(setLoading(false));
              toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
              console.log(err);
            });
        } catch (error) {
          dispatch(setLoading(false));
          console.log(error);
        }
  }
}