import React, { useState } from "react";
import "../styles/layout.css";

const Assessment = ({ assessment, onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === assessment.answer.toLowerCase()) {
      setFeedback("✅ Correct!");
      setTimeout(onComplete, 1500); 
    } else {
      setFeedback("❌ Incorrect! Try again.");
    }
  };

  return (
    <div className="assessment-container">
      <h3>{assessment.question}</h3>
      {assessment.type === "mcq" ? (
        <div>
          {assessment.options.map((option, index) => (
            <label key={index} className="assessment-option">
              <input
                type="radio"
                name="mcq"
                value={option}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          placeholder="Enter your answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="assessment-input"
        />
      )}
      <button onClick={handleSubmit} className="btn-submit">
        Submit
      </button>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default Assessment;
