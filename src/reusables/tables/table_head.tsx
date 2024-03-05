import React from "react";
import FilterIcon from "../../assets/icons/filter-results-button.svg";
import { TableProps } from "../../dashboard/utilitites/types";

const TableHeader: React.FC<TableProps> = ({ tableHeadData }) => {
  return (
    <div>
      {/* table head start */}
      <div className="table-head-wrap">
        {tableHeadData?.map((column, idx) => (
          <div key={idx} className="table-head-box">
            <span className="table-name">{column}</span>
            <img src={FilterIcon} alt="filter_icon" />
          </div>
        ))}
      </div>
      {/* table head end */}
    </div>
  );
};

export default TableHeader;
