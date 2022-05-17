import React from "react";
import moment from "moment";

export const LaunchItem = ({ item, index }) => {
  //missing rocket name
  const { flight_number, mission_name, launch_date_utc, rocket } = item;

  return (
    <li key={index}>
      <div>
        <span>{`#${flight_number}`}</span>
        <span>{`${mission_name}`}</span>
      </div>
      <div>
        <span>
          <span> {moment(launch_date_utc).format("MMM Do YY")}</span>
          <span>{rocket.rocket_name}</span>
        </span>
      </div>
    </li>
  );
};
