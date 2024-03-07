import React, { useContext, useEffect } from "react";
import Cards from "../../reusables/cards";
import TableContainer from "../../reusables/tables";
import TableBody from "../../reusables/tables/table_body";
import "../../styles/dashboard/users/users.css";
import { user_list, user_table_head_list } from "../utilitites/dashboard_items";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/users";
import RootState from "../../redux/types";
import NoDataImg from "../../assets/images/no-data.png";
import { formatDate } from "../utilitites/helpers";
import { useNavigate } from "react-router";
import FilterIcon from "../../assets/icons/filter-results-button.svg";
import { ActionContext } from "../../context/action-context";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state: RootState) => state.users);
  const actionCtx = useContext(ActionContext);
  useEffect(() => {
    dispatch(getUserDetails() as any);
  }, []);

  const handleGetSingleUser = (param: any) => {
    const paramToString = JSON.stringify(param);
    localStorage.setItem("user_details", paramToString);
    navigate("/dashboard-users-details");
  };
  const handleFilterDrop = () => {
    actionCtx.setIsFilterDrop(!actionCtx.isFilterDrop);
    console.log(actionCtx.isFilterDrop);
  };
  return (
    <div className="dashboard-users-wrap">
      {/* title wrap start */}
      <p className="title">Users</p>
      {/* title wrap end */}

      {/* cards wrap start */}
      <Cards details={user_list} />
      {/* cards wrap end */}

      {/* table wrap start */}
      <TableContainer tableHeadData={user_table_head_list}>
        <img
          className="mobile-filter-icon"
          src={FilterIcon}
          alt="filter_icon"
          onClick={handleFilterDrop}
        />
        {users.length > 0 ? (
          users.map((chi: any, idx: any) => {
            const {
              organization,
              user,
              email,
              phone_number,
              date_joined,
              // status,
            } = chi;
            return (
              <TableBody
                key={idx}
                one={organization}
                two={user}
                three={email}
                four={phone_number}
                five={formatDate(date_joined)}
                status={"active"}
                loading={loading}
                onRoute={() => handleGetSingleUser(chi)}
                //for mobile view
                header_one={user_table_head_list[0]}
                header_two={user_table_head_list[1]}
                header_three={user_table_head_list[2]}
                header_four={user_table_head_list[3]}
                header_five={user_table_head_list[4]}
                header_six={user_table_head_list[5]}
              />
            );
          })
        ) : loading ? (
          <div className="no-data-img-wrap">
            <p className="img-text">Loading...</p>
          </div>
        ) : (
          <div className="no-data-img-wrap">
            <img className="no-data-img" src={NoDataImg} alt="" />
            <p className="img-text">No User Data</p>
          </div>
        )}
      </TableContainer>
      {/* table wrap end */}
    </div>
  );
};

export default Users;
