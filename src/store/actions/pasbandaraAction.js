import axios from 'axios';

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