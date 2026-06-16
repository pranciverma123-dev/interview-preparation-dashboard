// import {
//  BrowserRouter,
//  Routes,
//  Route,
// } from "react-router-dom";

// import Sidebar
// from "./components/Sidebar";
// import MockInterview
// from "./pages/MockInterview";

// import Dashboard
// from "./pages/Dashboard";

// import Questions
// from "./pages/Questions";

// function App() {

//   return (
//     <BrowserRouter>

//       <div className="app">

//         <Sidebar />

//         <div className="main">

//           <Routes>

//             <Route
//               path="/"
//               element={
//                 <Dashboard />
//               }
//             />

//             <Route
//               path="/questions"
//               element={
//                 <Questions />
//               }
//             />

//           </Routes>
//           <Route
//  path="/mock"
//  element={<MockInterview />}
// />

//         </div>

//       </div>

//     </BrowserRouter>
//   );
// }

// export default App;
// import {
//  BrowserRouter,
//  Routes,
//  Route,
// } from "react-router-dom";

// import { useContext }
// from "react";

// import {
//  ThemeContext
// }
// from "./context/ThemeContext";

// import Sidebar
// from "./components/Sidebar";

// import Dashboard
// from "./pages/Dashboard";

// import Questions
// from "./pages/Questions";

// import MockInterview
// from "./pages/MockInterview";

// function App() {

//   const {
//     darkMode
//   } =
//   useContext(
//     ThemeContext
//   );

//   return (

//    <div
//     className={
//       darkMode
//       ? "dark-theme"
//       : "light-theme"
//     }
//    >

//     <BrowserRouter>

//       <div className="app">

//         <Sidebar />

//         <div className="main">

//           <Routes>

//             <Route
//               path="/"
//               element={
//                 <Dashboard />
//               }
//             />

//             <Route
//               path="/questions"
//               element={
//                 <Questions />
//               }
//             />

//             <Route
//               path="/mock"
//               element={
//                 <MockInterview />
//               }
//             />

//           </Routes>

//         </div>

//       </div>

//     </BrowserRouter>

//    </div>

//   );
// }

// export default App;
import {
 BrowserRouter,
 Routes,
 Route
}
from "react-router-dom";

import {
 useContext,
 useState
}
from "react";

import {
 ThemeContext
}
from "./context/ThemeContext";

import Sidebar
from "./components/Sidebar";

import Navbar
from "./components/Navbar";

import Dashboard
from "./pages/Dashboard";

import Questions
from "./pages/Questions";

import MockInterview
from "./pages/MockInterview";

function App() {

 const {
  darkMode
 } =
 useContext(
  ThemeContext
 );

 const [
  isOpen,

  setIsOpen

 ] =
 useState(false);

 const toggleSidebar =
 () => {

  setIsOpen(
   !isOpen
  );

 };

 return (

  <div
   className={
    darkMode
    ? "dark-theme"
    : "light-theme"
   }
  >

   <BrowserRouter>

    <Navbar
     toggleSidebar=
     {toggleSidebar}
    />

    <div
     className="app"
    >

     <Sidebar
      isOpen={
       isOpen
      }
     />

     <div
      className="main"
     >

      <Routes>

       <Route

        path="/"

        element={
         <Dashboard />
        }

       />

       <Route

        path="/questions"

        element={
         <Questions />
        }

       />

       <Route

        path="/mock"

        element={
         <MockInterview />
        }

       />

      </Routes>

     </div>

    </div>

   </BrowserRouter>

  </div>

 );

}

export default App;
// import { useContext } from "react";
// import { ThemeContext } from "./context/ThemeContext";

// function App() {

//   const data = useContext(ThemeContext);

//   console.log("Theme Data:", data);

//   return (
//     <h1>Check Console</h1>
//   );
// }

// export default App;