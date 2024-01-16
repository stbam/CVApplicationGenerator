import { useState } from "react";
import "./Generalinfo.css";
import "./left-side-font.css";

function GeneralInfo({
  inputValue,
  onInputChange,
  PhoneNumber,
  onPhoneNumberChange,
  onEmailChange,
  onLocationChange,
}) {
  const onChangeHandle = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
    onInputChange(newValue);
  };
  const onPhoneNumberChangeHandle = (e) => {
    const newPhoneNumberValue = e.target.value;

    console.log(newPhoneNumberValue);
    onPhoneNumberChange(newPhoneNumberValue);
  };
  const onEmailChangeHandle = (e) => {
    const newEmailValue = e.target.value;
    onEmailChange(newEmailValue);
  };
  const onLocationChangeHandle = (e) => {
    const newLocationValue = e.target.value;
    onLocationChange(newLocationValue);
  };
  function handlePrint() {
    const printableContent = document.getElementsByClassName('output-section')[0].innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="Generalinfo.css">')
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="left-side-font.css">')
    printWindow.document.write(printableContent);
    printWindow.document.write('</body></html>');
    printWindow.focus();
    setTimeout(function(){printWindow.print();},1000);
    printWindow.document.close();

    
  }
  
  //A section to add general information like name, email and phone number.
  return (
    <>
      <div className="personal-details">
        <div className="inner-card">
          <div className="card-title">
            <h1>Personal Details </h1>
            <h3 id="print" onClick={handlePrint}>Print</h3>
          </div>
         
          <div>
            <h2>Name:{inputValue}</h2>
            <input
              type="text"
              className="input"
              value={inputValue}
              onChange={onChangeHandle}
              placeholder="First and Last Name"
            />
          </div>

          <div>
            <h2>Email:</h2>
            <input
              type="text"
              className="input"
              onChange={onEmailChangeHandle}
              placeholder="Enter email"
            />
          </div>

          <div>
            <h2>Phone Number:</h2>
            <input
              type="text"
              className="input"
              value={PhoneNumber}
              onChange={onPhoneNumberChangeHandle}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <h2> Location:{}</h2>
            <input
              type="text"
              className="input"
              onChange={onLocationChangeHandle}
              placeholder = "Enter location"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
