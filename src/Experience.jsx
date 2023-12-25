import React, { useState } from "react";
import "./Experience.css";
function Experience() {
  //A section to add practical experience (company name, position title,
  //main responsibilities of your jobs, date from and until when you worked for that company)

  return (
    <>
      <div className="experience">
        <div className="inner-card">
          <div>
            <h2>Experience</h2>
            <input type="text" className="input" />
          </div>
          <div>
            <h2>Company name:</h2> {/* on click should expand*/}
            <input type="text" className="input" />
          </div>
          <div>
            <h2>Position Title: </h2>
            <input type="text" className="input" />
          </div>
        </div>

        {/* on click should expand*/}

        {/* on click should expand*/}
      </div>
    </>
  );
}

export default Experience;
