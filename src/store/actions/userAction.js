import axios from 'axios';
import { toast } from "react-toastify";

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
              });
          } catch (error) {
            dispatch(setLoading(false));
          }
    }
}

export function editUser (payload, id) {
  return async (dispatch, getState) => {
      try {
          dispatch(setLoading(true));
          await axios
            ({
              method: "PATCH",
              url: `${process.env.REACT_APP_API_URL}/user/edit/${id}`,
              headers: {
                  access_token: localStorage.getItem('token')
              },
              data: payload
          })
            .then((res) => {
              dispatch(getUsers())
              dispatch(setLoading(false));
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            })
            .catch((err) => {
              dispatch(setLoading(false));
              let errMessage = "Gagal update User!"
              if (err.response.data.message) errMessage = err.response.data.message 
              toast.error(errMessage, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        } catch (error) {
          dispatch(setLoading(false));
        }
  }
}

export function deleteUser (id) {
  return async (dispatch, getState) => {
      try {
          dispatch(setLoading(true));
          await axios
            ({
              method: "DELETE",
              url: `${process.env.REACT_APP_API_URL}/user/delete/${id}`,
              headers: {
                  access_token: localStorage.getItem('token')
              }
          })
            .then((res) => {
              dispatch(getUsers())
              dispatch(setLoading(false));
              toast.success(res.data.message, {
                position: toast.POSITION.TOP_CENTER
              });
            })
            .catch((err) => {
              dispatch(setLoading(false));
              let errMessage = "Gagal menghapus User!"
              if (err.response.data.message) errMessage = err.response.data.message 
              toast.error(errMessage, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        } catch (error) {
          dispatch(setLoading(false));
        }
  }
}

// export function addUser (payload) {
//   return async (dispatch, getState) => {
//       try {
//           dispatch(setLoading(true));
//           await axios
//             ({
//               method: "POST",
//               url: `${process.env.REACT_APP_API_URL}/user/register`,
//               headers: {
//                   access_token: localStorage.getItem('token')
//               },
//               data: payload
//           })
//             .then((res) => {
//               dispatch(getUsers())
//               dispatch(setLoading(false));
//               toast.success(res.data.message, {
//                 position: toast.POSITION.TOP_CENTER,
//               });
//             })
//             .catch((err) => {
//               dispatch(setLoading(false));
//               let errMessage = "Gagal menambahkan User baru!"
//               if (err.response.data.message) errMessage = err.response.data.message 
//               toast.error(errMessage, {
//                 position: toast.POSITION.TOP_CENTER,
//               });
//               console.log(err);
//             });
//         } catch (error) {
//           dispatch(setLoading(false));
//           console.log(error);
//         }
//   }
// }

