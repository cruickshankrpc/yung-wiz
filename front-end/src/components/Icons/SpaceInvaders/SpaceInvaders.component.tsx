import React from "react";
import { Link } from "react-router";
import "./SpaceInvadersIcon.styles.css";

function SpaceInvadersIcon() {
  return (
    <Link
      to="https://cruickshankrpc.github.io/SPACEINVADERS/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="SpaceInvaders__Icon" data-label="Space Invaders"></div>
    </Link>
  );
}

export default SpaceInvadersIcon;
