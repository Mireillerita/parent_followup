import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-tailwind/react';

const Dcourse = () => {
  const [parents, setParents] = useState([]);
  const [selectedParent, setSelectedParent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    try {
      const response = await axios.get(
        'https://parents-follow-u.onrender.com/followup/parents/list'
      );
      const dataArray = Array.isArray(response.data.getParents)
        ? response.data.getParents
        : [];
      setParents(dataArray);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchParentById = async (id) => {
    try {
      setSelectedParent(parentDetails);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleAddParentClick = () => {
    console.log('Add Parent button clicked');
    // Logic for handling the add parent action can be implemented here.
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-semibold mb-4">Loading...</h2>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <Button onClick={handleAddParentClick} ripple="dark">
          Add Parent
        </Button>
      </div>
      <h2 className="text-center text-2xl font-semibold mb-4">
        Display Parent Details
      </h2>

      <table className="w-full overflow-x-auto mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Parent Name</th>
            <th>Email</th>
            <th>Child Name</th>
            <th>Category</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent, index) => (
            <tr key={index}>
              <td>{parent._id}</td>
              <td>{parent.parentName}</td>
              <td>{parent.parentEmail}</td>
              <td>{parent.childName}</td>
              <td>{parent.category}</td>
              <td>{parent.parentContact}</td>
            </tr>
          ))}
          {selectedParent && (
            <tr>
              <td colSpan="6">{selectedParent._id}</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedParent && (
        <div className="mt-4 p-4 bg-teal-600 shadow-md rounded-lg">
          <h3>Selected Parent Details:</h3>
          <p>ID: {selectedParent._id}</p>
          <p>Name: {selectedParent.parentName}</p>
          <p>Email: {selectedParent.parentEmail}</p>
          <p>Child Name: {selectedParent.childName}</p>
          <p>Category: {selectedParent.category}</p>
          <p>Contact: {selectedParent.parentContact}</p>
        </div>
      )}
    </div>
  );
};

export default Dcourse;
