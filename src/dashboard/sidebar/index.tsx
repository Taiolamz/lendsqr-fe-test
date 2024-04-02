import { useNavigate } from "react-router";
import BriefcaseIcon from "../../assets/icons/briefcase 1.svg";
import { dropdownArrow } from "../../assets/icons/svg";
import { sidebar_list } from "../utilitites/sidebar";
import "../../styles/dashboard/sidebar/sidebar.css";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
  };
  return (
    <>
      <div className={`sidebar-wrap ${showSidebar ? "show-sidebar-wrap" : ""}`}>
        <div className="sidebar-icon">
          <FaArrowsTurnRight
            size={20}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        {/* top wrap start */}
        <div className="sidebar-top-wrap">
          <img
            className="brief-icon"
            src={BriefcaseIcon}
            alt="brief_case_icon"
          />
          <p className={`switch-org-text ${!showSidebar ? "hide-text" : ""}`}>
            Switch Organization
          </p>
          <figure className={`drop-icon ${!showSidebar ? "hide-arrow" : ""}`}>
            {dropdownArrow}
          </figure>
        </div>
        {/* top wrap end */}

        <div className="sidebar-items-wrap">
          {sidebar_list.map((chi, idx) => {
            const { top_label, icon, sub_header, sub_list } = chi;
            const location = window.location;
            return (
              <div className="sidebar-items-box" key={idx}>
                <>
                  {idx === 0 ? (
                    <div
                      className={`sidebar-item-top ${
                        location.pathname.includes(`/${top_label}-home`)
                          ? "sub-list-box-active"
                          : ""
                      } `}
                      onClick={() => navigate(`/${top_label}-home`)}
                    >
                      <img
                        className="home-icon"
                        src={icon}
                        alt={`${top_label}_icon`}
                      />

                      <p
                        className={`top-label-text ${
                          !showSidebar ? "hide-text" : ""
                        }`}
                      >
                        {top_label}
                      </p>
                    </div>
                  ) : null}
                </>
                {/* sub list wrap start */}
                <div className="sub-list-wrap">
                  <p
                    className={`sidebar-sub-header ${
                      !showSidebar ? "hide-text" : ""
                    }`}
                  >
                    {sub_header}
                  </p>
                  {sub_list?.map((child, indx) => {
                    const { label, icon } = child;
                    return (
                      <div
                        key={indx}
                        onClick={() => navigate(`/dashboard-${label}`)}
                        className={`sub-list-box ${
                          location.pathname.includes(`dashboard-${label}`)
                            ? "sub-list-box-active"
                            : ""
                        } `}
                      >
                        {location.pathname.includes(`dashboard-${label}`) ? (
                          <span className="span-bg"></span>
                        ) : null}
                        <img
                          className="sub-icons"
                          src={icon}
                          alt={`${label}_icon`}
                        />
                        <p
                          className={`sub-label ${
                            !showSidebar ? "hide-text" : ""
                          }`}
                        >
                          {label}
                        </p>
                      </div>
                    );
                  })}
                  {/* sub list wrap end */}
                </div>
              </div>
            );
          })}

          <div className="logout-wrap" onClick={handleLogout}>
         {!showSidebar &&   <p className="logout-icon">{"<<"}</p>}
            <IoIosLogOut size={20} />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
