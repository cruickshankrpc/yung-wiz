/* eslint-disable no-restricted-globals */
import "./HomePage.styles.css";
import "7.css/dist/7.scoped.css";
import { Link, Outlet } from "react-router";
import DatabaseIcon from "../../components/Icons/DatabaseIcon/DatabaseIcon.component";
import Orb from "../../components/Icons/Orb/Orb.component";
import SpaceInvadersIcon from "../../components/Icons/SpaceInvaders/SpaceInvaders.component";
import TaskBar from "../../components/TaskBar/TaskBar.component";
import WindowsIcon from "../../components/Icons/WindowsIcon/WindowsIcon";

// TODO
// Cleanup classnames for consistency
// add auth logic for login
// add menu bar
// cleanup import paths with @components
// stretch: add option to leave a note/add a memory

function HomePage() {
  return (
    <div className="HomePage">
      <Orb />
      <TaskBar />
      <DatabaseIcon />
      <Link
        to="/home/database"
        data-label="Database"
        className="Database__Icon"
      ></Link>
      <SpaceInvadersIcon />
      <WindowsIcon />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomePage;
