import React from "react";
import { Header } from "../Header";
import { Body } from "../Body";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const App = () => {
  const { listLaunches, listYears } = useLaunchContext();

  React.useEffect(() => {
    listLaunches();
    listYears();
  }, [listLaunches, listYears]);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
