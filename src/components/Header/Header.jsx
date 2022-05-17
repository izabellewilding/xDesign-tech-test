import React from "react";
import LABEL from "../../constants/Labels";
import { Button } from "../../components/Button";
import { useLaunchContext } from "../../contexts/LaunchContext/LaunchContext";
import CONSTANTS from "../../constants/Config";

export const Header = () => {
  const { filter } = useLaunchContext();
  return (
    <header className="app__header">
      <div className="app__logo">
        <img
          className="app__logo-image"
          alt="spacex-logo"
          src={CONSTANTS.LOGO}
        />
        <span className="app__logo-txt">{LABEL.LAUNCHES}</span>
      </div>
      <Button
        filter={filter}
        //missing onClick
        classes="button button--reload"
        label={LABEL.RELOAD}
        allowDisabledState={false}
      />
    </header>
  );
};
