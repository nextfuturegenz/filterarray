import React, { useState } from 'react';

const UploadCSV = ({ handleSubmit }) => {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle file change logic (e.g., store the file in state)
    setCsvFile(file);
  };

  return (
    <div>
      <div className="modal-body">
        <label className="form-label">Upload CSV File</label>
        <input className="form-control" type="file" accept=".csv" onChange={handleFileChange} />
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" onClick={() => handleSubmit(csvFile)}>
          Import Data
        </button>
      </div>
    </div>
  );
};

export default UploadCSV;
