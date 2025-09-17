import "7.css/dist/7.scoped.css";
import "./MobileScreen.styles.css";

function MobileScreen() {
  return (
    <div className="win7 MobileScreen">
      <div
        className="window active MobileSreen__Window"
        style={{ maxWidth: "300px" }}
      >
        <div className="title-bar">
          <div className="title-bar-text">Diagnostics</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body has-space">
          <p>View me on a desktop browser !</p>
        </div>
      </div>
    </div>
  );
}

export default MobileScreen;
