import React from "react";
import Cards from "../../reusables/cards";
import TableContainer from "../../reusables/tables";
import TableBody from "../../reusables/tables/table_body";
import "../../styles/dashboard/users/users.css";
import {
  user_list,
  user_table_body_list,
  user_table_head_list,
} from "../utilitites/dashboard_items";

const Users = () => {
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
        {user_table_body_list.map((chi, idx) => {
          const {
            organization,
            user,
            email,
            phone_number,
            date_joined,
            status,
          } = chi;
          return (
            <TableBody
              key={idx}
              one={organization}
              two={user}
              three={email}
              four={phone_number}
              five={date_joined}
              status={status}
            />
          );
        })}
      </TableContainer>
      {/* table wrap end */}
    </div>
  );
};

export default Users;
