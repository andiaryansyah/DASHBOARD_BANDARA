import axios from 'axios';

export function setData (payload) {
    return {
        type:"SET_DATA",
        payload:payload
    }
}

export function setFilter (payload) {
  return {
      type:"SET_FILTER",
      payload:payload
  }
}

export function setStatus (payload) {
  return {
      type:"SET_STATUS",
      payload:payload
  }
}

export const setLoading = (payload) => {
  return { 
    type: "SET_LOADING", 
    payload:payload 
  };
};

export function getData (query) {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            await axios
              ({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}/pasbandara/all?status=${query.status}&&data=${query.filter}`,
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

// export function verifiedPas (id) {
//   return async (dispatch, getState) => {
//       try {
//           dispatch(setLoading(true));
//           await axios
//             ({
//               method: "PATCH",
//               url: `${process.env.REACT_APP_API_URL}/pasbandara/verified/${id}`,
//           })
//             .then((res) => {
//               dispatch(setLoading(false));
//               dispatch(getData());
//               toast.success(res.data.message, {
//                 position: toast.POSITION.TOP_CENTER
//               });
//             })
//             .catch((err) => {
//               dispatch(setLoading(false));
//               let errMessage = "Verifikasi gagal. Coba lagi!"
//               if (err.response.data.message) errMessage = err.response.data.message 
//               toast.error(errMessage, {
//                 position: toast.POSITION.TOP_CENTER,
//               });
//             });
//         } catch (error) {
//           dispatch(setLoading(false));
//           console.log(error);
//         }
//   }
// }

