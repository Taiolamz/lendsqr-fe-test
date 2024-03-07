import React from "react";
import "../styles/reusables/button.css";

type BtnProp = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: React.FormEvent<HTMLFormElement>) => void;
  type: "submit" | "reset" | "button";
  active?: boolean;
};

const Button: React.FC<BtnProp> = ({
  label,
  active,
  onClick,
  style,
  type,
  className,
}) => {
  const handleClick = () => {
    if (active && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`btn-wrap ${active ? "btn-wrap-active" : ""} ${
        className || ""
      }`}
      onClick={handleClick}
      style={style}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
