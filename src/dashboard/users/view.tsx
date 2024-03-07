import React, { useEffect, useState } from "react";
import { RouteBackIcon, StarIcon } from "../../assets/icons/svg";
import UserStaticIcon from "../../assets/icons/user-static-icon.svg";
import { numberWithCommasAndDecimals } from "../utilitites/helpers";
import {
  UserDetailsPersonalInfo,
  user_tabs,
} from "../utilitites/dashboard_items";
import "../../styles/dashboard/users/view.css";
import { useNavigate } from "react-router";
import { UserDetails } from "../../redux/types";
import { UserDetailsPersonalInfoProp } from "../utilitites/types";

const ViewUsers = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("General Details");
  useEffect(() => {
    const data = localStorage.getItem("user_details");
    const parseData = JSON.parse(data as any);
    if (parseData) {
      setUserDetails(parseData);
    }
  }, []);

  // hardcoded values are absense of relatable data or value
  const userDetailsInfo = UserDetailsPersonalInfo({
    full_name: userDetails?.user || "Hassan Lamidi",
    phone_number: userDetails?.phone_number || "08177135933",
    email: userDetails?.email || "hassanadefarati@gmail.com",
    bvn: "08177135933", //couldnt find a perfect value for this :)
    gender: userDetails?.gender || "Male",
    marital_status: "Single",
    children: userDetails?.children || "none",
    type_of_residence: "Parent's Apartment",
    education_level: "B.sc",
    employment_status: "employed",
    employment_sector: "FinTech",
    employment_duration: "2 years",
    official_email: userDetails?.official_email,
    monthly_currency_id: userDetails?.currencyId || "₦",
    monthly_income_start_range: "200000",
    monthly_income_end_range: "400000",
    loan_amount: "40000",
    twitter: "@onyebuchihassan",
    facebook: "Hassan Lamidi",
    instagram: "@taiolamz",
    guarantor_fullname: userDetails?.guarantor_name,
    guarantor_phone: userDetails?.guarantor_num,
    guarantor_email: userDetails?.email,
    guarantor_relationship: userDetails?.guarantor_relationship,
  } as UserDetailsPersonalInfoProp);

  function generateClassName(value: string) {
    let className = "info-box-value";

    if (
      typeof value === "string" &&
      value.includes("@") &&
      value.includes(".")
    ) {
      className += " remove-capitalize";
    }

    return className;
  }

  return (
    <div className="user-details-view-wrap">
      <div className="user-detail-top-wrap" onClick={() => navigate(-1)}>
        <figure className="route-back-icon">{RouteBackIcon}</figure>
        <p className="user-view-label">Back to Users</p>
      </div>

      {/* user detail btn wrap start */}
      <div className="user-details-mid-wrap">
        <p className="user-detail-header">User Details</p>
        <div className="user-details-btn-wrap">
          <p>Blacklist User</p>
          <p>Activate User</p>
        </div>
      </div>
      {/* user detail btn wrap end */}

      {/* user summary wrap start */}
      <div className="user-details-summary-wrap">
        <div className="user-profile-container">
          {/* user profile wrap start */}
          <div className="user-profile-wrap">
            <div className="user-avatar-wrap">
              <img
                className={`user-static-icon ${
                  userDetails?.avatar ? "user-display-img" : ""
                }`}
                src={userDetails?.avatar ? userDetails.avatar : UserStaticIcon}
                alt="user_static_icon"
              />
            </div>
            <div className="user-detail-info">
              <p className="user-detail-name">
                {userDetails?.user || "Hassan Lamidi"}
              </p>
              <p className="user-ref-num">
                {userDetails?.reference_number || "LSQFf587g90"}
              </p>
            </div>
          </div>
          {/* user profile wrap end */}

          <span className="hr-line"></span>

          {/* user tier wrap start */}
          <div className="user-tier-wrap">
            <p>User's Tier</p>
            <div className="user-star-wrap">
              {[1, 2, 3].map((_, idx) => (
                <StarIcon key={idx} active={idx === 0} />
              ))}
            </div>
          </div>
          {/* user tier wrap end */}

          <span className="hr-line"></span>

          {/* user amount details wrap start */}
          <div className="user-amount-details-wrap">
            <p className="amount">
              {`${userDetails?.currencyId}${numberWithCommasAndDecimals(
                Number(userDetails?.amount)
              )}` || `₦${numberWithCommasAndDecimals(200000)}`}
            </p>
            <p className="bank-name">
              {`${userDetails?.account_num}/${userDetails?.bank}` ||
                "9912345678/Providus Bank"}
            </p>
            {/* user amount details wrap end */}
          </div>
        </div>

        {/* tabs wrap start */}
        <div className="user-tabs-wrap">
          {user_tabs.map((chi, idx) => (
            <p
              className={`user-tab-box ${
                chi === activeTab ? "active-user-tab-box" : ""
              }`}
              onClick={() => setActiveTab(chi)}
              key={idx}
            >
              {chi}
            </p>
          ))}
        </div>
        {/* tabs wrap end */}
      </div>
      {/* user summary wrap end */}

      {/* more user datails wrap start */}
      <div className="more-user-datail-info-wrap">
        {/* personal info wrap start */}
        <div className="personal-info-wrap">
          {userDetailsInfo.map((chi, idx) => {
            const { title, sub_info } = chi;
            return (
              <div key={idx} className="personal-info-box">
                <p className="info-title">{title}</p>
                {/* sub-info wrap start */}
                <div
                  className={`detail-sub-info-wrap ${
                    idx !== 1 ? "detail-sub-info-wrap-length" : ""
                  }`}
                >
                  {sub_info.map((child, indx) => {
                    const { label, value } = child;
                    return (
                      <div key={indx} className={`detail-sub-info-box `}>
                        <p className="info-box-label">{label}</p>
                        <p
                          className={`info-box-value ${generateClassName(
                            value
                          )}`}
                        >
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* sub-info wrap end */}
              </div>
            );
          })}
        </div>
        {/* personal info wrap end */}
      </div>
      {/* more user datails wrap end */}
    </div>
  );
};

export default ViewUsers;
