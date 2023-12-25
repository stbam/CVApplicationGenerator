import React from "react";
import GeneralInfo from "./Generalinfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Page from "./Page.jsx";
import { useState } from "react";
import ParentComponent from "./ParentComponent.jsx";

function App() {
  const [inputValue, setInputValue] = useState("Bob Hoskins"); //default value
  const [PhoneNumber, setPhoneNumber] = useState("(xxx)-xxx-xxxx");
  const [emailValue, setEmailValue] = useState("@gmail.com");
  const [locationValue, setLocationValue] = useState("London");
 const [schoolName,setSchoolName] = useState("London City University")
  const [degree,setDegree] = useState("Bachelors in Economics")
  const [startDate,setStartDate] = useState("08/2020")
  const [endDate,setEndDate]=useState("present")
  const [Location,setLocation]=useState("New York City, US")  

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
  };
  const handleEmailChange = (value) => {
    setEmailValue(value);
  };
  const handleSchoolNameChange=(value)=>{
    setSchoolName(value);
  }
  const handleDegreeChange=(value)=>{
    setDegree(value);
  }
  const handleLocationChange = (value) => {
    setLocation(value);
  };

const handleStartDateChange=(value)=>{
  setStartDate(value);
}
const handleEndDateChange=(value)=>{
  setEndDate(value);
}

  return (
    <>
      <div className="main-container">
        <div className="input-section">
          <GeneralInfo
            onInputChange={handleInputChange}
            onPhoneNumberChange={handlePhoneNumber}
            onEmailChange={handleEmailChange}
            onLocationChange={handleLocationChange}
          />

          <Education onSchoolNameChange={handleSchoolNameChange}
                      onDegreeChange={handleDegreeChange}
                      
                      onLocationChange={handleLocationChange}
                      onStartDateChange={handleStartDateChange}
                      onEndDateChange={handleEndDateChange}
          />
          <Experience />
        </div>

        <div className="output-section">
          <Page
            inputValue={inputValue}
            PhoneNumber={PhoneNumber}
            emailValue={emailValue}
            locationValue={locationValue}
            schoolName={schoolName}
            degree={degree}      
            startDate={startDate}
            endDate={endDate}
            Location={Location}
          />

          <ParentComponent />
        </div>
      </div>
    </>
  );
}
export default App;
