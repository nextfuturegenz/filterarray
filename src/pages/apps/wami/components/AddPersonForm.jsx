import React, { useState } from 'react';

const AddPersonForm = ({ handleSubmit, dataInterface }) => {
  const initialFormData = dataInterface.reduce((acc, field) => {
    acc[field] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div >
      
      <div className="modal-body">
        {dataInterface.map((field) => (
          <div className="mb-3" key={field}>
            <label className="form-label">{field}</label>
            <input
              type="text"
              className="form-control"
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
            />
          </div>
        ))}
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={() => handleSubmit(formData)}>
          Add Person
        </button>
      </div>
    </div>
  );
};

export default AddPersonForm;
