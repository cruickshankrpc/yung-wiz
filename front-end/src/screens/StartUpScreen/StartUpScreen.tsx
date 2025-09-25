import { useState, useEffect } from "react";
import "./StartUpScreen.styles.css";
import "7.css/dist/7.scoped.css";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";

function StartUpScreen() {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const navigate = useNavigate();

  // trigger video play with audio and set screen to full onclick
  useEffect(() => {
    const handleClick = () => {
      document.body.requestFullscreen();
      setPlayVideo(true);
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  setTimeout(() => {
    setPlayVideo(false);
    if (isMobile) {
      navigate("/mobile-view");
    } else {
      navigate("/login");
    }
  }, 8000);

  return (
    <div className="StartUpPage win7">
      <button>Click to start</button>
      {playVideo ? (
        <video src="/startup.mp4" id="video" autoPlay></video>
      ) : null}
    </div>
  );
}

export default StartUpScreen;
