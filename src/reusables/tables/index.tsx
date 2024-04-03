import "../../styles/reusables/table.css";
import TableHeader from "./table_head";
import { PageOptions, TableProps } from "../../dashboard/utilitites/types";
import Select from "react-select";
import { reactSelectStyle } from "../../dashboard/utilitites/helpers";
import ReactPaginate from "react-paginate";

const TableContainer = ({
  tableHeadData,
  children,
  perPage,
  setPerPage,
  totalLengthArray,
  handleClick,
  pageCount,
}: TableProps) => {
  const pageOptions: PageOptions[] = [
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
      {/* <div className="dashboard-table-container"> */}
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
                options={pageOptions as any}
                styles={reactSelectStyle({
                  bgColor: "rgba(33, 63, 125, 0.1)",
                  border: "none",
                  borderRadius: ".4rem",
                })}
                className="select-input"
                onChange={(e: any) => setPerPage && setPerPage(e)}
              />
            </div>
            <p>{`out of ${totalLengthArray}`}</p>
          </div>
          {/* left wrap end */}

          {/* pagination wrap */}
          <div className="paginate-wrap">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handleClick && handleClick}
              pageRangeDisplayed={3}
              pageCount={pageCount ? pageCount : 0}
              previousLabel="<"
              marginPagesDisplayed={0}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num-next"
              activeClassName="active"
              nextClassName="next-btn"
              previousClassName="prev-btn"
            />
          </div>
        </div>
      {/* </div> */}
      {/* pagination end */}
    </>
  );
};

export default TableContainer;
