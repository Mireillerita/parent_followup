// Import React hooks
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Define the Books component
const Books = () => {
  // Initialize states for storing books from both URLs
  const [books, setBooks] = useState([]);
  const [newBooks, setNewBooks] = useState([]);

  // Effect hook to fetch data from both URLs when the component mounts
  useEffect(() => {
    // Fetching data from the original URL
    fetch('https://parents-follow-u.onrender.com/followup/book/list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error('Error fetching data:', error));

    // Fetching data from the new URL
    fetch('https://api.example.com/data') // Replace with your actual new URL
      .then((response) => response.json())
      .then((data) => setNewBooks(data)) // Assuming the structure matches what you expect
      .catch((error) => console.error('Error fetching new data:', error));
  }, []);

  // Placeholder function for updating a book
  const handleUpdateBook = (bookId) => {
    console.log(`Updating book with ID: ${bookId}`);
    // Implement update logic here
  };

  // Placeholder function for deleting a book
  const handleDeleteBook = (bookId) => {
    console.log(`Deleting book with ID: ${bookId}`);
    // Implement delete logic here
  };

  // Function to handle adding a new book
  const handleAddBook = () => {
    console.log('Adding a new book');
    // Implement add logic here
  };

  // Render the component
  return (
    <div>
      {/* Add Book Button */}
      {/* <Link to="/AddB">
        <button
          onClick={handleAddBook}
          className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10"
        >
          Add Book
        </button>
      </Link> */}

      {/* Displaying books from the original URL */}
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:-translate-y-1 hover:shadow-lg w-64"
          >
            <img
              className="w-full h-48 object-cover"
              src={book.image.url}
              alt={book.bookName}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{book.bookName}</h3>
              <p className="mt-2 text-gray-600">By: {book.writerName}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Displaying books from the new URL */}
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-8">
        {newBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:-translate-y-1 hover:shadow-lg w-64"
          >
            <img
              className="w-full h-48 object-cover"
              src={book.image.url}
              alt={book.bookName}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{book.bookName}</h3>
              <p className="mt-2 text-gray-600">By: {book.writerName}</p>
              <p className="mt-2 text-gray-600">{book.description}</p>
              <button
                onClick={() => handleUpdateBook(book._id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteBook(book._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Books component
export default Books;
