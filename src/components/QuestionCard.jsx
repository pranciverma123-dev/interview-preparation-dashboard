// import "./QuestionCard.css";

// function QuestionCard({
//   topic,
//   question,
// }) {
//   return (
//     <div className="question-card">
//       <span className="badge">
//         {topic}
//       </span>

//       <h3>{question}</h3>
//     </div>
//   );
// }

// export default QuestionCard;
import {
 useContext
}
from "react";

import {
 ProgressContext
}
from "../context/ProgressContext";

function QuestionCard({

 topic,
 question,
 id

}) {

 const {
  completedQuestions,

  markCompleted

 } =
 useContext(
  ProgressContext
 );

 const isCompleted =
 completedQuestions.includes(
  id
 );

 return (

  <div
   className="question-card"
  >

   <span className="badge">
    {topic}
   </span>

   <h3>
    {question}
   </h3>

   <br />

   <button

    onClick={() =>
      markCompleted(id)
    }

   >

    {

      isCompleted
      ? "Completed ✅"
      : "Mark Complete"

    }

   </button>

  </div>

 );

}

export default QuestionCard;