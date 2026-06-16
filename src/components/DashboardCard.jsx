// function DashboardCard({

//  title,
//  value

// }) {

//  return (

//   <div className="card">

//    <h3>
//     {title}
//    </h3>

//    <h1>
//     {value}
//    </h1>

//   </div>

//  );

// }

// export default DashboardCard;
function DashboardCard({

 title,
 value

}) {

 return (

  <div
   className="card"
  >

   <h3>
    {title}
   </h3>

   <h1
    className="count"
   >
    {value}
   </h1>

  </div>

 );

}

export default DashboardCard;