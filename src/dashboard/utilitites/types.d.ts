import { ReactNode } from "react";

interface UserListItem {
  logo: string | any;
  title: string;
  amount: number;
}

interface TableBodyItems {
  organization: string;
  user: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

interface TableProps {
  loading?: boolean;
  tableHeadData?: string[];
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
  status?: string;
  activePage?: string;
  children?: ReactNode;
  onRoute?: (e: string) => void;
}

interface UserDetailsPersonalInfoProp {
  full_name: string;
  phone_number: string;
  email: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  education_level: string;
  employment_status: string;
  employment_sector: string;
  employment_duration: string;
  official_email: string;
  monthly_currency_id: string;
  monthly_income_start_range: string;
  monthly_income_end_range: string;
  loan_amount: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantor_fullname: string;
  guarantor_phone: string;
  guarantor_email: string;
  guarantor_relationship: string;
}

type Status = "pending" | "blacklisted" | "active" | "inactive";
