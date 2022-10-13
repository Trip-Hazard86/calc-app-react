import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

//this function call places your JSX into React's virtual DOM, which enables updating components without refresh
//ReactDOM is React's rendering API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
