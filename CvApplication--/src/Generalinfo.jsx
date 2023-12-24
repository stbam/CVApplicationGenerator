import { useState } from "react";
import "./App.css";

function GeneralInfo({ inputValue, onInputChange }) {
  

  const onChangeHandle =(e)=>{
    const newValue = e.target.value;
    onInputChange(newValue);
  }

  //A section to add general information like name, email and phone number.
  return (
    <>
      <div className="personal-details">
        <div className="inner-card">
          <h1>Personal Details </h1>
          <div>
            <h2>Name:{inputValue}</h2>
            <input type="text" className="input" value={inputValue} 
            onChange={onChangeHandle} />
          </div>

          <div>
            <h2>Email:</h2>
            <input type="text" className="input" />
          </div>

          <div>
            <h2>Phone Number:</h2>
            <input type="text" className="input" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
