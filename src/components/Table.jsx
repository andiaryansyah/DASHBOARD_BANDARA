import React from "react";
import DataTable, { defaultThemes } from "react-data-table-component";

const Table = ({columns, data, searchValue, handleSearch, placeholder, addComponent, statusDropdown}) => {

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
        className="overscroll-x-auto"
        columns={columns}
        data={data}
        pagination
        paginationPerPage={7}
        paginationRowsPerPageOptions={[5,7,10, 20, 30, 50]}
        customStyles={customStyles}
        highlightOnHover
        // actions={<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export</button>}
        subHeader
        subHeaderComponent={
          <div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between py-2 md:py-3 w-full">
            <div className="mb-3 md:mb-0">
              <label className="mr-1">
                Pencarian : 
              </label>
              <input 
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                placeholder={placeholder}
                value={searchValue}
                onChange={handleSearch}
                />
            </div>
            <div className="md:absolute left-56 z-10">
              {statusDropdown}
            </div>
            <div>
              {addComponent}
            </div>
          </div>
        }
        subHeaderAlign="left"
        fixedHeader
      />
    </div>
  );
};

export default Table;
