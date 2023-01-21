
import { toast } from "react-toastify";
import axios from 'axios';
import { setLoading } from "../actions/miscellaneousAction";

export const setTotalSurvey = (payload) => {
  return { 
    type: "SURVEY/TOTAL", 
    payload:payload 
  };
};

export const setDataSurvey = (payload) => {
  return { 
    type: "SURVEY/DATA", 
    payload:payload 
  };
};


  export function getDataSurvey() {
    return async (dispatch, getState) => {
      try {
        console.log("MASUKKKKKKKKKKKKKKKKKK");
        dispatch(setLoading(true));
        await axios 
        ({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/survey/report`,
          headers: {
            access_token: localStorage.getItem('token')
        }
        })
        .then((res) => {
            dispatch(setTotalSurvey(res.data.total));
            dispatch(setDataSurvey(res.data.result));
            dispatch(setLoading(false));
        })
        .catch((err) => {
            // console.log(err);
            dispatch(setLoading(false));
            toast.error(err.response.data.message, {
            position: toast.POSITION.TOP_CENTER,
            });
        });
        } catch (error) {
            // console.log(error);
        }
    }
  }