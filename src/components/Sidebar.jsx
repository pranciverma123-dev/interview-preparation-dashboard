// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div
//       style={{
//         width:"250px",
//         height:"100vh",
//         background:"#111827",
//         padding:"20px"
//       }}
//     >
//       <h2>PrepAce</h2>

//       <br />

//       <Link to="/">
//         Dashboard
//       </Link>

//       <br />
//       <br />

//       <Link to="/questions">
//         Questions
//       </Link>

//       <br />
//       <br />

//       <Link to="/mock">
//         Mock Interview
//       </Link>

//     </div>
//   );
// }

// export default Sidebar;
// import { Link }
// from "react-router-dom";

// import ThemeToggle
// from "./ThemeToggle";

// function Sidebar() {

//   return (

//     <div className="sidebar">

//       <h2>
//         PrepAce
//       </h2>

//       <br />

//       <Link to="/">
//         Dashboard
//       </Link>

//       <br />
//       <br />

//       <Link to="/questions">
//         Questions
//       </Link>

//       <br />
//       <br />

//       <Link to="/mock">
//         Mock Interview
//       </Link>

//       <br />
//       <br />

//       <ThemeToggle />

//     </div>

//   );
// }

// export default Sidebar;
import { NavLink }
from "react-router-dom";

import ThemeToggle
from "./ThemeToggle";

function Sidebar({

 isOpen

}) {

 return (

  <div
   className={
    isOpen
    ? "sidebar open"
    : "sidebar"
   }
  >

   <h2>
    PrepAce
   </h2>

   <br />

   <NavLink
    to="/"
   >
    Dashboard
   </NavLink>

   <br />
   <br />

   <NavLink
    to="/questions"
   >
    Questions
   </NavLink>

   <br />
   <br />

   <NavLink
    to="/mock"
   >
    Mock Interview
   </NavLink>

   <br />
   <br />

   <ThemeToggle />

  </div>

 );

}

export default Sidebar;