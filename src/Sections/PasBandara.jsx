import React, { useEffect ,useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import Modal from "../components/Modal";
import Table from "../components/Table";
import { getData, setFilter, setStatus } from "../store/actions/pasbandaraAction";

const PasBandara = () => {
  const dispatch = useDispatch()
  const {data, filter, status} = useSelector((state) => state.pasbandara);

  const columns = useMemo(
    () => [
      {
        name: <div className="text-xs m-auto">No</div>,
        cell:(row) => <div className="text-xs m-auto">{row.no}</div>,
        selector: (row) => <div>{row.no}</div>,
        sortable: true,
        width: "50px",

      },
      {
        name:<div className="text-xs m-auto">Tanggal</div>,
        cell:(row) => <div className="text-xs m-auto">{row.tanggal}</div>,
        selector: (row) => row.tanggal,
        sortable: true,
        width: "160px",
        
      },
      {
        name: <div className="text-xs m-auto">Email</div>,
        cell:(row) => <div className="text-xs m-auto">{row.email}</div>,
        selector: (row) => <div>{row.email}</div>,
        sortable: true,
      },
      {
        name: <div className="text-xs m-auto">No. HP/WA</div>,
        cell:(row) => <div className="text-xs m-auto">{row.no_hp}</div>,
        selector: (row) => row.no_hp,
        sortable: true,
        width: "150px",
      },
      {
        name: <div className="text-xs m-auto">Status</div>,
        cell:(row) => <div className="text-xs m-auto">{row.status}</div>,
        selector: (row) => row.status,
        sortable: true,
        width: "150px",
      },
      {
        name: <div className="text-xs m-auto">Action</div>,
        cell: (row) => (
          <Modal email={row.email}/>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "130px",
      },
    ],
    []
  );

  const formatterDate = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(Date.parse(date));
  };


  const datas = data.map((data, index) => 
    (
      {
        id: data.id,
        no:index + 1,
        tanggal: formatterDate(data.createdAt),
        email: data.email,
        no_hp: data.no_hp,
        status: `${data.status === true ? "Terverifikasi" : "Belum Terverifikasi"}`,
        // foto: `${data.foto ? "✅" : "❌"}`,
      }
    )
  )

  const [search, setSearch] = useState("");
  const [cekStatus, setCekStatus] = useState(status)
  // const [filteredData, setFilteredData] = useState(datas);

  const filterStatus = [
    { value:"all", label:"Semua"},
    { value:"verified", label:"Terverifikasi"},
    { value:"unverified", label:"Menunggu Terverifikasi"}
  ];

  const statusDropdown = <div className="flex items-center md:ml-10">
                              <span className="text-slate-700 mr-1">Status <span className="pl-5 md:pl-0">:</span></span>
                            <Select
                              className=""
                              options={filterStatus}
                              placeholder="Pilih Status"
                              value={filterStatus.find((option) => {
                                return option.value === cekStatus
                            })}
                              onChange={(e) => setCekStatus(e.value, e.label)}
                            />
                        </div>

  useEffect(() => {
   dispatch(getData({filter, status}))

   // eslint-disable-next-line
  }, [])
  
  useEffect(() => {
      dispatch(setFilter(search))
      dispatch(setStatus(cekStatus))

// eslint-disable-next-line
  }, [search, cekStatus])

  useEffect(() => {
    dispatch(getData({filter, status}))

  // eslint-disable-next-line
  },[filter, status])

  useEffect(() => {

  },[data])

  return (
    <div className="text-xs p-5 md:p-9">
        <Table 
          columns={columns}
          data={datas}
          searchValue={search}
          handleSearch={(e) => setSearch(e.target.value)}
          statusDropdown={statusDropdown}
          placeholder={"Pencarian Email/No.HP"}
        />
    </div>
  );
};

export default PasBandara;
