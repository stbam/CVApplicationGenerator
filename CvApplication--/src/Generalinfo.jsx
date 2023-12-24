import { useState } from "react";
import "./App.css";

function GeneralInfo({ inputValue, onInputChange,PhoneNumber,onPhoneNumberChange,onEmailChange,onLocationChange}) {

  const onChangeHandle =(e)=>{
    const newValue = e.target.value;
    console.log(newValue);
    onInputChange(newValue);
  }
  const onPhoneNumberChangeHandle = (e) => {
    const newPhoneNumberValue = e.target.value;

    console.log(newPhoneNumberValue);
    onPhoneNumberChange(newPhoneNumberValue);
  };
  const onEmailChangeHandle =(e)=>{
    const newEmailValue= e.target.value;
    onEmailChange(newEmailValue)
  }
  const onLocationChangeHandle=(e)=>{
    const newLocationValue=e.target.value;
    onLocationChange(newLocationValue)
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
            <input type="text" className="input" onChange={onEmailChangeHandle}/>
          </div>

          <div>
            <h2>Phone Number:</h2>
            <input type="text" className="input" value={PhoneNumber}  onChange={onPhoneNumberChangeHandle}/>
          </div>

          <div>
            <h2> Location:{ }</h2>
            <input type="text" className="input" onChange={onLocationChangeHandle} />
          </div>

        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
