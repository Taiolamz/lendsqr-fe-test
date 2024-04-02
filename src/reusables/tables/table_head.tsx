import React, { useContext } from "react";
import FilterIcon from "../../assets/icons/filter-results-button.svg";
import { TableProps } from "../../dashboard/utilitites/types";
import TableFilterDrop from "./filter_drop";
import { ActionContext } from "../../context/action-context";

const TableHeader: React.FC<TableProps> = ({ tableHeadData }) => {
  const actionCtx = useContext(ActionContext);

  return (
    <div>
      {/* table head start */}
      <div className="table-head-wrap">
        {tableHeadData?.map((chi, idx) => (
          <div key={idx} className="table-head-box">
            <div
              className="table-head-group"
              onClick={() => actionCtx.setIsFilterDrop(!actionCtx.isFilterDrop)}
            >
              <p className="table-name">{chi}</p>
              <img src={FilterIcon} alt="filter_icon" />
            </div>
          </div>
        ))}

        {/* filter dropdown start */}
        <TableFilterDrop isVisible={actionCtx.isFilterDrop} />
        {/* filter dropdown end */}
      </div>
      {/* table head end */}
    </div>
  );
};

export default TableHeader;
