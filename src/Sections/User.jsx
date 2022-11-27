import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { getUsers } from "../store/actions/userAction";
import defaultPicture from "../assets/user.png";
import ToggleButton from "../components/ToggleButton";

const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

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
        name: <div className="text-xs m-auto">Picture</div>,
        cell: (row) =>
          row.picture_url ? (
            <div className="text-xs m-auto">{row.picture_url}</div>
          ) : (
            <img className="p-3" src={defaultPicture} alt="default" />
          ),
        selector: (row) => row.picture_url,
        sortable: true,
        width: "100px",
      },
      {
        name: <div className="text-xs ">Fullname</div>,
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
        cell: (row) => <ToggleButton isActive={row.status}/>,
        selector: (row) => row.status,
        sortable: true,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "150px",
      },
      {
        name: <div className="text-xs m-auto">Action</div>,
        cell: (row) => <button className="bg-red-500 hover:bg-red-700 text-xs m-auto p-2 text-gray-50 rounded-sm">Hapus</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "100px",
      },
    ],
    []
  );

  const datas = users.map((user, index) => ({
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
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const result = datas.filter((newData) => {
      return newData.email.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(result);
    // eslint-disable-next-line
  }, [users, search]);

  return (
    <div className="text-xs p-10">
      <Table
        columns={columns}
        data={filteredData}
        searchValue={search}
        handleSearch={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default User;
