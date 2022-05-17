import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  const { flight_number, mission_name, launch_date_utc, rocket } = item;

  return (
    <li key={index} className="launch-item">
      <div className="launch-item-primary">
        <span className="launch-item-number">{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div className="launch-item-secondary">
        <span className="launch-item-date">
          {moment(launch_date_utc).format("Do MMM YYYY")}
        </span>
        <span className="launch-item-rocket-name">{rocket.rocket_name}</span>
      </div>
    </li>
  );
};
