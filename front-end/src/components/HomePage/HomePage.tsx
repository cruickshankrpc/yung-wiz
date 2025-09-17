/* eslint-disable no-restricted-globals */
import React, { useState, useContext, createContext, useEffect } from "react";
import "./HomePage.styles.css";
import "7.css/dist/7.scoped.css";
import { Link } from "react-router";
import { DatabaseList } from "../DatabaseList/DatabaseList";
import DatabaseIcon from "../Icons/DatabaseIcon/DatabaseIcon.component";
import Orb from "../Icons/Orb/Orb.component";
import SpaceInvadersIcon from "../Icons/SpaceInvaders/SpaceInvaders.component";
import { Item } from "../Item/Item";
import TaskBar from "../TaskBar/TaskBar.component";

// TODO
// useContext to set state of modals open/closed
// Cleanup classnames for consistency
// add auth logic for login
// add menu bar
// center bg img
// stretch: add option to leave a note/add a memory

function HomePage() {
  const [modal, setModalToOpen] = useState<boolean>(false);

  return (
    <div className="HomePage">
      {modal ? (
        <>
          <DatabaseList />
          <Item />
        </>
      ) : null}
      <Orb />
      <TaskBar />
      <DatabaseIcon />
      <Link
        to="/home/database"
        onClick={() => {
          setModalToOpen(!modal);
        }}
        data-label="Database"
        className="Database__Icon"
      ></Link>
      <SpaceInvadersIcon />
    </div>
  );
}

export default HomePage;
