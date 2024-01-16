import React from "react";
import GeneralInfo from "./Generalinfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Page from "./Page.jsx";
import { useState } from "react";
import ParentComponent from "./ParentComponent.jsx";

  const useFormInput=(initialValue)=>{
      const [value,setValue]=useState(initialValue);
      const handleChange= (newValue)=>setValue(newValue);
      return [value,handleChange];
    } /* implemented custom hook to reduce the repetition of the same function*/

function App() {
  const [inputValue, setInputValue] = useFormInput("Bob Hoskins"); //default value
  const [PhoneNumber, setPhoneNumber] = useFormInput("(xxx)-xxx-xxxx");
  const [emailValue, setEmailValue] = useFormInput("@gmail.com");
  const [locationValue, setLocationValue] = useFormInput("London");
 const [schoolName,setSchoolName] = useFormInput("London City University")
  const [degree,setDegree] = useFormInput("Bachelors in Economics")
  const [startDate,setStartDate] = useFormInput("08/2020")
  const [endDate,setEndDate]=useFormInput("present")
  const [Location,setLocation]=useFormInput("New York City, US")  


const[Experience,setExperience] =useFormInput("Professional Experience")
/* ------------------------------------------------------------------*/


  return (
    <>
      <div className="main-container">
        <div className="input-section">
          <GeneralInfo
            onInputChange={setInputValue}
            onPhoneNumberChange={setPhoneNumber}
            onEmailChange={setEmailValue}
            onLocationChange={setLocationValue}
          />
          <Education onSchoolNameChange={setSchoolName}
                      onDegreeChange={setDegree}
                      
                      onLocationChange={setLocation}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
          />
          
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
