// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// import ThemeProvider
// from "./context/ThemeContext";

// import "./styles/global.css";

// ReactDOM.createRoot(
//  document.getElementById("root")
// ).render(

//  <React.StrictMode>

//   <ThemeProvider>

//    <App />

//   </ThemeProvider>

//  </React.StrictMode>

// );

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import ThemeProvider
from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeContext";

console.log("ThemeProvider:", ThemeProvider);

import ProgressProvider
from "./context/ProgressContext";

import "./styles/global.css";

ReactDOM.createRoot(
 document.getElementById("root")
).render(

 <React.StrictMode>

  <ThemeProvider>

   <ProgressProvider>

    <App />

   </ProgressProvider>

  </ThemeProvider>

 </React.StrictMode>

);