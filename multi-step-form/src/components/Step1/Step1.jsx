import React, { useState } from "react";
import "./Step1.css";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Valid email is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
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
          <h2>Step 1: Personal Information</h2>
        </div>
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Name"
            value={formData.name || ""}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <input
            type="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <input
            type="text"
            placeholder="Phone"
            value={formData.phone || ""}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default Step1;
