import React from "react";
import GeneralInfo from "./Generalinfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Page from "./Page.jsx";
import { useState } from "react";
import ParentComponent from "./ParentComponent.jsx";

function App(){
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (value) => {
      setInputValue(value);
    };

    return(
        <>
        <div className="main-container">
      <div className="input-section">
        <GeneralInfo  onInputChange={handleInputChange} />
        <Education />
        <Experience />
      </div>

      <div className="output-section">
        <Page inputValue={inputValue}/>
        <ParentComponent/>
        
      </div>
    </div>
        </>
    )
}
export default App;