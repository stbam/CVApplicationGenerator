import React from "react";
import "./Education.css";

function Education({ onSchoolNameChange,onDegreeChange}) {
  const onSchoolChange = (e) => {
    const newValue = e.target.value;
    //console.log(newValue);
    onSchoolNameChange(newValue);
  };
const onDegreeNameChange=(e)=>{
  const newValue=e.target.value;
onDegreeChange(newValue)
}

  return (
    <>
      <div className="education-details">
        <div className="inner-card">
          <div>
            <h2>School name:</h2>
            {/* Use onSchoolChange as the onChange handler */}
            <input type="text" className="input" onChange={onSchoolChange} />
          </div>
          <div>
            <h2>Degree: </h2>
            <input type="text" className="input" onChange={onDegreeNameChange} />
          </div>
          <div>
            <h2>Start Date:</h2>
            <input type="text" className="input" />
          </div>
          <div>
            <h2>End Date:</h2>
            <input type="text" className="input" />
          </div>
          <div>
            <h2>Location:</h2>
            <input type="text" className="input" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
