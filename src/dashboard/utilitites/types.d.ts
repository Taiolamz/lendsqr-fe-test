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
  onPrevPage?: () => void;
  onNextPage?: () => void;
  perPage?: number;
  totalLengthArray?: number;
  setPerPage?: (e) => void;
  totalLength?: number;
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
  header_one?: string;
  header_two?: string;
  header_three?: string;
  header_four?: string;
  header_five?: string;
  header_six?: string;
}

interface PageOptions {
  label: number;
  value: number;
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
