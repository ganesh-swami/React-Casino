import React, { useContext, useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

// import tableContext from "../../context/table/tableContext";
// import { getCurrentTable } from "../../hooks/useCreateAndDeleteTable";

import reload_icon from "../../assets/icons/reload.png";
import globalContext from "../../context/global/globalContext";
import gameContext from "../../context/game/gameContext";

function Table({ cols, type, history }) {
  const { tables, tournaments } = useContext(globalContext);
  const { joinTable } = useContext(gameContext);
  // const { setEntryTableId } = useContext(tableContext);
  // const [tables, setTables] = useState([]);

  // const getTables = async () => {
  //   const tables = await getCurrentTable();
  //   setTables(tables);
  //   console.log(tables);
  // };

  // useEffect(() => {
  //   // setTables(currentTable);
  //   getTables();
  // }, []);

  return (
    <table
      className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
      style={{
        minHeight: "calc(100vh - 180px)",
        overflowX: "scroll",
        width: "100%",
      }}
    >
      <thead className="text-xs text-gray-700 uppercase lobby-thead justify-between">
        <tr className="flex flex-col md:flex-row justify-center">
          {cols.map((col) => (
            <th
              key={col}
              scope="col"
              className="px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg table-th"
            >
              {col}
            </th>
          ))}
          {/* <th>
            <button
              onClick={() => {
                getTables();
              }}
              className="mt-2"
            >
              <img src={reload_icon} style={{ width: "15px" }} />
            </button>
          </th> */}
        </tr>
      </thead>
      <tbody className="lobby-tbody" style={{ overflowY: "scroll" }}>
        {type=="cash"?
          tables &&
            tables.map((table) => {
              return (
                <tr className="flex flex-col mb-4 md:flex-row justify-center w-full">
                  {/* <td
                    scope="row"
                    className="px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg"
                  >
                    May 1 15:00
                  </td> */}
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    {table.name}
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    &
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    T {table.bigBlind?table.bigBlind:"-"}/{table.smallBlind?table.smallBlind:"-"}
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    {table.currentPlayers}
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    {table.maxPlayers}
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    {table.limit}
                  </td>
                  <td className="w-24 px-4 py-3 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg">
                    <button
                      className="td-register"
                      onClick={() => {
                        joinTable(table.id);
                        history.push("/play");
                      }}
                    >
                      LET'S PLAY
                    </button>
                  </td>
                </tr>
              );
            })
        :
        type=="tournaments"?
        "":""}
      </tbody>
    </table>
  );
}

export default withRouter(Table);
