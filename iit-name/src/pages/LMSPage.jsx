import React, { useState } from "react";
import dummyData from "../utils/dummyData";
import TaskSection from "../components/TaskSection";
import "../styles/layout.css";

const LMSPage = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleTaskComplete = () => {
    setCurrentTaskIndex((prev) => prev + 1);
  };

  return (
    <main className="lms-page">
      {dummyData.tasks.map((task, index) => (
        <div
          key={task.id}
          className={`task-container ${
            index === currentTaskIndex ? "active" : "hidden"
          }`}
        >
          <TaskSection task={task} onComplete={handleTaskComplete} />
        </div>
      ))}
    </main>
  );
};

export default LMSPage;
