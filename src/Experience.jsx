import React, { useState } from "react";
import "./Experience.css";
function Experience({onExperienceChange,onNewCompanyNameChange,onNewPositionTitle,onNewLocation,onNewStartDate,onNewEndDate}) {
  //A section to add practical experience (company name, position title,        
  //main responsibilities of your jobs, date from and until when you worked for that company)
  const onExperienceHandle =(e)=>{
      const newExperienceValue = e.target.value;
      onExperienceChange(newExperienceValue);
  }
const onNewCompanyNameChangeHandle=(e)=>{
  const NewPositionTitle = e.target.value;
  onNewCompanyNameChange(NewPositionTitle)
}

const onNewPositionTitleChangeHandle=(e)=>{
  const NewPositionTitle = e.target.value;
  onNewPositionTitle(NewPositionTitle)
}
const onNewLocationChangeHandle=(e)=>{
  const NewPositionTitle = e.target.value;
  onNewLocation(NewPositionTitle)
}
const onNewStartDateHandle=(e)=>{
  const NewPositionTitle = e.target.value;
  onNewStartDate(NewPositionTitle)
}
const onNewEndDateHandle=(e)=>{
  const NewPositionTitle = e.target.value;
  onNewEndDate(NewPositionTitle)
}
  return (
    <>
      <div className="experience">
        <div className="inner-card">
          <div>
            <h2>Experience</h2>
            <input type="text" 
            className="input" 
            placeholder="Enter Experience Title" 
            onChange={onExperienceHandle} />
          </div>
          <div>
            <h2>Company name:</h2> {/* on click should expand*/}
            <input type="text" 
            className="input" 
            placeholder="Enter Company Name"
            onChange={onNewCompanyNameChangeHandle}
            
            />
          </div>
          <div>
            <h2>Position Title: </h2>
            <input type="text" className="input" placeholder="Enter Title"onChange={onNewPositionTitleChangeHandle} />
          </div>
          <div className="dates">
            <div className="individ-date">           
              <h2 > Start Date</h2>
              <input type="text" className="input"  placeholder="Enter start date" onChange={onNewStartDateHandle}/>
            </div>
              <div className="individ-date">
                <h2 >End Date</h2>
                <input type="text" className="input" placeholder="Enter end date"onChange={onNewEndDateHandle}/>
              </div>
          </div>
          <div>
            <div>
              <h2>Location</h2>
              <input type="text" className="input"  placeholder="Enter location details" onChange={onNewLocationChangeHandle}/>
            </div>
          </div>
        
        </div>

        {/* on click should expand*/}

        {/* on click should expand*/}
      </div>
    </>
  );
}

export default Experience;
