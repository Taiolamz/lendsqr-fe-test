import Users from "../../dashboard/users";
import ViewUsers from "../../dashboard/users/view";

export const Dashboard_route_group = [
  {
    element: Users,
    path: "/dashboard-users",
  },
  {
    element: ViewUsers,
    path: "/dashboard-users-details",
  },
];
