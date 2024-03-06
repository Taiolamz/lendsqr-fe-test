import UsersIcon from "../../assets/icons/users-icon.svg";
import ActiveUserIcon from "../../assets/icons/active-users-icon.svg";
import LoanUserIcon from "../../assets/icons/loan-users.svg";
import SavingsUserIcon from "../../assets/icons/savings-users.svg";
import ViewIcon from "../../assets/icons/np_view_1214519_000000 1.svg";
import BlackListIcon from "../../assets/icons/np_delete-friend_3248001_000000 1.svg";
import ActivateUserIcon from "../../assets/icons/np_user_2995993_000000 1.svg";
import { TableBodyItems, UserListItem } from "./types";
import { formatNumberWithCommas, numberWithCommasAndDecimals } from "./helpers";

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

export const orgOptions = [
  {
    label: "Lendsqr",
    value: "lendsqr",
  },
  {
    label: "Irorun",
    value: "irorun",
  },
  {
    label: "Lendstar",
    value: "lendstar",
  },
];

export const statusOptions = [
  {
    label: "Inactive",
    value: "inactive",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Blacklisted",
    value: "blaklisted",
  },
];

export const dropItems = [
  {
    label: "View Details",
    logo: ViewIcon,
    click: "/dashboard-users-details",
  },
  {
    label: "Blacklist Usear",
    logo: BlackListIcon,
    click: "",
  },
  {
    label: "Activate User",
    logo: ActivateUserIcon,
    click: "",
  },
];

export const user_tabs: string[] = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export const user_details_personal_info = [
  {
    title: "personal information",
    sub_info: [
      {
        label: "full name",
        value: "Hassan Lamidi",
      },
      {
        label: "phone number",
        value: "07060780922",
      },
      {
        label: "email",
        value: "grace@gmail.com",
      },
      {
        label: "bvn",
        value: "07060780922",
      },
      {
        label: "gender",
        value: "female",
      },
      {
        label: "marital status",
        value: "single",
      },
      {
        label: "children",
        value: "none",
      },
      {
        label: "type of residence",
        value: "parent's apartment",
      },
    ],
  },
  {
    title: "education and employment",
    sub_info: [
      {
        label: "level of education",
        value: "B.Sc",
      },
      {
        label: "employment status",
        value: "employed",
      },
      {
        label: "sector of employment",
        value: "FinTech",
      },
      {
        label: "duration of employment",
        value: "2 years",
      },
      {
        label: "official email",
        value: "hlamidi@lendsqr.com",
      },
      {
        label: "monthly income",
        value: `₦${numberWithCommasAndDecimals(
          20000000
        )}-₦${numberWithCommasAndDecimals(400000)}`,
      },
      {
        label: "loan repayment",
        value: `${formatNumberWithCommas(40000)}`,
      },
    ],
  },
  {
    title: "socials",
    sub_info: [
      {
        label: "twitter",
        value: "@onyebuchihassan",
      },
      {
        label: "facebook",
        value: "hassan lamidi",
      },
      {
        label: "instagram",
        value: "@taiolamz",
      },
    ],
  },
  {
    title: "guarantors",
    sub_info: [
      {
        label: "full name",
        value: "hussein lamidi",
      },
      {
        label: "phone_number",
        value: "08177135933",
      },
      {
        label: "email address",
        value: "hlamidi@gmail.com",
      },
      {
        label: "relationship",
        value: "brother",
      },
    ],
  },
  {
    title: <></>,
    sub_info: [
      {
        label: "full name",
        value: "hussein lamidi",
      },
      {
        label: "phone_number",
        value: "08177135933",
      },
      {
        label: "email address",
        value: "hlamidi@gmail.com",
      },
      {
        label: "relationship",
        value: "brother",
      },
    ],
  },
];
