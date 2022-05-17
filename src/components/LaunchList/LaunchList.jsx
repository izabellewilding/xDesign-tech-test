import React, { useEffect, useState } from "react";
import { LaunchItem } from "../LaunchItem";
import ClipLoader from "react-spinners/ClipLoader";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const LaunchList = ({ items, filter, sort }) => {
  const { loading, error } = useLaunchContext();

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
    <div className="launch-list-container">
      {(loading || error) && (
        <div className="launch-list-fallback-container">
          {loading && <ClipLoader loading={loading} size={100} />}
          {error && (
            <p>
              Sorry, something went wrong.
              <br /> Please try the refresh button.
            </p>
          )}
        </div>
      )}
      {launches && !loading && (
        <ul className="launch-list">
          {launches.map((item, index) => {
            return <LaunchItem key={index} item={item} index={index} />;
          })}
        </ul>
      )}
    </div>
  );
};
