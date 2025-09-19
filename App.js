import React from "react";
import ReactDOM from "react-dom/client";

// React Element 

const heading = React.createElement(
   "h1",
    {id: "heading"},
     "Hello React🚀"
   );
console.log(heading);


// JSX - JavaScript XML  

const jsxHeading = <h1 id="heading">Hello React - we are using JSX🚀</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);