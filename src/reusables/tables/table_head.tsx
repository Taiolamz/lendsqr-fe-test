import React, { useContext } from "react";
import FilterIcon from "../../assets/icons/filter-results-button.svg";
import { TableProps } from "../../dashboard/utilitites/types";
import TableFilterDrop from "./filter_drop";
import { useOnClickOutside } from "../../dashboard/utilitites/helpers";
import { ActionContext } from "../../context/action-context";

const TableHeader: React.FC<TableProps> = ({ tableHeadData }) => {
  const actionCtx = useContext(ActionContext);
  const { ref, visibilityStates, toggleVisibility } = useOnClickOutside({
    // mobile_view
    filter_drop: false,
  });
  const isMobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return (
    <div>
      {/* table head start */}
      <div className="table-head-wrap" ref={ isMobileScreen ? ref : null}>
        {tableHeadData?.map((chi, idx) => (
          <div key={idx} className="table-head-box">
            <div
              className="table-head-group"
              onClick={() => toggleVisibility("filter_drop")}
              ref={ref}
            >
              <p className="table-name">{chi}</p>
              <img src={FilterIcon} alt="filter_icon" />
            </div>
          </div>
        ))}

        {/* filter dropdown start */}
        <TableFilterDrop
          // filterRef={ref}
          isVisible={
            isMobileScreen
              ? actionCtx.isFilterDrop
              : visibilityStates.filter_drop
          }
        />
        {/* filter dropdown end */}
      </div>
      {/* table head end */}
    </div>
  );
};

export default TableHeader;
