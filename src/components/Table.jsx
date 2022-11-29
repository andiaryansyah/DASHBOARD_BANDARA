import React, { useCallback } from "react";
import DataTable, { defaultThemes } from "react-data-table-component";

const Table = ({columns, data, searchValue, handleSearch, addComponent}) => {
  

  // unlike class methods updateState will be re-created on each render pass, therefore, make sure that callbacks passed to onSelectedRowsChange are memoized using useCallback
  const updateState = useCallback((state) => console.log(state), []);

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
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5,10, 20, 30, 50]}
        onSelectedRowsChange={updateState}
        customStyles={customStyles}
        highlightOnHover
        // actions={<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Export</button>}
        subHeader
        subHeaderComponent={
          <div className="flex items-center justify-between w-full">
            <div>
              <label className="mr-1">
                Search : 
              </label>
              <input 
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                placeholder="Search Email"
                value={searchValue}
                onChange={handleSearch}
                />
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
