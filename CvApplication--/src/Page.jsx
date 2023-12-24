import React, { useState } from "react";
import "./Page.css";


function Page({inputValue,PhoneNumber,emailValue,locationValue}) {
  //A section to add your educational experience (school name, title of study and date of study)
const name=inputValue;
  //console.log(name+"new")
  //console.log(PhoneNumber +"new")
  return (
    <>
    
      <div className="general-info">
        <h1 className="user" >{name}</h1>
        <div className="personal-info">
          <h3>Email:{emailValue}</h3>
          <h3>Phone: {PhoneNumber}</h3>
          <h3>Location:{ locationValue /*  " "+*/}</h3>
        </div>
      </div>

      
    </>
  );
}

export default Page;
