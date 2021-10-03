import React, { createContext, ReactNode } from "react";


export interface TableContextInterface {
  rowValues: Record<string, string | number | boolean | undefined>;
}

export const TableRowContext = createContext<TableContextInterface>({ rowValues: {} });

function TableContext(
  { rowValues, children }: TableContextInterface & { children: ReactNode }
): JSX.Element {

  return (
    <TableRowContext.Provider value={{ rowValues }}>
      { children }
    </TableRowContext.Provider>
  );
}


export default TableContext;
