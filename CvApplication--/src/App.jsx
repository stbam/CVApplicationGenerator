import React from "react";
import GeneralInfo from "./Generalinfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Page from "./Page.jsx";
import { useState } from "react";
import ParentComponent from "./ParentComponent.jsx";

function App(){
    const [inputValue, setInputValue] = useState("Bob Hoskins"); //default value
    const [PhoneNumber,setPhoneNumber] = useState("(xxx)-xxx-xxxx");
    const [emailValue,setEmailValue] = useState("@gmail.com");
    const [locationValue,setLocationValue]= useState("London");

    const handleInputChange = (value) => {
      setInputValue(value);
    }; 
    const handlePhoneNumber =(value)=>{
        setPhoneNumber(value);
    }
    const handleEmailChange =(value)=>{
        setEmailValue(value);
    }
    const handleLocationChange=(value)=>{
        setLocationValue(value);
    }
    return(
        <>
        <div className="main-container">
      <div className="input-section">
        <GeneralInfo  
        onInputChange={handleInputChange} 
        onPhoneNumberChange={handlePhoneNumber}
        onEmailChange={handleEmailChange}
        onLocationChange={handleLocationChange}
        />
        <Education />
        <Experience />
      </div>

      <div className="output-section">
        <Page 
        inputValue={inputValue}
        PhoneNumber={PhoneNumber}
        emailValue={emailValue}
        locationValue={locationValue}
        />

        <ParentComponent/>
        
      </div>
    </div>
        </>
    )
}
export default App;