import {
 PieChart,
 Pie,
 Cell,
 Tooltip,
 Legend,
 ResponsiveContainer
}
from "recharts";

function ProgressPieChart({

 solvedQuestions,

 totalQuestions

}) {

 const data = [

  {
   name: "Solved",
   value: solvedQuestions
  },

  {
   name: "Remaining",
   value:
    totalQuestions -
    solvedQuestions
  }

 ];

 const COLORS = [

  "#22c55e",
  "#ef4444"

 ];

 return (

  <div className="chart-card">

   <h2>
    Progress Overview
   </h2>

   <ResponsiveContainer
    width="100%"
    height={300}
   >

    <PieChart>

     <Pie

      data={data}

      cx="50%"

      cy="50%"

      outerRadius={100}

      dataKey="value"

      label

     >

      {

       data.map(
        (
         entry,
         index
        ) => (

         <Cell

          key={index}

          fill={
            COLORS[
             index
            ]
          }

         />

        )
       )

      }

     </Pie>

     <Tooltip />

     <Legend />

    </PieChart>

   </ResponsiveContainer>

  </div>

 );

}

export default ProgressPieChart;