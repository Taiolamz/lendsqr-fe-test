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
  tableHeadData?: string[];
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
  status?: string;
  children?: ReactNode;
}

type Status = "pending" | "blacklisted" | "active" | "inactive";
