import React from 'react';
import './Navigation.css'


const Navigation = ({ step, setStep }) => {
  
  return (
    <div className="navigation">
      <button onClick={() => setStep(1)} >Step 1</button>
      <button onClick={() => setStep(2)} disabled={step < 2}>Step 2</button>
      <button onClick={() => setStep(3)} disabled={step < 3}>Step 3</button>
    </div>
  );
};

export default Navigation;
