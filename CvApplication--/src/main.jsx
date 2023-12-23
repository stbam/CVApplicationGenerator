import React from "react";
import ReactDOM from "react-dom/client";
import GeneralInfo from "./Generalinfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Page from "./Page.jsx";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
 

  <React.StrictMode>
    <div className="main-container">
      <div className="input-section">
        <GeneralInfo />
        <Education />
        <Experience />
      </div>

      <div className="output-section">
        <Page/>
      </div>
    </div>
  </React.StrictMode>,
);
