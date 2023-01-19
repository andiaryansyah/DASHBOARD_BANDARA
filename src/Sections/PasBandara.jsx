import React, { useEffect ,useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select'
import Modal from "../components/Modal";
import Table from "../components/Table";
import { getData, setFilter, setLoading, setStatus } from "../store/actions/pasbandaraAction";
import {FiSend} from 'react-icons/fi';
import Loading from "../components/Loading";

const PasBandara = () => {
  const dispatch = useDispatch()
  const {data, filter, status, loading} = useSelector((state) => state.pasbandara);

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
        name: <div className="text-xs ">Email</div>,
        cell:(row) => <div className="text-xs ">{row.email}</div>,
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
          <div className="flex justify-center items-center gap-x-2">
            <div className="group">
            <Modal email={row.email} />
            <span className="tooltip-text text-gray-900 bg-blue-200 p-3 -mt-16 -ml-10 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50">Detail</span>
            </div>
            <div className="group">
            <button onClick={() => onClickSend()} className="bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-b hover:from-blue-700 hover:to-blue-800 shadow-blue-600/50 text-white text-xs font-semibold py-2 px-3 rounded-md m-auto">
              <FiSend />
            </button>
                <span className="tooltip-text text-gray-900 bg-blue-200 p-3 -mt-16 -ml-5 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50">Send</span>
            </div>
          </div>

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

  const onClickSend = () => {

  }

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
   dispatch(setLoading(true))
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
  },[status])

  useEffect(() => {

  },[data])

  const handleClick =  () => {
     dispatch(getData({filter, status}))
  }

  const onChangeSearch = (e) => {
    if (e.target.value === '' ){
      setSearch(e.target.value)
     dispatch(getData({filter: '', status}))
    } else {
      setSearch(e.target.value)
    }
  }

  return (
    <div className="text-xs p-5 md:p-9">
      {loading ? <div><Loading /></div> : 
        <Table 
          columns={columns}
          data={datas}
          searchValue={search}
          handleSearch={onChangeSearch}
          statusDropdown={statusDropdown}
          placeholder={"Pencarian Email/No.HP"}
          handleClick={handleClick}
          type="pasbandara"
        />
  }
    </div>
  );
};

export default PasBandara;
