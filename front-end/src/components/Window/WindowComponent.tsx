import "./Window.styles.css";
import { WindowComponentProps } from "../../types";
import { useNavigate } from "react-router";

export const WindowComponent = ({
  children,
  title,
  width = "500px",
  className,
  clickedItem,
}: WindowComponentProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
    clickedItem && navigate("/home/database");
  };

  return (
    <div className="win7">
      <div
        className={`Window ${className} window active`}
        style={{ maxWidth: width, height: "fit-content" }}
      >
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Close" onClick={handleClose}></button>
          </div>
        </div>
        <div className="window-body has-space">{children}</div>
      </div>
    </div>
  );
};
