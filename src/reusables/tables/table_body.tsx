import React from "react";
import { Status, TableProps } from "../../dashboard/utilitites/types";
import EllipsisIcon from "../../assets/icons/ellipsis.svg";

const TableBody = ({ one, two, three, four, five, status }: TableProps) => {
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
        <img className="ellipsis-icon" src={EllipsisIcon} alt="ellipsis_icon" />
      </div>
      {/* table body box end */}
    </div>
  );
};

export default TableBody;
