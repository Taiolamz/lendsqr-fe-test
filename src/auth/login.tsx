import React from "react";
import { useState } from "react";
import Logo from "../assets/images/lendsqrLogo.svg";
import PabloSignImg from "../assets/images/pablo-sign-in.svg";
import "../styles/auth/login/login.css";
import { useNavigate } from "react-router";
import Button from "../reusables/button";

interface UserDetails {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState("");
  const [details, setDetails] = useState<UserDetails>({
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const activateBtn = () => {
    let activeBtn: boolean = true;

    for (const key in details) {
      if (
        details.hasOwnProperty(key) &&
        details[key as keyof UserDetails] === ""
      ) {
        activeBtn = false;
        break;
      }
    }
    return activeBtn;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData: UserDetails = { ...details };
    if (activateBtn()) {
      navigate("/dashboard-users");
    }
  };

  return (
    <div className="auth-login-wrap">
      {/* left wrap start */}
      <div className="auth-login-left-wrap">
        <div className="logo-wrap">
          <img className="logo-box" src={Logo} alt="lendsqr_logo" />
        </div>
        <img
          className="pablo-img"
          style={{ width: "100%" }}
          src={PabloSignImg as any}
          alt="pablo_sign_img"
        />
      </div>
      {/* left wrap end */}

      {/* right wrap start */}
      <div className="auth-login-right-wrap">
        <div className="auth-login-right-box">
          {/* top wrap start */}
          <div className="login-top-wrap">
            {/* mobile logo/image wrap start */}
            <div className="right-display-wrap">
              <div className="right-logo-wrap">
                <img className="right-logo-box" src={Logo} alt="lendsqr_logo" />
              </div>
              <img
                className="pablo-img"
                src={PabloSignImg}
                alt="pablo_sign_img"
              />
            </div>
            {/* mobile logo/image wrap end */}
            <p className="login-header-text">Welcome!</p>
            <p className="login-sub-text">Enter details to login.</p>
          </div>
          {/* top wrap end */}

          {/* auth form wrap start */}
          <form
            action=""
            className="auth-login-form-wrap"
            onSubmit={handleSubmit}
          >
            {Object.entries(details).map(([key, value]) => (
              <div className="auth-login-box" key={key}>
                <label htmlFor={key}></label>
                <input
                  type={
                    key === "password" && !showPassword ? "password" : "text"
                  }
                  id={key}
                  name={key}
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className={`login-input ${value ? "login-input-active" : ""}`}
                  placeholder={key}
                />
                <label
                  htmlFor={key}
                  className={`login-label ${value && "login-label-active"}`}
                >
                  {key}
                </label>
                {key === "password" && (
                  <p
                    className="login-show-text"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? "show" : "hide"}
                  </p>
                )}
              </div>
            ))}
            <p className="login-forgot-text">Forgot Password ?</p>
            <Button
              className="login-btn-wrap"
              label="Log in"
              type="submit"
              active={activateBtn()}
            />
          </form>
          {/* auth form wrap end */}
        </div>
      </div>
      {/* right wrap end */}
    </div>
  );
};

export default Login;
