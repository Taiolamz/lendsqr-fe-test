import HomeIcon from "../../assets/icons/home 1.svg";
import UsersIcon from "../../assets/icons/user-friends 1.svg";
import GuarantorsIcon from "../../assets/icons/users 1.svg";
import SackIcon from "../../assets/icons/sack 1.svg";
import DecisionIcon from "../../assets/icons/handshake-regular 1.svg";
import SavingsIcon from "../../assets/icons/piggy-bank 1.svg";
import LoanIcon from "../../assets/icons/Group 104.svg";
import WhiteListIcon from "../../assets/icons/user-check 1.svg";
import KarmaIcon from "../../assets/icons/user-times 1.svg";
import OrgIcon from "../../assets/icons/briefcase 1.svg";
import BankIcon from "../../assets/icons/np_bank_148501_000000 1.svg";
import CoinIcon from "../../assets/icons/coins-solid 1.svg";
import TransactIcon from "../../assets/icons/icon.svg";
import ServiceIcon from "../../assets/icons/galaxy 1.svg";
import UsercogIcon from "../../assets/icons/user-cog 1.svg";
import ScrollIcon from "../../assets/icons/scroll 1.svg";
import ChartIcon from "../../assets/icons/chart-bar 2.svg";
import SlidersIcon from "../../assets/icons/sliders-h 1.svg";
import BadgeIcon from "../../assets/icons/badge-percent 1.svg";
import LogsIcon from "../../assets/icons/clipboard-list 1.svg";


export const sidebar_list = [
  {
    top_label: "dashboard",
    icon: HomeIcon,
  },
{
    sub_header: "customer",
    sub_list: [
      {
        label: "users",
        icon: UsersIcon,
      },
      {
        label: "guarantors",
        icon: GuarantorsIcon,
      },
      {
        label: "loans",
        icon: SackIcon,
      },
      {
        label: "decision Models",
        icon: DecisionIcon,
      },
      {
        label: "savings",
        icon: SavingsIcon,
      },
      {
        label: "loan Requests",
        icon: LoanIcon,
      },
      {
        label: "whitelist",
        icon: WhiteListIcon,
      },
      {
        label: "karma",
        icon: KarmaIcon,
      },
    ],
  },
  {
    sub_header: "businesses",
    sub_list: [
      {
        label: "organizations",
        icon: OrgIcon,
      },
      {
        label: "loan products",
        icon: LoanIcon,
      },
      {
        label: "savings products",
        icon: BankIcon,
      },
      {
        label: "fees and charges",
        icon: CoinIcon,
      },
      {
        label: "transactions",
        icon: TransactIcon,
      },
      {
        label: "services",
        icon: ServiceIcon,
      },
      {
        label: "service amount",
        icon: UsercogIcon,
      },
      {
        label: "settlements",
        icon: ScrollIcon,
      },
      {
        label: "reports",
        icon: ChartIcon,
      },
    ],
  },
  {
    sub_header: "settings",
    sub_list: [
      {
        label: "preferences",
        icon: SlidersIcon,
      },
      {
        label: "fees and pricing",
        icon: BadgeIcon,
      },
      {
        label: "audit logs",
        icon: LogsIcon,
      },
    ],
  },
];
