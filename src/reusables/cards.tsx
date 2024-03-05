import React from "react";
import "../styles/reusables/cards.css";
import { formatNumberWithCommas } from "../dashboard/utilitites/helpers";

interface CardDetails {
  details: any[];
}

const Cards = ({ details }: CardDetails) => {
  return (
    <div>
      {/* cards wrap start */}
      <div className="dashboard-card-wrap">
        {details.map((chi, idx) => {
          const { logo, title, amount } = chi;
          return (
            <div key={idx} className="dashboard-card-box">
              <figure>
                <img className="logo" src={logo} alt={`${logo}_icon`} />
              </figure>
              <p className="title">{title}</p>
              <p className="amount">{formatNumberWithCommas(amount)}</p>
            </div>
          );
        })}
      </div>
      {/* cards wrap end */}
    </div>
  );
};

export default Cards;
