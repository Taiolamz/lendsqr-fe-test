import UsersIcon from "../../assets/icons/users-icon.svg";
import ActiveUserIcon from "../../assets/icons/active-users-icon.svg";
import LoanUserIcon from "../../assets/icons/loan-users.svg";
import SavingsUserIcon from "../../assets/icons/savings-users.svg";
import { TableBodyItems, UserListItem } from "./types";

export const user_list: UserListItem[] = [
  {
    logo: UsersIcon,
    title: "users",
    amount: 2453,
  },
  {
    logo: ActiveUserIcon,
    title: "active users",
    amount: 2453,
  },
  { logo: LoanUserIcon, title: "users with loan", amount: 12453 },
  {
    logo: SavingsUserIcon,
    title: "users with savings",
    amount: 102453,
  },
];

export const user_table_head_list: string[] = [
  "organization",
  "user",
  "email",
  "phone number",
  "date joined",
  "status",
];

export const user_table_body_list: TableBodyItems[] = [
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "active",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "active",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
  {
    organization: "Lendsqr",
    user: "Adedeji",
    email: "adedeji@lendsqr.com",
    phone_number: "08078903721",
    date_joined: "May 15, 2020 10:00 AM",
    status: "inactve",
  },
];
