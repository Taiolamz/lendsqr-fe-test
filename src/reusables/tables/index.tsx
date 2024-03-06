import "../../styles/reusables/table.css";
import TableHeader from "./table_head";
import { TableProps } from "../../dashboard/utilitites/types";
import Select from "react-select";
import { ArrowLeft, ArrowRight } from "../../assets/icons/svg";
import { useState } from "react";
import { reactSelectStyle } from "../../dashboard/utilitites/helpers";

const TableContainer = ({
  tableHeadData,
  children,
  activePage,
}: TableProps) => {
  const [perPage, setPerPage] = useState({ label: 100, value: 100 });
  const pageOptions = [
    {
      label: 10,
      value: 10,
    },
    {
      label: 30,
      value: 30,
    },
    {
      label: 50,
      value: 50,
    },
    {
      label: 100,
      value: 100,
    },
  ];
  return (
    <>
      <div className="dashboard-table-wrap">
        <TableHeader tableHeadData={tableHeadData} />
        {children}
      </div>
      {/* pagination start */}
      <div className="pagination-wrap">
        {/* left wrap start */}
        <div className="paginate-left-wrap">
          <p>Showing</p>
          <div className="select-wrap">
            <Select
              value={perPage}
              options={pageOptions}
              styles={reactSelectStyle({
                bgColor: "rgba(33, 63, 125, 0.1)",
                border: "none",
                borderRadius: ".4rem",
              })}
              className="select-input"
              onChange={(e: any) => setPerPage(e)}
            />
          </div>
          <p>out of 100</p>
        </div>
        {/* left wrap end */}

        {/* right wrap start */}
        <div className="paginate-right-wrap">
          <div className="arrow-wrap">
            <ArrowLeft className="arrow-icon" />
          </div>
          <div className="num-wrap">
            <p className={activePage ? "active-text" : ""}>1</p>
            <p className={activePage ? "active-text" : ""}>2</p>
            <p className={activePage ? "active-text" : ""}>3</p>
            <p className="ellipePagee-text">...</p>
            <p className={activePage ? "active-text" : ""}>15</p>
          </div>
          <div className="arrow-wrap">
            <ArrowRight className="arrow-right-icon" />
          </div>
        </div>
        {/* right wrap end */}
      </div>
      {/* pagination end */}
    </>
  );
};

export default TableContainer;
