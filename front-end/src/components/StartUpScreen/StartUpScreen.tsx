import React, { useState, useEffect } from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom'

function StartUpScreen() {
  const [playVideo, setPlayVideo] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.addEventListener('click', () => {
      console.log('Click!');
      setPlayVideo(true)
    });
  }, []);
    setTimeout(() => {
    setPlayVideo(false)
    navigate('/home')
  }, 8000)


  return (
    <div className="StartUpPage">
      {playVideo ? <video src="/startup.mp4" id="video" autoPlay></video> : null}
    </div>
  )
}

export default StartUpScreen