import React, { useEffect ,useMemo, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import Table from "../components/Table";
import { getData } from "../store/actions/pasbandaraAction";

const PasBandara = () => {
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.pasbandara);

  const columns = useMemo(
    () => [
      {
        name: <div className="text-xxs m-auto">No</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.no}</div>,
        selector: (row) => <div>{row.no}</div>,
        sortable: true,
        width: "47px",

      },
      {
        name: <div className="text-xxs m-auto">Email</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.email}</div>,
        selector: (row) => <div>{row.email}</div>,
        sortable: true,
      },
      {
        name:<div className="text-xxs m-auto">Surat Permohonan</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.surat_permohonan}</div>,
        selector: (row) => row.surat_permohonan,
        sortable: true,
        width: "93px",
        
      },
      {
        name: <div className="text-xxs m-auto">Pas Foto</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.foto}</div>,
        selector: (row) => row.foto,
        sortable: true,
        width: "57px",
      },
      {
        name: <div className="text-xxs m-auto">Surat Pernyataan dari atasan</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.pernyataan_atasan}</div>,
        selector: (row) => row.pernyataan_atasan,
        sortable: true,
        width: "88px",
      },
      {
        name: <div className="text-xxs m-auto">Riwayat Hidup</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.riwayat_hidup}</div>,
        selector: (row) => row.riwayat_hidup,
        sortable: true,
        width: "70px",
      },
      {
        name: <div className="text-xxs m-auto">Identitas</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.identitas}</div>,
        selector: (row) => row.identitas,
        sortable: true,
        width: "78px",
      },
      {
        name: <div className="text-xxs m-auto">SKCK</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.skck}</div>,
        selector: (row) => row.skck,
        sortable: true,
        width: "60px",
      },
      {
        name: <div className="text-xxs m-auto">SK Pegawai Kontrak</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.sk_pegawai}</div>,
        selector: (row) => row.sk_pegawai,
        sortable: true,
        width: "77px",
      },
      {
        name: <div className="text-xxs m-auto">Surat Bebas Narkoba</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.bebas_narkoba}</div>,
        selector: (row) => row.bebas_narkoba,
        sortable: true,
        width: "77px",
      },
      {
        name: <div className="text-xxs m-auto">Status</div>,
        cell:(row) => <div className="text-xxs m-auto">{row.status}</div>,
        selector: (row) => row.status,
        width: "92px",
      },
      {
        name: <div className="text-xxs m-auto">Action</div>,
        cell: (row) => (
          <Modal email={row.email}/>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        width: "70px",
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
        status: `${data.status === true ? "Terverifikasi" : "Belum Terverifikasi"}`,
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
    <div className="w-full h-full text-xs p-10">
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
