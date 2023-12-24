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

        <div className="container">
              <h1 className="sub-title">Education</h1>
              <div className="inner-container">
                <div className="inner-content">
                      <p> 08/2020 - present</p>  
                      <p> New York City, US</p>
                </div>
                
                <div className="inner-content">
                  <p><strong>London City University</strong></p>
                  <p>Bachelors in Economics</p>     
                </div>
              </div>

        </div>

        <div className="container">
        <h1 className="sub-title">Professional Experience</h1>
              
        <div className="inner-container">
                <div > {/*className="inner-content"*/}
                      <p> 08/2020 - present</p>  
                      <p> New York City, US</p>
                </div>
                <div className="inner-content" id="inner-width-mod">
                  <div className="experience-title">
                  <p><strong>Umbrella Inc.</strong></p>
                  <p>UX &amp; UI Designer</p> {/*This ensures that the ampersand is rendered     correctly on the web page and doesn't interfere with HTML parsing*/}
                  </div>
          
                  <p className="experience-details" >Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.</p>
                </div>
              </div>
              
              <div className="inner-container">
                <div > {/*className="inner-content"*/}
                      <p> 08/2020 - present</p>  
                      <p> New York City, US</p>
                </div>
                <div className="inner-content" id="inner-width-mod">
                  <div className="experience-title">
                  <p><strong>Umbrella Inc.</strong></p>
                  <p>UX &amp; UI Designer</p> {/*This ensures that the ampersand is rendered     correctly on the web page and doesn't interfere with HTML parsing*/}
                  </div>
          
                  <p className="experience-details" >Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.</p>
                </div>
              </div>
       



        </div>


      
    </>
  );
}

export default Page;
