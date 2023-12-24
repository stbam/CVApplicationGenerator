// ParentComponent.js
import React, { useState } from 'react';
import Generalinfo from './Generalinfo.jsx';
import Page from './Page';

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div>
    { /* <Generalinfo inputValue={inputValue} onInputChange={handleInputChange} />
      <Page inputValue={inputValue} /> */}
    </div>
  );
};

export default ParentComponent;
