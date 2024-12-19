import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Assessment from "./Assessment";
import "../styles/layout.css";

const TaskSection = ({ task, onComplete }) => {
  const [videoComplete, setVideoComplete] = useState(false);

  return (
    <section className="task-section">
      <VideoPlayer videoUrl={task.videoUrl} onVideoEnd={() => setVideoComplete(true)} />
      {videoComplete && (
        <Assessment assessment={task.assessment} onComplete={onComplete} />
      )}
    </section>
  );
};

export default TaskSection;
