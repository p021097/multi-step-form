import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Navigation from './components/Navigation/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {});

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, step }));
  }, [step, setFormData]);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
    localStorage.removeItem('formData');
    setFormData({});
    setStep(1);
  };

  return (
    <div className="App">
      <Navigation step={step} setStep={setStep} />
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;