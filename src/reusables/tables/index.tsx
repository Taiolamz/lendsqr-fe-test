import React from "react";
import "../../styles/reusables/table.css";
import TableHeader from "./table_head";
import { TableProps } from "../../dashboard/utilitites/types";

const TableContainer = ({ tableHeadData, children }: TableProps) => {
  return (
    <div className="dashboard-table-wrap">
      <TableHeader tableHeadData={tableHeadData} />
      {children}

      {/* pagination start */}
      {/* pagination end */}
    </div>
  );
};

export default TableContainer;
