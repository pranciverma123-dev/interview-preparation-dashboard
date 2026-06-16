// import DashboardCard
// from "../components/DashboardCard";

// function Dashboard() {
//   return (
//     <div className="grid">
//       <DashboardCard
//         title="Questions Solved"
//         value="120"
//       />

//       <DashboardCard
//         title="Mock Interviews"
//         value="15"
//       />

//       <DashboardCard
//         title="Progress"
//         value="68%"
//       />
//     </div>
//   );
// }

// export default Dashboard;
import {
 useContext
}
from "react";

import {
 ProgressContext
}
from "../context/ProgressContext";

import questions
from "../data/questions";

import DashboardCard
from "../components/DashboardCard";

import ProgressPieChart
from "../components/ProgressPieChart";

import ProgressBarChart
from "../components/ProgressBarChart";

import WeakTopics
from "../components/WeakTopics";

import StudyPlan
from "../components/StudyPlan";
import RevisionList
from "../components/RevisionList";

function Dashboard() {

 const {
  completedQuestions
 } =
 useContext(
  ProgressContext
 );

 const totalQuestions =
 questions.length;

 const solvedQuestions =
 completedQuestions.length;

 const progressPercent =
 Math.round(

  (
   solvedQuestions
   /
   totalQuestions
  )

  * 100

 );

 return (

  <div>

   <div
    className="grid"
   >

    <DashboardCard
     title="Total Questions"
     value={totalQuestions}
    />

    <DashboardCard
     title="Solved"
     value={solvedQuestions}
    />

    <DashboardCard
     title="Progress"
     value={
      progressPercent
      + "%"
     }
    />

   </div>

   <br />

   <div
    className="chart-grid"
   >

    <ProgressPieChart

     solvedQuestions={
      solvedQuestions
     }

     totalQuestions={
      totalQuestions
     }

    />

    <ProgressBarChart

     solvedQuestions={
      solvedQuestions
     }

     totalQuestions={
      totalQuestions
     }

    />

   </div>

   <br />

   <div
    className="chart-grid"
   >

    <WeakTopics />

    <StudyPlan />

   </div>
   <br />

<RevisionList />

  </div>

 );

}

export default Dashboard;