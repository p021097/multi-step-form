import React from 'react';

const Step3 = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div className='form'>

      <form className='form-container'>
      <div className="form-title">
      <h2>Step 3: Confirmation</h2>
        </div>
      <div className="form-inputs">
      <div>
        <h3>Personal Information</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address Line 1: {formData.address1}</p>
        <p>Address Line 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zipCode}</p>
      </div>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Step3;
