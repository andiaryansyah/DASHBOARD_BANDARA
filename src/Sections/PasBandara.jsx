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
        name: "No",
        selector: (row) => <div className="text-center">{row.no}</div>,
        sortable: true,
        width: "70px",
      },
      {
        name: "Email",
        selector: (row) => <div className="text-center">{row.email}</div>,
        sortable: true,
        width: "200px",
      },
      {
        name: "Surat Permohonan",
        selector: (row) => row.surat_permohonan,
        sortable: true,
        width: "100px",
        
      },
      {
        name: "Pas Foto",
        selector: (row) => row.foto,
        sortable: true,
        width: "100px",
      },
      {
        name: "Surat Pernyataan dari atasan",
        selector: (row) => row.pernyataan_atasan,
        sortable: true,
        width: "100px",
      },
      {
        name: "Riwayat Hidup",
        selector: (row) => row.riwayat_hidup,
        sortable: true,
        width: "100px",
      },
      {
        name: "Identitas",
        selector: (row) => row.identitas,
        sortable: true,
        width: "100px",
      },
      {
        name: "SKCK",
        selector: (row) => row.skck,
        sortable: true,
        width: "90px",
      },
      {
        name: "SK Pegawai Kontrak",
        selector: (row) => row.sk_pegawai,
        sortable: true,
        width: "100px",
      },
      {
        name: "Surat Bebas Narkoba",
        selector: (row) => row.bebas_narkoba,
        sortable: true,
        width: "100px",
      },
      {
        name: "Action",
        cell: (row) => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => alert(row.id)}>
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
    <div className="w-full h-full">
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
