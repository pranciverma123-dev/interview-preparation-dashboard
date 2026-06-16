import questions from "../data/questions";
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";
import { analyzeTopics } from "../utils/analyzeTopics";

function StudyPlan() {

 const {
  completedQuestions
 } = useContext(
  ProgressContext
 );

 const topics =
  analyzeTopics(
   questions,
   completedQuestions
  );

 const weakest =
  topics.slice(0, 3);

 return (

  <div className="card">

   <h2>
    📚 Recommended Study Plan
   </h2>

   <br />

   {
    weakest.map(
     (item, index) => (

      <div
       key={item.topic}
       style={{
        marginBottom:"15px"
       }}
      >

       <h3>

        Day {index + 1}
        {" : "}
        {item.topic}

       </h3>

       <p>

        Progress :
        {" "}
        {item.percentage}%

       </p>

      </div>

     )
    )
   }

  </div>

 );

}

export default StudyPlan;