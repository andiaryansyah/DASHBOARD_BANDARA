import React, { useCallback } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";

const Table = ({columns, data, searchValue, handleSearch}) => {
  

  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onSelectedRowsChange are memoized using useCallback
  const updateState = useCallback((state) => console.log(state), []);

  // const columns = useMemo(
  //   () => [
  //     {
  //       name: "No",
  //       selector: (row) => row.no,
  //       sortable: true,
  //       maxWidth: "100px",
  //     },
  //     {
  //       name: "Email",
  //       selector: (row) => row.email,
  //       sortable: true,
  //       maxWidth: "250px",
  //     },
  //     {
  //       name: "Surat Permohonan",
  //       selector: (row) => row.sp,
  //       sortable: true,
  //       maxWidth: "150px",
        
  //     },
  //     {
  //       name: "Pas Foto",
  //       selector: (row) => row.foto,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "Surat Pernyataan dari atasan",
  //       selector: (row) => row.sp_atasan,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "Riwayat Hidup",
  //       selector: (row) => row.riwayat_hidup,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "Identitas",
  //       selector: (row) => row.identitas,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "SKCK",
  //       selector: (row) => row.skck,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "SK Pegawai Kontrak",
  //       selector: (row) => row.sk_kontrak,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "Surat Bebas Narkoba",
  //       selector: (row) => row.bebas_narkoba,
  //       sortable: true,
  //       maxWidth: "150px",
  //     },
  //     {
  //       name: "Action",
  //       cell: () => (
  //         <button raised primary onClick={handleAction}>
  //           Detail
  //         </button>
  //       ),
  //       ignoreRowClick: true,
  //       allowOverflow: true,
  //       button: true,
  //     },
  //   ],
  //   []
  // );

  // const data = useMemo(
  //   () => [
  //     {
  //       no: "1",
  //       email: "example@gmail.com",
  //       sp: "✅",
  //       foto: "✅",
  //       sp_atasan: "✅",
  //       riwayat_hidup: "✅",
  //       identitas: "✅",
  //       skck: "❌",
  //       sk_kontrak: "✅",
  //       bebas_narkoba: "✅",
  //       // action:Detail
  //     },
  //     {
  //       no: "2",
  //       email: "example@gmail.com",
  //       sp: "✅",
  //       foto: "✅",
  //       sp_atasan: "✅",
  //       riwayat_hidup: "✅",
  //       identitas: "✅",
  //       skck: "❌",
  //       sk_kontrak: "✅",
  //       bebas_narkoba: "✅",
  //       // action:Detail
  //     },
  //     {
  //       no: "3",
  //       email: "example@gmail.com",
  //       sp: "✅",
  //       foto: "✅",
  //       sp_atasan: "✅",
  //       riwayat_hidup: "✅",
  //       identitas: "✅",
  //       skck: "✅",
  //       sk_kontrak: "✅",
  //       bebas_narkoba: "✅",
  //       // action:Detail
  //     },
  //     {
  //       no: "4",
  //       email: "example@gmail.com",
  //       sp: "✅",
  //       foto: "✅",
  //       sp_atasan: "✅",
  //       riwayat_hidup: "✅",
  //       identitas: "✅",
  //       skck: "✅",
  //       sk_kontrak: "✅",
  //       bebas_narkoba: "❌",
  //       // action:Detail
  //     },
  //     {
  //       no: "5",
  //       email: "example@gmail.com",
  //       sp: "✅",
  //       foto: "✅",
  //       sp_atasan: "✅",
  //       riwayat_hidup: "✅",
  //       identitas: "✅",
  //       skck: "❌",
  //       sk_kontrak: "✅",
  //       bebas_narkoba: "✅",
  //       // action:Detail
  //     },
  //   ],
  //   []
  // );

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  return (
    <div className="text-center">
      <DataTable
        
        columns={columns}
        data={data}
        pagination
        onSelectedRowsChange={updateState}
        customStyles={customStyles}
        highlightOnHover
        // actions={<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export</button>}
        subHeader
        subHeaderComponent={
          <>
          <label className="mr-2">
            Search : 
          </label>
          <input 
            className="shadow appearance-none border rounded w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Search Email"
            value={searchValue}
            onChange={handleSearch}
            />
          </>
        }
        subHeaderAlign="left"
        fixedHeader
      />
    </div>
  );
};

export default Table;
