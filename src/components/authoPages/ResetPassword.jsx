import React, { useState } from 'react'; // Add useState here
import axios from 'axios';
import { Link } from 'react-router-dom';

const Resetpass = () => {
  const [email, setEmail] = useState(''); // Now useState is available

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        'https://parents-follow-u.onrender.com/followup/user/resetpassword',
        { email }
      );
      console.log(response.data); // Handle success
    } catch (error) {
      console.error(error.response?.data || error.message); // Handle error
    }
  };
  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-center font-bold pb-4">
          RESET ACCOUNT PASSWORD
        </h1>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />
        </div>

        <Link to="/ConfirmNewPass">
          <button
            onClick={handleResetPassword}
            className="w-full py-2 rounded-md bg-teal-600 text-white hover:bg-blue-700focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Reset Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resetpass;
