import React, { useState } from "react";
import Select from "react-select";
import { reactSelectStyle } from "../../dashboard/utilitites/helpers";
import Button from "../button";
import "flatpickr/dist/themes/airbnb.css";
import moment from "moment";
import {
  orgOptions,
  statusOptions,
} from "../../dashboard/utilitites/dashboard_items";
import CalenderIcon from "../../assets/icons/np_calendar_2080577_000000 1.svg";
import DatePicker from "react-flatpickr";

interface FilterType {
  organization: string;
  username: string;
  email: string;
  date: string;
  "phone number": string;
  status: string;
}

interface TableFilterDropProp {
  isVisible: boolean;
  filterRef?: React.RefObject<HTMLDivElement>;
}

const TableFilterDrop = ({ isVisible, filterRef }: TableFilterDropProp) => {
  const [filterDetails, setFilterDetails] = useState<FilterType>({
    organization: "",
    username: "",
    email: "",
    date: "",
    "phone number": "",
    status: "",
  });

  const handleChange = (key: string, value: string) => {
    setFilterDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const handleOptions = (key: string) => {
    switch (key) {
      case "organization":
        return orgOptions;
      case "status":
        return statusOptions;
      default:
        return [];
    }
  };

  const activateBtn = () => {
    for (const key in filterDetails) {
      if (
        Object.prototype.hasOwnProperty.call(filterDetails, key) &&
        filterDetails[key as keyof FilterType]
      ) {
        return true;
      }
    }
    return false;
  };

  const resetFilters = () => {
    const resetDetails: any = {};
    for (const key in filterDetails) {
      if (Object.prototype.hasOwnProperty.call(filterDetails, key)) {
        resetDetails[key] = "";
      }
    }
    setFilterDetails(resetDetails);
  };

  const handleSubmit = () => {
    const obj = {
      ...filterDetails,
      phone_number: filterDetails["phone number"],
    };
    console.log(obj);
  };
  return (
    <div
      // ref={filterRef}
      className={`table-drop-wrap ${isVisible ? "show-table-drop-wrap" : ""}`}
      // style={{ zIndex: "999" }}
    >
      {/* filter wrap start */}
      {Object.entries(filterDetails).map(([key, value]) => (
        <div className="table-drop-box" key={key}>
          <label htmlFor={key}>{key}</label>
          {key === "date" ? (
            <div className="date-wrap">
              <DatePicker
                id={key}
                name={key}
                className="filter-input date-input"
                autoComplete="off"
                value={value}
                onClick={(e) => e.stopPropagation()}
                onChange={(value, _, __, e) => {
                  setFilterDetails((prev) => {
                    return {
                      ...prev,
                      date: moment(value[0]).format("YYYY-MM-DD"),
                    };
                  });
                }}
                placeholder="YYYY-MM-DD"
              />
              <img
                className="calender-icon"
                src={CalenderIcon}
                alt="calender_icon"
              />
            </div>
          ) : (
            <React.Fragment>
              {key === "organization" || key === "status" ? (
                <Select
                  value={value}
                  onChange={(selectedOption) =>
                    handleChange(key, selectedOption)
                  }
                  options={handleOptions(key)}
                  className="drop-select-wrap"
                  styles={reactSelectStyle({
                    bgColor: "#fffff",
                    border: "1px solid rgba(33, 63, 125, 0.2)",
                    borderRadius: ".8rem",
                  })}
                />
              ) : (
                <input
                  type={"text"}
                  id={key}
                  name={key}
                  className="filter-input"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={key}
                />
              )}
            </React.Fragment>
          )}
        </div>
      ))}

      {/* filter wrap end */}
      <div className="drop-btn-wrap">
        <Button
          className={`reset-btn ${activateBtn() ? "reset-active-btn" : ""}`}
          label="Reset"
          type="reset"
          active={activateBtn()}
          onClick={resetFilters}
        />
        <Button
          className="filter-btn"
          label="Filter"
          type="submit"
          active={activateBtn()}
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default TableFilterDrop;
