import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://parents-follow-u.onrender.com/followup/contactus/listMessage');
      if (Array.isArray(response.data)) {
        setMessages(response.data);
      } else {
        throw new Error('API response is not an array');
      }
      setLoading(false);
    } catch (error) {
      console.error("Fetch messages error:", error.response?.data || error.message);
      setError(error.response?.data?.message || 'An error occurred while fetching messages.');
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`https://parents-follow-u.onrender.com/followup/contactus/delete/${id}`);
      const updatedMessages = messages.filter(message => message.id!== id);
      setMessages(updatedMessages);
      console.log("Post deleted:", id);
    } catch (error) {
      console.error("Error deleting message:", error);
      setError(error.response?.data?.message || 'An error occurred while deleting the message.');
    }
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading messages: {error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Messages from Parents</h2>
      <div className="max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <div key={message.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">{message.fullName}</h3>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Message:</strong> {message.message}</p>
              <p><strong>Date:</strong> {new Date(message.createdAt).toLocaleDateString()}</p>
              <button
                onClick={() => deleteMessage(message.id)}
                className="mt-4 inline-block bg-teal-600 text-white py-2 px-4 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
