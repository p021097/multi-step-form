import React, { useState } from "react";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.address1) tempErrors.address1 = "Address Line 1 is required";
    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.state) tempErrors.state = "State is required";
    if (!formData.zipCode) tempErrors.zipCode = "Zip Code is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      nextStep();
    }
  };

  return (
    <div className="form">
      <form className="form-container">
        <div className="form-title">
          <h2>Step 2: Address Information</h2>
        </div>

        <div className="form-inputs">


        <input
          type="text"
          placeholder="Address Line 1"
          value={formData.address1 || ""}
          onChange={(e) =>
            setFormData({ ...formData, address1: e.target.value })
          }
        />
        {errors.address1 && <div className="error">{errors.address1}</div>}
        <input
          type="text"
          placeholder="Address Line 2"
          value={formData.address2 || ""}
          onChange={(e) =>
            setFormData({ ...formData, address2: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.city || ""}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
        {errors.city && <div className="error">{errors.city}</div>}
        <input
          type="text"
          placeholder="State"
          value={formData.state || ""}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
        {errors.state && <div className="error">{errors.state}</div>}
        <input
          type="text"
          placeholder="Zip Code"
          value={formData.zipCode || ""}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
        />
        {errors.zipCode && <div className="error">{errors.zipCode}</div>}
        </div>

        <button onClick={prevStep}>Back</button>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step2;
