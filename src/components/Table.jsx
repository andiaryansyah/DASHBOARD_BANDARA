import React from "react";
import DataTable, { defaultThemes } from "react-data-table-component";
import {BiSearchAlt} from 'react-icons/bi';

const Table = ({columns, data, searchValue, handleSearch, handleClick, placeholder, addComponent, statusDropdown, type}) => {

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
            <div className="mb-3 md:mb-0 flex items-center">
              <label className="mr-1">
                Pencarian : 
              </label>
              <input 
                className=" appearance-none border rounded-l-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                placeholder={placeholder}
                value={searchValue}
                onChange={handleSearch}
                />
                {type === 'pasbandara' && (
                <button className="p-2 bg-blue-600 text-gray-50 rounded-r-lg border-t border-blue-600 hover:border-blue-800 hover:bg-blue-800" onClick={handleClick}><BiSearchAlt size={15} className="text-center"/></button>
                )}
            </div>
            <div className="md:absolute left-64 z-10">
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
