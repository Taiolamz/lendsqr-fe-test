import React, { useState } from "react";
import Logo from "../../assets/images/lendsqrLogo.svg";
import SearchIcon from "../../assets/icons/search-icon.svg";
import BellIcon from "../../assets/icons/bell-icon.svg";
import Avatar from "../../assets/images/avatar.svg";
import { navArrowDown } from "../../assets/icons/svg";
import "../../styles/dashboard/navbar/navbar.css";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="harmbourger">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        {/* logo wrap start */}
        <figure>
          <img className="lend-logo" src={Logo} alt="lendsqr_logo" />
        </figure>
        {/* logo wrap end */}
      </div>
      <div className={`navbar-wrap ${isOpen ? "show-navbar-wrap" : ""}`}>
        {/* left wrap start */}
        <div className={"left-nav-wrap "}>
          {/* logo wrap start */}
          <figure>
            <img className="lend-logo" src={Logo} alt="lendsqr_logo" />
          </figure>
          {/* logo wrap end */}

          {/* search wrap start */}
          <div className="search-wrap">
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              placeholder="Search for anything"
            />
            <figure className="search-icon-wrap">
              <img className="search-icon" src={SearchIcon} alt="search-icon" />
            </figure>
          </div>
          {/* search wrap end */}
        </div>
        {/* left wrap end */}

        {/* right nav wrap start */}
        <div className="right-nav-wrap">
          {/* docs wrap start */}
          <p className="docs-wrap">Docs</p>
          {/* docs wrap end */}

          {/* bell notify wrap start */}
          <figure className="bell-notify-wrap">
            <img src={BellIcon} alt="bell_icon" />
          </figure>
          {/* bell notify wrap end */}

          {/* profiile wrap start */}

          <div className="profile-wrap">
            <figure>
              <img className="avatar-img" src={Avatar} alt="avatar" />
            </figure>
            <div className="nav-user-wrap">
              <p className="nav-username">Hassan</p>
              <figure className="dropdown-icon">{navArrowDown}</figure>
            </div>
          </div>
          {/* profiile wrap end */}
        </div>
        {/* right nav wrap end */}
      </div>
    </div>
  );
};

export default Navbar;
