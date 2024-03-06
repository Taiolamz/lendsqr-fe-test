import React from "react";
import { Status, TableProps } from "../../dashboard/utilitites/types";
import EllipsisIcon from "../../assets/icons/ellipsis.svg";
import ActionDrop from "./action_drop";
import { useOnClickOutside } from "../../dashboard/utilitites/helpers";

const TableBody = ({ one, two, three, four, five, status }: TableProps) => {
  const { ref, visibilityStates, anyVisible, toggleVisibility } =
    useOnClickOutside({
      action_drop: false,
    });

  const getStatusClassName = (status: Status) => {
    switch (status) {
      case "pending":
        return "pending-status-text";
      case "blacklisted":
        return "blacklisted-text";
      case "active":
        return "active-text";
      default:
        return "inactive-status-text";
    }
  };
  return (
    <div className="table-body-wrap">
      {/* table body box start */}
      <div className={`table-row`}>
        <p>{one}</p>
        <p>{two}</p>
        <p className="email-text">{three}</p>
        <p>{four}</p>
        <p>{five}</p>
        <div className="status-wrap">
          <p
            className={`inactive-status-text ${getStatusClassName(
              status as Status
            )}`}
          >
            {status}
          </p>
        </div>
        <img
          onClick={() => toggleVisibility("action_drop")}
          className="ellipsis-icon"
          src={EllipsisIcon}
          alt="ellipsis_icon"
        />

        {/* action dropdown wrap start */}
        <ActionDrop actionRef={ref} isVisible={visibilityStates.action_drop} />
        {/* action dropdown wrap end */}
      </div>
      {/* table body box end */}
    </div>
  );
};

export default TableBody;
