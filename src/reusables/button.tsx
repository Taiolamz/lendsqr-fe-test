import React from "react";
import "../styles/reusables/button.css";

interface BtnProp {
  label: string;
  className?: string | any;
  style?: any;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
  active?: boolean | any;
}

const Button = ({
  label,
  active,
  onClick,
  style,
  type,
  className,
}: BtnProp) => {
  return (
    <button
      className={`btn-wrap ${active ? "btn-wrap-active" : ""} ${className}`}
      onClick={() => active && onClick && onClick()}
      style={{ ...style }}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
