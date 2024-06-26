import React from "react";
import { Status, TableProps } from "../../dashboard/utilitites/types";
import EllipsisIcon from "../../assets/icons/ellipsis.svg";
import ActionDrop from "./action_drop";
import { useOnClickOutside } from "../../dashboard/utilitites/helpers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableBody = ({
  one,
  two,
  three,
  four,
  five,
  status,
  loading,
  onRoute,
  header_one,
  header_two,
  header_three,
  header_four,
  header_five,
  header_six,
}: TableProps) => {
  const { ref, visibilityStates, toggleVisibility } = useOnClickOutside({
    action_drop: false,
    // mobile_view
    filter_drop: false,
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
    <>
      <div className="table-body-wrap" ref={ref}>
        {/* table body box start */}
        <div className={`table-row`}>
          <p>{loading ? <Skeleton width={100} height={`30%`} /> : one}</p>

          <p>{loading ? <Skeleton width={100} height={`30%`} /> : two}</p>

          <p className="email-text">
            {loading ? <Skeleton width={100} height={`30%`} /> : three}
          </p>

          <p>{loading ? <Skeleton width={100} height={`30%`} /> : four}</p>

          <p className="date-text">
            {loading ? <Skeleton width={100} height={`30%`} /> : five}
          </p>

          <div className="status-wrap">
            {loading ? (
              <Skeleton width={100} height={`80%`} />
            ) : (
              <p
                className={`inactive-status-text ${getStatusClassName(
                  status as Status
                )}`}
              >
                {status}
              </p>
            )}
          </div>

          {/* toggle the action dropdown */}
          <img
            onClick={() => toggleVisibility("action_drop")}
            className="ellipsis-icon"
            src={EllipsisIcon}
            alt="ellipsis_icon"
            ref={ref}
          />

          {/* action dropdown wrap start */}
          <ActionDrop
            onRoute={onRoute}
            actionRef={ref}
            isVisible={visibilityStates.action_drop}
          />
          {/* action dropdown wrap end */}
        </div>
        {/* table body box end */}
      </div>
    </>
  );
};

export default TableBody;
