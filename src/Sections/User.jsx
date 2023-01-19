import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { deleteUser, getUsers, setLoading } from "../store/actions/userAction";

import { FaTrash } from "react-icons/fa";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import defaultPicture from "../assets/user.png";
import ModalAddUser from "../components/ModalAddUser";
import ModalEdit from "../components/ModalEdit";
import Loading from "../components/Loading";

const User = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const role = localStorage.getItem("role").toLocaleLowerCase();
  const delUser = (id) => {
    dispatch(deleteUser(id));
  };
  const columns = useMemo(
    () => [
      {
        name: <div className="text-xs m-auto">No</div>,
        cell: (row) => <div className="text-xs m-auto">{row.no}</div>,
        selector: (row) => <div>{row.no}</div>,
        // sortable: true,
        width: "60px",
      },
      {
        name: <div className="text-xs m-auto">Foto</div>,
        cell: (row) =>
          row.picture_url ? (
            <img
              className="h-10 w-10 m-auto object-cover rounded-full"
              src={row.picture_url}
              alt="default"
            />
          ) : (
            <img
              className="h-10 w-10 m-auto object-cover rounded-full"
              src={defaultPicture}
              alt="default"
            />
          ),
        selector: (row) => row.picture_url,
        sortable: true,
        width: "100px",
      },
      {
        name: <div className="text-xs ">Nama Lengkap</div>,
        cell: (row) => <div className="text-xs ">{row.fullname}</div>,
        selector: (row) => <div>{row.fullname}</div>,
        sortable: true,
      },
      {
        name: <div className="text-xs ">Email</div>,
        cell: (row) => <div className="text-xs ">{row.email}</div>,
        selector: (row) => row.email,
        sortable: true,
        width: "230px",
      },
      {
        name: <div className="text-xs m-auto">Role</div>,
        cell: (row) => <div className="text-xs m-auto">{row.role}</div>,
        selector: (row) => row.role,
        sortable: true,
        width: "100px",
      },
      {
        name: <div className="text-xs m-auto">Status</div>,
        cell: (row) => <div className="text-xs m-auto">{row.status}</div>,
        selector: (row) => row.status,
        sortable: true,
        width: "100px",
      },
      {
        name: <div className="text-xs m-auto">Aksi</div>,
        cell: (row) => (
          <div className="flex items-center">
            <ModalEdit
              getEmail={row.email}
              addClassName={
                "text-xs m-auto p-2 text-gray-500 hover:text-gray-700 rounded-sm"
              }
              addIcon={<AiFillEye size={20} />}
              addTooltip={
                <span className="tooltip-text text-gray-900 bg-blue-200 p-3 -mt-16 -ml-2 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50">
                  Preview
                </span>
              }
              thisClick={"preview"}
            />
            {role === "super admin" ? (
              <>
                <ModalEdit
                  getEmail={row.email}
                  addClassName={
                    "text-xs m-auto p-2 text-blue-500  hover:text-blue-700 rounded-sm"
                  }
                  addIcon={<AiFillEdit size={20} />}
                  addTooltip={
                    <span className="tooltip-text text-gray-900 bg-blue-200 p-3 -mt-16 -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50">
                      Edit
                    </span>
                  }
                  thisClick={"edit"}
                />
                <div className="group">
                  <button
                    onClick={() => delUser(row.id)}
                    className="text-xs m-auto p-2 text-red-500  hover:text-red-700 rounded-sm"
                  >
                    <FaTrash size={15} />
                    <span className="tooltip-text text-gray-900 bg-blue-200 p-3 -mt-16 -ml-14 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50">
                      Hapus
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "130px",
      },
    ],
    // eslint-disable-next-line
    []
  );

  const datas = users.map((user, index) => ({
    id: user.id,
    no: index + 1,
    picture_url: user.picture_url,
    fullname: user.full_name,
    email: user.email,
    role: user.role,
    status: `${user.is_active === true ? "Aktif" : "Tidak Aktif"}`,
  }));

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(datas);

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const result = datas.filter((newData) => {
      return newData.email.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(result);
    // eslint-disable-next-line
  }, [users, search]);

  return (
    <div className="text-xs p-5 md:p-9">
      {loading ? (
        <div className="flex justify-center items-center relative h-screen">
          <Loading />
        </div>
      ) : (
        <Table
          columns={columns}
          data={filteredData}
          searchValue={search}
          handleSearch={(e) => setSearch(e.target.value)}
          addComponent={<ModalAddUser />}
          placeholder={"Pencarian Email"}
          type="users"
        />
      )}
    </div>
  );
};

export default User;
