import questions from "../data/questions";

import {
 useContext
}
from "react";

import {
 ProgressContext
}
from "../context/ProgressContext";

import {
 analyzeTopics
}
from "../utils/analyzeTopics";

function WeakTopics() {

 const {
  completedQuestions
 } = useContext(
  ProgressContext
 );

 const result =
  analyzeTopics(
   questions,
   completedQuestions
  );

 const weakest =
  result.slice(0, 3);

 return (

  <div className="card">

   <h2>
     Weak Topics
   </h2>

   <br />

   {
    weakest.map(
     (item) => (

      <div
       key={item.topic}
       style={{
        marginBottom:"15px",
        padding:"12px",
        borderRadius:"12px",
        background:
        "rgba(255,255,255,0.05)"
       }}
      >

       <h3>
         {item.topic}
       </h3>

       <p>
        Progress :
        {" "}
        {item.percentage}%
       </p>

       <p>

        {
         item.percentage < 30
         ? "High Priority"
         : item.percentage < 60
         ? "Medium Priority"
         : "Low Priority"
        }

       </p>

      </div>

     )
    )
   }

  </div>

 );

}

export default WeakTopics;