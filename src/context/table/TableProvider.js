import React, { useState } from 'react';
import TableContext from './tableContext';
import useCreateAndDeleteTable from '../../hooks/useCreateAndDeleteTable';

const TableProvider = ({ children }) => {
  const [createTable, getCurrentTable, tables, entryTableId, setEntryTableId] = useCreateAndDeleteTable();

  const [amount, setAmount] = useState(1000);

  return (
    <TableContext.Provider
      value={{ createTable, getCurrentTable, tables, entryTableId, setEntryTableId, amount, setAmount }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
