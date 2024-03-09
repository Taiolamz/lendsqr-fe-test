import React from "react";
import { dropItems } from "../../dashboard/utilitites/dashboard_items";

interface ActionDropProp {
  isVisible?: boolean;
  actionRef?: React.RefObject<HTMLDivElement>;
  onRoute?: (click: string) => void;
}

const ActionDrop = ({ isVisible, actionRef, onRoute }: ActionDropProp) => {

  return (
    <div
      className={`action-drop-wrap ${isVisible ? "show-action-drop-wrap" : ""}`}
      ref={actionRef}
    >
      {dropItems.map((chi, idx) => {
        const { label, logo, click } = chi;
        return (
          <div
            key={idx}
            className="drop-box"
            onClick={() => onRoute && onRoute(click)}
          >
            <img src={logo} alt={`${logo}_logo`} />
            <p className="label">{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ActionDrop;
