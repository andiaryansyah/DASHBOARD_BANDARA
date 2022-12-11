
import { toast } from "react-toastify";
import axios from 'axios';

export const setAuth = (payload) => {
  return { 
    type: "SET_AUTH", 
    payload:payload 
  };
};

export const setDashboard = (payload) => {
  return { 
    type: "DATA_DASHBOARD", 
    payload:payload 
  };
};

export const setLoading = (payload) => {
  return { 
    type: "USERS/LOADING", 
    payload:payload 
  };
};

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
                dispatch(setAuth(true));
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

  export function getDataDashboard() {
    return async (dispatch, getState) => {
      try {
        await axios 
        ({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/data`,
      })
      .then((res) => {
        dispatch(setDashboard(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
      } catch (error) {
        console.log(error);
      }
    }
  }