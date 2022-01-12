import React from "react";
import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

const SelfTaskTable = () =>{


    const [filterInput, setFilterInput] = useState("");
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setFilter
    } = useTable(
      {
        columns,
        data
      },
      useFilters,
      useSortBy
    );
  
    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("show.name", value);
      setFilterInput(value);
    };



    return(
        <>
            <div className="self__task">
                <h2>Search Self Task</h2>
                <div className="search">
                     <form>
                         <div className="title">
                              <p>Search Self Task</p>
                         </div>
                         <div className="input-field">
                              <input type="text" placeholder="Enter Reference Number"  />
                              <button className="search-btn st-bg-btn">Search</button>
                         </div>
                     </form>
                 </div>
            </div>
            <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

        </>
    )
}


export default SelfTaskTable;