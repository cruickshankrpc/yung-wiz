import { Link } from "react-router";
import "./WindowsIcon.styles.css";
function WindowsIcon() {
  return (
    <Link
      to="https://nainemom.github.io/win7/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="Windows__Icon" data-label="Windows7 Simulator"></div>
    </Link>
  );
}

export default WindowsIcon;
