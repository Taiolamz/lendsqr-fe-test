import UsersIcon from "../../assets/icons/users-icon.svg";
import ActiveUserIcon from "../../assets/icons/active-users-icon.svg";
import LoanUserIcon from "../../assets/icons/loan-users.svg";
import SavingsUserIcon from "../../assets/icons/savings-users.svg";
import ViewIcon from "../../assets/icons/np_view_1214519_000000 1.svg";
import BlackListIcon from "../../assets/icons/np_delete-friend_3248001_000000 1.svg";
import ActivateUserIcon from "../../assets/icons/np_user_2995993_000000 1.svg";
import {
  TableBodyItems,
  UserDetailsPersonalInfoProp,
  UserListItem,
} from "./types";
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
    label: "Blacklist User",
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

export const UserDetailsPersonalInfo = ({
  full_name,
  phone_number,
  email,
  bvn,
  gender,
  marital_status,
  children,
  type_of_residence,
  education_level,
  employment_status,
  employment_sector,
  employment_duration,
  official_email,
  monthly_currency_id,
  monthly_income_start_range,
  monthly_income_end_range,
  loan_amount,
  twitter,
  facebook,
  instagram,
  guarantor_fullname,
  guarantor_phone,
  guarantor_email,
  guarantor_relationship,
}: UserDetailsPersonalInfoProp) => [
  {
    title: "personal information",
    sub_info: [
      {
        label: "full name",
        value: full_name,
      },
      {
        label: "phone number",
        value: phone_number,
      },
      {
        label: "email",
        value: email,
      },
      {
        label: "bvn",
        value: bvn,
      },
      {
        label: "gender",
        value: gender,
      },
      {
        label: "marital status",
        value: marital_status,
      },
      {
        label: "children",
        value: children,
      },
      {
        label: "type of residence",
        value: type_of_residence,
      },
    ],
  },
  {
    title: "education and employment",
    sub_info: [
      {
        label: "level of education",
        value: education_level,
      },
      {
        label: "employment status",
        value: employment_status,
      },
      {
        label: "sector of employment",
        value: employment_sector,
      },
      {
        label: "duration of employment",
        value: employment_duration,
      },
      {
        label: "official email",
        value: official_email,
      },
      {
        label: "monthly income",
        value: `${monthly_currency_id}${numberWithCommasAndDecimals(
          Number(monthly_income_start_range)
        )}-${monthly_currency_id}${numberWithCommasAndDecimals(
          Number(monthly_income_end_range)
        )}`,
      },
      {
        label: "loan repayment",
        value: `${formatNumberWithCommas(Number(loan_amount))}`,
      },
    ],
  },
  {
    title: "socials",
    sub_info: [
      {
        label: "twitter",
        value: twitter,
      },
      {
        label: "facebook",
        value: facebook,
      },
      {
        label: "instagram",
        value: instagram,
      },
    ],
  },
  {
    title: "guarantors",
    sub_info: [
      {
        label: "full name",
        value: guarantor_fullname,
      },
      {
        label: "phone_number",
        value: guarantor_phone,
      },
      {
        label: "email address",
        value: guarantor_email,
      },
      {
        label: "relationship",
        value: guarantor_relationship,
      },
    ],
  },
  {
    title: <></>,
    sub_info: [
      {
        label: "full name",
        value: guarantor_fullname,
      },
      {
        label: "phone_number",
        value: guarantor_phone,
      },
      {
        label: "email address",
        value: guarantor_email,
      },
      {
        label: "relationship",
        value: guarantor_relationship,
      },
    ],
  },
];
