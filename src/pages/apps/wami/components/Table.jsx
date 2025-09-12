import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt, FaEye } from 'react-icons/fa';

const TableComponent = ({ data, dataInterface }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filter data based on search term
    const filteredData = data.filter(person =>
        Object.values(person).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const handleItemsPerPageChange = event => {
        setCurrentPage(1);
        setItemsPerPage(parseInt(event.target.value, 10));
    };
    const handleSearchChange = event => {
        setCurrentPage(1);
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <nav className="d-flex justify-content-between align-items-center mb-3">
                <div id="searchBar" className="col-md-6">
                    <label htmlFor="search">Search People:</label>
                    <input
                        type="text"
                        id="search"
                        className="form-control"
                        placeholder="Type to search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div id="paginationAndPerPage" className="d-flex-column align-items-center">
                    <label htmlFor="itemsPerPage">Page Number: </label>
                    <div id="paginationButton" className="pagination mr-3">
                        {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
                            <div key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="selectPerPage" className="form-group">
                    <label htmlFor="itemsPerPage">Items Per Page:</label>
                    <select
                        id="itemsPerPage"
                        className="form-control"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </nav>



            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        {dataInterface.map((field, index) => (
                            <th key={index}>{field}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(person => (
                        <tr key={person.id}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            {dataInterface.map((field, index) => (
                                <td key={index}>{person[field]}</td>
                            ))}
                            <td>
                                <button className="btn btn-outline-primary"><FaPencilAlt /></button>
                                <button className="btn btn-outline-danger"><FaTrashAlt /></button>
                                <button className="btn btn-outline-info"><FaEye /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
