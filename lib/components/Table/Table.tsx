import React, { Children, isValidElement } from "react";

//interfaces
import { TableProps } from "../../types/ComponentsProps";

//context
import TableContext from "./TableContext.context";

//helpers
import { classNames } from "../../helpers/classNames";

//styles
import styles from "../../assets/scss/components/Table.module.scss";


function Table({ children, dataSource, fullWidth }: TableProps): JSX.Element {

  const tableClassNames = classNames(
    styles["renoshop-table"],
    {
        [styles["renoshop-table_full-width"]]: fullWidth,
    }
  );

  return (
    <table className={tableClassNames}>
      <thead className={styles["renoshop-table__header"]}>
        <tr className={styles["renoshop-table__header-row"]}>
          {
            Children.map((children), child => {
              if (!isValidElement(child)) return;

              return (
                <th className={styles["renoshop-table__header-cell"]} style={{ width: child.props.width }}>
                  { child.props.title }
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          dataSource.map(row => (
            <TableContext rowValues={row}>
              <tr className={styles["renoshop-table__body-row"]}>
                { children }
              </tr>
            </TableContext>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
