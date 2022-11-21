import React, { useEffect ,useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import { getData } from "../store/actions/pasbandaraAction";

const PasBandara = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.pasbandara);

  const columns = useMemo(
    () => [
      {
        name: <div className="text-xxs">No</div>,
        cell:(row) => <div className="text-xxs">{row.no}</div>,
        selector: (row) => <div>{row.no}</div>,
        sortable: true,
        width: "47px",

      },
      {
        name: <div className="text-xxs">Email</div>,
        cell:(row) => <div className="text-xxs">{row.email}</div>,
        selector: (row) => <div>{row.email}</div>,
        sortable: true,
        width: "170px",
      },
      {
        name:<div className="text-xxs">Surat Permohonan</div>,
        cell:(row) => <div className="text-xxs">{row.surat_permohonan}</div>,
        selector: (row) => row.surat_permohonan,
        sortable: true,
        width: "95px",
        
      },
      {
        name: <div className="text-xxs">Pas Foto</div>,
        cell:(row) => <div className="text-xxs">{row.foto}</div>,
        selector: (row) => row.foto,
        sortable: true,
        width: "60px",
      },
      {
        name: <div className="text-xxs">Surat Pernyataan dari atasan</div>,
        cell:(row) => <div className="text-xxs">{row.pernyataan_atasan}</div>,
        selector: (row) => row.pernyataan_atasan,
        sortable: true,
        width: "90px",
      },
      {
        name: <div className="text-xxs">Riwayat Hidup</div>,
        cell:(row) => <div className="text-xxs">{row.riwayat_hidup}</div>,
        selector: (row) => row.riwayat_hidup,
        sortable: true,
        width: "70px",
      },
      {
        name: <div className="text-xxs">Identitas</div>,
        cell:(row) => <div className="text-xxs">{row.identitas}</div>,
        selector: (row) => row.identitas,
        sortable: true,
        width: "80px",
      },
      {
        name: <div className="text-xxs">SKCK</div>,
        cell:(row) => <div className="text-xxs">{row.skck}</div>,
        selector: (row) => row.skck,
        sortable: true,
        width: "60px",
      },
      {
        name: <div className="text-xxs">SK Pegawai Kontrak</div>,
        cell:(row) => <div className="text-xxs">{row.sk_pegawai}</div>,
        selector: (row) => row.sk_pegawai,
        sortable: true,
        width: "80px",
      },
      {
        name: <div className="text-xxs">Surat Bebas Narkoba</div>,
        cell:(row) => <div className="text-xxs">{row.bebas_narkoba}</div>,
        selector: (row) => row.bebas_narkoba,
        sortable: true,
        width: "80px",
      },
      {
        name: <div className="text-xxs">Action</div>,
        cell: (row) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xxs font-bold py-2 px-4 rounded" onClick={() => alert(row.id)}>
            Detail
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        
      },
    ],
    []
  );

  const datas = data.map((data, index) => 
    (
      {
        no:index + 1,
        email: data.email,
        surat_permohonan: `${data.surat_permohonan ? "✅" : "❌"}`,
        foto: `${data.foto ? "✅" : "❌"}`,
        pernyataan_atasan: `${data.pernyataan_atasan ? "✅" : "❌"}`,
        riwayat_hidup: `${data.riwayat_hidup ? "✅" : "❌"}`,
        identitas: `${data.identitas ? "✅" : "❌"}`,
        skck:`${data.skck ? "✅" : "❌"}`,
        sk_pegawai: `${data.sk_pegawai ? "✅" : "❌"}`,
        bebas_narkoba: `${data.bebas_narkoba ? "✅" : "❌"}`,
      }
    )
  )

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(datas);

  useEffect(() => {
   dispatch(getData())
   // eslint-disable-next-line
  }, [])
  
  useEffect(() => {
    const result = datas.filter(newData => {
      return newData.email.toLowerCase().match(search.toLowerCase());
    })
    setFilteredData(result)
// eslint-disable-next-line
  }, [data, search])

  return (
    <div className="w-full h-full text-xs">
        <Table 
          columns={columns}
          data={filteredData}
          searchValue={search}
          handleSearch={(e) => setSearch(e.target.value)}
        />
    </div>
  );
};

export default PasBandara;
