import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Select = ({ label, classes, error, allowDisabledState }) => {
  const { setFilter, filter, items } = useLaunchContext();
  const [years, setYears] = useState([]);
  const selectClasses = cx(classes, {
    disabled: allowDisabledState ? error : "",
  });

  useEffect(() => {
    const launchYears = items.map((launch) => launch.launch_year);
    const filteredYears = launchYears.filter(
      (item, pos) => launchYears.indexOf(item) === pos
    );
    setYears(filteredYears);
  }, [items]);

  return (
    <>
      <label htmlFor="year-select" />
      <select
        name={label}
        id="year-select"
        className={selectClasses}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        value={filter}
        placeholder="Filter by Year"
      >
        <option value="">Filter by Year</option>
        {years.map((year, i) => (
          <option key={`${year}_${i}`} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  );
};
