/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from 'react';

import styles from './table-cell.module.scss';


interface ITableCell {
  getValue: any;
  row: any;
  column: any;
  table: any;
}

const TableCell: FC<ITableCell> = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // edition
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  // validation
  const columnMeta = column.columnDef.meta;

  return editing ? (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      type={column.columnDef.meta?.type || 'text'}
      required={columnMeta?.required}
      pattern={columnMeta?.pattern}
      className={styles.tableCell}
    />
  ) : (
    <span onClick={handleDoubleClick}>{value}</span>
  );
};

export default TableCell;
