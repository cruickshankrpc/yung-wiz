import React, { useState } from "react";
import "./Window.styles.css";
import { WindowComponentProps } from "../../types";

export const WindowComponent = ({
  content,
  title,
  width = "500px",
  className,
  modalId,
}: WindowComponentProps) => {
  const [open, setOpen] = useState<boolean>(true);

  // console.log("WINDOWCOMP", open)
  return open ? (
    <div className="win7">
      <div
        className={`Window ${className} window active`}
        id={modalId}
        style={{ maxWidth: width, height: "fit-content" }}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              onClick={() => setOpen(open ? false : true)}
            ></button>
          </div>
        </div>
        <div className="window-body has-space">{content}</div>
      </div>
    </div>
  ) : null;
};
