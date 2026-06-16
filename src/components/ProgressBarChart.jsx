import {

 BarChart,

 Bar,

 XAxis,

 YAxis,

 CartesianGrid,

 Tooltip,

 ResponsiveContainer

}

from "recharts";

function ProgressBarChart({

 solvedQuestions,

 totalQuestions

}) {

 const data = [

  {
   name: "Solved",

   value:
   solvedQuestions
  },

  {
   name: "Remaining",

   value:
   totalQuestions -
   solvedQuestions
  }

 ];

 return (

  <div className="chart-card">

   <h2>
    Questions Analytics
   </h2>

   <ResponsiveContainer

    width="100%"

    height={300}

   >

    <BarChart
     data={data}
    >

     <CartesianGrid
      strokeDasharray=
      "3 3"
     />

     <XAxis
      dataKey="name"
     />

     <YAxis />

     <Tooltip />

     <Bar
      dataKey="value"
      fill="#2563eb"
     />

    </BarChart>

   </ResponsiveContainer>

  </div>

 );

}

export default ProgressBarChart;