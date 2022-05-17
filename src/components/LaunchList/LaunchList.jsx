import React, { useEffect, useState } from "react";
import { LaunchItem } from "../LaunchItem";

export const LaunchList = ({ items, filter, sort }) => {
  const [filteredItems, setFilteredItems] = useState([...items]);

  useEffect(() => {
    if (filter !== "") {
      setFilteredItems(items.filter((item) => item.launch_year === filter));
    } else {
      setFilteredItems([...items]);
    }
  }, [filter, items]);

  //Bug in the sorting function below
  const launches = filteredItems.sort((a, b) => {
    const x = a.launch_date_unix;
    const y = b.launch_date_unix;
    return sort ? y - x : x - y;
  });

  return (
    <ul className="launch-list">
      {launches.map((item, index) => {
        return <LaunchItem key={index} item={item} index={index} />;
      })}
    </ul>
  );
};
