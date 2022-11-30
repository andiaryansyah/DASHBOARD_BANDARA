import React, { useEffect, useState } from "react";

import defaultPhoto from "../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/userAction";

const ModalEdit = ({
  addIcon,
  addTooltip,
  addClassName,
  thisClick,
  getEmail,
}) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    const name = e.target.name;
    // const id = e.target.id;
    // setLoading(true);
    setMsg({ ...msg, [name]: null });
    if (image && image.size > 1048576) {
      setMsg({
        ...msg,
        [name]: "Melebihi ukuran file",
      });
    } else {
      // uploadFiles(image, id, name);
      // setFiles({
      //   ...files,
      //   [name]: image,
      // });
      setFile(image);
    }
  };

  const getUser = async () => {
    const findIndex = await users.findIndex((user) => user.email === getEmail);

    setFullname(users[findIndex].full_name);
    setEmail(users[findIndex].email);
    setRole(users[findIndex].role);
    setStatus(users[findIndex].is_active);
    setFile(users[findIndex].picture_url);

    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (showModal === false) {
      return (
        setFullname(""),
        setEmail(""),
        setPassword(""),
        // setConfPassword(""),
        setRole(""),
        setStatus("")
      );
    }
  }, [showModal]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(file, "POTOOO");
    console.log(fullname, "FULLNAME");
    console.log(email, "EMAIL");
    console.log(password, "password");
    console.log(role, "role");
    console.log(status, "status");
  };

  return (
    <div>
      <>
        <div className="group">
          <button className={addClassName} type="button" onClick={getUser}>
            {addIcon}
            {addTooltip}
          </button>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div
                className="relative w-1/2 my-6 mx-auto max-w-5xl overflow-y-auto h-5/6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {/*content*/}
                <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="fixed bg-gray-50 w-1/2 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t z-40">
                    <h3 className="text-3xl font-semibold">
                      {" "}
                      {thisClick === "preview" ? "Preview" : "Form Edit"}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-red-500 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        x
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative mt-16">
                    <form
                      className="bg-white px-8 pt-8 pb-5 text-start"
                      onSubmit={onSubmit}
                    >
                      <div>
                        {file ? (
                          "ada"
                        ) : (
                          <img
                            src={defaultPhoto}
                            alt="default"
                            className="m-auto object-cover h-28 w-28 rounded-full mb-4"
                          />
                        )}
                      </div>
                      {thisClick === "preview" ? null : (
                        <div className="mb-4 flex flex-col justify-center items-center">
                          <label
                            className="block text-gray-50 text-sm font-bold mb-2 cursor-pointer px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/50 border-none rounded-full"
                            htmlFor="picture_url"
                          >
                            Change Picture
                          </label>
                          <input
                            className=" w-3/12  py-2 px-3 text-gray-700 leading-tight hidden"
                            id="picture_url"
                            type="file"
                            onChange={handleChange}
                            accept="image/*"
                            disabled={thisClick === "preview" ? true : false}
                          />
                        </div>
                      )}
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="fullname"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="fullname"
                          type="text"
                          placeholder="Nama Lengkap"
                          required
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          disabled={thisClick === "preview" ? true : false}
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={thisClick === "preview" ? true : false}
                        />
                      </div>

                      {/* {thisClick === "preview" ? "" : 
                      <div className="mb-1">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div> 
                    }

                    {thisClick === "preview" ? "" : 
                      <div className="mb-1">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="confPassword"
                        >
                          Konfirmasi Password
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="confPassword"
                          type="password"
                          placeholder="******************"
                          value={confPassword}
                          onChange={(e) => setConfPassword(e.target.value)}
                        />
                        <span>
                          {confPassword === "" ? (
                            ""
                          ) : password === confPassword && password.length > 0 ? (
                            <p className="text-green-500">
                              Password dan konfirmasi password cocok
                            </p>
                          ) : (
                            <p className="text-red-500">
                              Password dan konfirmasi password tidak cocok
                            </p>
                          )}
                        </span>
                      </div>
                    } */}

                      <div className="mb-1 w-full">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="role"
                        >
                          Role
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          // value={role}
                          defaultValue={role}
                          onChange={(e) => setRole(e.target.value)}
                          disabled={thisClick === "preview" ? true : false}
                        >
                          <option hidden>
                            Pilih Role
                          </option>
                          <option value="Admin">
                            Admin
                          </option>
                          <option value="Super Admin">Super Admin</option>
                        </select>
                      </div>

                      <div className="mb-6 w-full">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="status"
                        >
                          Status
                        </label>
                        <select
                          className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          // value={status}
                          defaultValue={status}
                          onChange={(e) => setStatus(e.target.value)}
                          disabled={thisClick === "preview" ? true : false}
                        >
                          <option hidden>Pilih Status</option>
                          <option value={true}>Aktif</option>
                          <option value={false}>Non Aktif</option>
                        </select>
                      </div>

                      {/*footer*/}
                      {thisClick === "preview" ? (
                        ""
                      ) : (
                        <div className="flex items-center justify-end p-6">
                          <button
                            className="bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-blue-600/50 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="submit"
                            onClick={() => setShowModal(false)}
                          >
                            Simpan
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
};

export default ModalEdit;
