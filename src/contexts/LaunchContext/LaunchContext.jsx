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
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: useCallback(async () => {
          setFilter("");
          try {
            setError();
            setLoading(true);
            const data = await GetLaunchesAPI();

            setItems(data);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            setError(e);
            console.error(e);
          }
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        error,
        loading,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
