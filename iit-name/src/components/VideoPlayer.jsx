import React, { useEffect, useRef } from "react";
import "../styles/layout.css";

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current.contentWindow;

    const messageHandler = (event) => {
      const data = JSON.parse(event.data);
      if (data.event === "onStateChange" && data.info === 0) {
        onVideoEnd(); 
      }
    };

    window.addEventListener("message", messageHandler);
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, [onVideoEnd]);

  return (
    <div className="video-player">
      <iframe
        ref={iframeRef}
        src={`${videoUrl}?enablejsapi=1&rel=0&showinfo=0&modestbranding=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="LMS Video Player"
        className="video-iframe"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
