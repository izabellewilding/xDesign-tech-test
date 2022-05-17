import React, { useState, useContext, useCallback, createContext } from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  listYears: Function,
};

export const LaunchContext = createContext(launchContextDefaults);
export const useLaunchContext = () => useContext(LaunchContext);

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState("");
  const [years, setYears] = useState([]);

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: useCallback(async () => {
          setFilter("");
          const response = await GetLaunchesAPI();
          const data = await response.json();
          setItems(data);
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        years,
        listYears: useCallback(() => {
          const launchYears = items.map((launch) => launch.launch_year);
          const filteredYears = launchYears.filter(
            (item, pos) => launchYears.indexOf(item) === pos
          );
          setYears(filteredYears);
        }, [items]),
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
