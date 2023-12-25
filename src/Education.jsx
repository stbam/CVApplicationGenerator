import React, { useState } from "react";
import "./Education.css";
function Education() {
  //A section to add your educational experience (school name, title of study and date of study)

  return (
    <>
      <div className="education-details">
        <div className="inner-card">
          <div>
            <h2>Educational Experience</h2>
            <input type="text" className="input" />
          </div>
          <div>
            <h2>School name:</h2>
            <input type="text" className="input" />
          </div>
          <div>
            <h2>Title: </h2>
            <input type="text" className="input" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
