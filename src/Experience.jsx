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
            <input type="text" className="input" placeholder="Enter Experience Title" />
          </div>
          <div>
            <h2>Company name:</h2> {/* on click should expand*/}
            <input type="text" className="input" placeholder="Enter Company Name" />
          </div>
          <div>
            <h2>Position Title: </h2>
            <input type="text" className="input" placeholder="Enter Title" />
          </div>
          <div className="dates">
            <div className="individ-date">           
              <h2 > Start Date</h2>
              <input type="text" className="input"  placeholder="Enter start date"/>
            </div>
              <div className="individ-date">
                <h2 >End Date</h2>
                <input type="text" className="input" placeholder="Enter end date" />
              </div>
          </div>
          <div>
            <div>
              <h2>Location</h2>
              <input type="text" className="input"  placeholder="Enter location details"/>
            </div>
          </div>
          <div>
            <div>
              <h2>Experience</h2>
              <input type="text" className="input" placeholder="Enter experience details" />
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
