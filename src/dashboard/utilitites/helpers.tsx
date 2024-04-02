import {useEffect, useRef, useState } from "react";

export function formatNumberWithCommas(number: number) {
  let numberString = number.toString();
  let characters = numberString.split("");
  let commaIndex = characters.length - 3;
  while (commaIndex > 0) {
    characters.splice(commaIndex, 0, ",");
    commaIndex -= 3;
  }
  return characters.join("");
}

export function numberWithCommasAndDecimals(number: number) {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface SelectStyleProp {
  bgColor?: string;
  border?: string;
  borderRadius?: string;
}

export const reactSelectStyle = ({
  bgColor,
  border,
  borderRadius,
}: SelectStyleProp) => ({
  control: (provided: any, state: any) => ({
    ...provided,
    outline: "none",
    boxShadow: "none",
    borderRadius: borderRadius,
    minHeight: "unset",
    cursor: "pointer",
    backgroundColor: bgColor,
    border: border,
    fontWeight: "500",
    fontSize: "1.4rem",
    color: "color: rgba(84, 95, 125, 0.7)",

    placeholder: (provided: any) => ({
      ...provided,
      color: " rgba(84, 95, 125, 0.7)",
    }),
  }),
  singleValue: (provided: any) => ({
    ...provided,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "rgba(33, 63, 125, 0.6)",
  }),

  option: (base: any, state: any) => ({
    ...base,
    color: state.isSelected ? "#ffff" : "rgba(33, 63, 125, 1)",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "rgba(33, 63, 125, 1)"
      : state.isFocused
      ? "rgba(33, 63, 125, 0.1)"
      : "inherit",
  }),
});

interface VisibilityState {
  [itemName: string]: boolean;
}

export const useOnClickOutside = (initialVisible: VisibilityState = {}) => {
  const ref = useRef<HTMLImageElement>(null);
  const [visibilityStates, setVisibilityStates] =
    useState<VisibilityState>(initialVisible);

  const handleClickOutside = (event: MouseEvent, itemName: string) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setVisibilityStates((prev) => ({
        ...prev,
        [itemName]: false,
      }));
    }
  };

  const toggleVisibility = (itemName: string) => {
    setVisibilityStates((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const anyVisible = Object.values(visibilityStates).some((value) => value);

  useEffect(() => {
    const handleClick = (event: MouseEvent, itemName: string) =>
      handleClickOutside(event, itemName);

    Object.keys(visibilityStates).forEach((itemName) => {
      if (visibilityStates[itemName]) {
        document.addEventListener("mousedown", (event: any) =>
          handleClick(event, itemName)
        );
      }
    });

    return () => {
      document.body.style.overflow = "auto";
      Object.keys(visibilityStates).forEach((itemName) => {
        document.removeEventListener("mousedown", (event: any) =>
          handleClick(event, itemName)
        );
      });
    };
  }, [visibilityStates]);

  return { ref, visibilityStates, anyVisible, toggleVisibility };
};

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    hourCycle: "h12",
  };

  return date.toLocaleString("en-US", options);
}
