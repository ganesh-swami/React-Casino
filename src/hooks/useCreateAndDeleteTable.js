import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import config from "../clientConfig";

const useCreateAndDeleteTable = () => {
  const [tables, setTables] = useState([]);
  const [entryTableId, setEntryTableId] = useState(null);
  const createTable = async (seatNumber) => {
    try {
      console.log("seatNumber", seatNumber);
      const res = await Axios.post(
        "http://" + config.serverURI + "/api/currentTables",
        {
          seatNumber,
        }
      );
      setEntryTableId(res.data.currentTable.tableNumber);
      console.log("currentTable", res.data.currentTable.tableNumber);
      console.log("entryTableId---------------------", entryTableId);
    } catch (error) {
      alert(error);
    }
  };

  const getCurrentTable = async () => {
    try {
      // console.log("wewewe")
      const res = await Axios.get(
        "http://" + config.serverURI + "/api/currentTables"
      );
      // console.log("currentTables", res.data.currentTable)
      const { currentTable } = res.data;
      console.log("currentTable -----------", currentTable);
      // if(currentTable){
      //   currentTable.
      // }
      setTables(currentTable);
      console.log("tables", tables);
    } catch (error) {}
  };
  return [createTable, getCurrentTable, tables, entryTableId, setEntryTableId];
};

export const getCurrentTable = async () => {
  try {
    // console.log("wewewe")
    const res = await Axios.get(
      "http://" + config.serverURI + "/api/currentTables"
    );
    // console.log("currentTables", res.data.currentTable)
    const { currentTable } = res.data;
    return currentTable;
  } catch (error) {}
};

export default useCreateAndDeleteTable;
