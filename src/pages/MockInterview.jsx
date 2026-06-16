import { useState } from "react";
import questions from "../data/questions";

function MockInterview() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [showAnswer, setShowAnswer] =
    useState(false);

  const currentQuestion =
    questions[currentIndex];

  const nextQuestion = () => {
    if (
      currentIndex <
      questions.length - 1
    ) {
      setCurrentIndex(
        currentIndex + 1
      );

      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(
        currentIndex - 1
      );

      setShowAnswer(false);
    }
  };

  return (
    <div>

      <h1>
        Mock Interview
      </h1>

      <br />

      <p>
        Question
        {" "}
        {currentIndex + 1}
        {" "}
        /
        {" "}
        {questions.length}
      </p>

      <br />

      <div className="mock-card">

        <span className="badge">
          {currentQuestion.topic}
        </span>

        <h2>
          {currentQuestion.question}
        </h2>

        <br />

        <button
          className="answer-btn"
          onClick={() =>
            setShowAnswer(
              !showAnswer
            )
          }
        >
          {
            showAnswer
              ? "Hide Answer"
              : "Show Answer"
          }
        </button>

        {
          showAnswer && (
            <div
              className="answer-box"
            >
              <p>
                {
                  currentQuestion.answer
                }
              </p>
            </div>
          )
        }

      </div>

      <br />

      <div
        style={{
          display:"flex",
          gap:"15px"
        }}
      >

        <button
          className="nav-btn"
          onClick={
            prevQuestion
          }
        >
          Previous
        </button>

        <button
          className="nav-btn"
          onClick={
            nextQuestion
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default MockInterview;