import React, { useState } from 'react';
import TableComponent from './components/Table';
import GenericModal from './components/GenericModal';
import AddPersonForm from './components/AddPersonForm';
import UploadCSV from './components/UploadCsv';

const WhatsAppCustomers = () => {
    const peopleData = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', address: '123 Main St', poBox: 'PO123', gstNumber: 'GST123' },
    ];

    const [showAddPersonModal, setShowAddPersonModal] = useState(false);
    const [showUploadCSVModal, setShowUploadCSVModal] = useState(false);

    const handleShowAddPersonModal = () => setShowAddPersonModal(true);
    const handleShowUploadCSVModal = () => setShowUploadCSVModal(true);

    const handleCloseModal = () => {
        setShowAddPersonModal(false);
        setShowUploadCSVModal(false);
    };

    const handleAddPersonSubmit = (formData) => {
        // Handle form submission logic for adding a person
        console.log('Add Person Data:', formData);
        handleCloseModal();
    };

    const handleUploadCSVSubmit = (csvFile) => {
        // Handle CSV upload logic here
        console.log('CSV File:', csvFile);
        handleCloseModal();
    };

    const dataInterface = ['id', 'name', 'email', 'phone', 'address', 'poBox', 'gstNumber'];

    return (
        <div className="container-fluid p-2">
            <div className="row mb-3">
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={handleShowAddPersonModal} type="button">
                        Add New
                    </button>
                    <button className="btn btn-secondary" style={{ marginRight: '10px' }} onClick={handleShowUploadCSVModal} type="button">
                        Upload CSV
                    </button>
                    <button className="btn btn-success" type="button">
                        Download Data
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <TableComponent data={peopleData} dataInterface={dataInterface} />
                </div>
            </div>

            {/* Add Person Modal */}
            <GenericModal
                showModal={showAddPersonModal}
                handleClose={handleCloseModal}
                title="Add New Person"
            >
                <AddPersonForm handleSubmit={handleAddPersonSubmit} dataInterface={dataInterface} />
            </GenericModal>

            {/* Upload CSV Modal */}
            <GenericModal
                showModal={showUploadCSVModal}
                handleClose={handleCloseModal}
                title="Upload CSV"
            >
                <UploadCSV handleSubmit={handleUploadCSVSubmit} />
            </GenericModal>
        </div>

    );
};

export default WhatsAppCustomers;
