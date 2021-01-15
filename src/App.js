import React from "react";
import { useTable, useSortBy } from "react-table";
import "./App.css";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "TEAM",
        accessor: "team", // accessor is the "key" in the data
      },
      {
        Header: "GROUP",
        accessor: "group",
      },
      {
        Header: "SPI",
        accessor: "spi",
      },
      {
        Header: "OFF.",
        accessor: "off",
      },
      {
        Header: "DEF.",
        accessor: "def",
      },
      {
        Header: "MAKE ROUND OF 16",
        accessor: "ro16",
      },
      {
        Header: "MAKE QTR-FINALS",
        accessor: "qf",
      },
      {
        Header: "MAKE SEMIFINALS",
        accessor: "sf",
      },
      {
        Header: "WIN WORLD CUP",
        accessor: "win",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        team: "Argentina",
        group: "D",
        spi: 98.3,
        off: 1.5,
        def: 1.9,
        ro16: "Yes",
        qf: "78.4%",
        sf: "42.1%",
        win: "19.4%",
      },
      {
        team: "Argentina",
        group: "D",
        spi: 98.3,
        off: 1.5,
        def: 1.9,
        ro16: "Yes",
        qf: "78.4%",
        sf: "42.1%",
        win: "19.4%",
      },
      {
        team: "Argentina",
        group: "D",
        spi: 98.3,
        off: 1.5,
        def: 1.9,
        ro16: "Yes",
        qf: "78.4%",
        sf: "42.1%",
        win: "19.4%",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  function getRowClassName(cell) {
    if (cell.column.Header === "TEAM") return "team-name";
    else if (cell.column.Header === "SPI") return "spi-rating";
    else return "number";
  }

  return (
    <table className="standings-table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="cell" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={`p-5 ${getRowClassName(cell)} cell`}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
