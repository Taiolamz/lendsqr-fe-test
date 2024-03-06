import React, { useState } from "react";
import { RouteBackIcon, StarIcon } from "../../assets/icons/svg";
import UserStaticIcon from "../../assets/icons/user-static-icon.svg";
import { numberWithCommasAndDecimals } from "../utilitites/helpers";
import {
  user_details_personal_info,
  user_tabs,
} from "../utilitites/dashboard_items";
import "../../styles/dashboard/users/view.css";
import { useNavigate } from "react-router";

const ViewUsers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("General Details");

  return (
    <div className="user-details-view-wrap">
      <div className="user-detail-top-wrap" onClick={() => navigate(-1)}>
        <figure className="route-back-icon">{RouteBackIcon}</figure>
        <p className="user-view-label">Back to Users</p>
      </div>

      {/* user detail btn wrap start */}
      <div className="user-details-btn-wrap">
        <p className="user-detail-header">User Details</p>
        <div className="user-details-right-wrap">
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
                className="user-static-icon"
                src={UserStaticIcon}
                alt="user_static_icon"
              />
            </div>
            <div className="user-detail-info">
              <p className="user-detail-name">Hassan Lamidi</p>
              <p className="user-ref-num">LSQFf587g90</p>
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
            <p className="amount">{`₦${numberWithCommasAndDecimals(
              200000
            )}`}</p>
            <p className="bank-name">9912345678/Providus Bank</p>
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
          {user_details_personal_info.map((chi, idx) => {
            const { title, sub_info } = chi;
            return (
              <div key={idx} className="personal-info-box">
                <p className="info-title">{title}</p>
                {/* sub-info wrap start */}
                <div
                  className="detail-sub-info-wrap"
                  style={{
                    gridTemplateColumns:
                      idx === 1 ? "repeat(4, 1fr)" : "repeat(5, 1fr",
                  }}
                >
                  {sub_info.map((child, indx) => {
                    const { label, value } = child;
                    return (
                      <div key={indx} className={`detail-sub-info-box `}>
                        <p className="info-box-label">{label}</p>
                        <p
                          className={`info-box-value  ${
                            value.includes("@") && value.includes(".")
                              ? "remove-capitalize"
                              : ""
                          }`}
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
