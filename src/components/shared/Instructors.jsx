import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Fetch instructors data
    axios
      .get(
        'https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse'
      )
      .then((response) => {
        const courses = response.data.courses;
        // Extract unique instructors
        const uniqueInstructors = [
          ...new Set(courses.map((course) => course.courseTeacher)),
        ];
        // Map instructor data
        const mappedInstructors = uniqueInstructors.map((instructorName) => {
          // Filter courses for each instructor
          const instructorCourses = courses.filter(
            (course) => course.courseTeacher === instructorName
          );
          // Assuming contact information is available in the first course of each instructor
          const contactInfo =
            instructorCourses.length > 0
              ? instructorCourses[0].courseContact
              : '';
          return {
            name: instructorName,
            contact: contactInfo,
            courses: instructorCourses,
          };
        });
        setInstructors(mappedInstructors);
      })
      .catch((error) => {
        console.error('Error fetching instructor data:', error);
      });
  }, []);

  const handleSelectInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    // Assuming you want to clear chat when switching instructors
    setChat([]);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'Parent', // Assuming parent is the sender
        text: message.trim(),
      };
      setChat([...chat, newMessage]);
      // Clear input field after sending message
      setMessage('');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Instructors</h1>
      <div className="flex">
        <div className="mr-8">
          <h2 className="text-lg font-bold mb-2">Instructor List</h2>
          <ul>
            {instructors.map((instructor) => (
              <li
                key={instructor.name}
                onClick={() => handleSelectInstructor(instructor)}
                className={`cursor-pointer ${
                  selectedInstructor &&
                  selectedInstructor.name === instructor.name
                    ? 'text-blue-500 font-bold'
                    : ''
                }`}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {selectedInstructor && (
            <div>
              <h2 className="text-lg font-bold mb-2">
                {selectedInstructor.name}
              </h2>
              <p className="text-gray-600 mb-2">
                Contact: {selectedInstructor.contact}
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Chat</h3>
                <div className="border rounded-lg p-4 max-h-80 overflow-y-auto">
                  {chat.map((message, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${
                        message.sender === 'Parent' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <span className="font-bold">{message.sender}: </span>
                      {message.text}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message..."
                  className="border rounded-lg p-2 mr-2"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Courses</h3>
                {selectedInstructor.courses.map((course) => (
                  <div key={course.id} className="border p-4 rounded-md mb-4">
                    <h4 className="text-xl font-semibold mb-2">
                      {course.courseTitles}
                    </h4>
                    <p className="text-gray-700 mb-2">
                      {course.courseDescription}
                    </p>
                    <p className="text-sm text-gray-500">
                      Level: {course.courseLevel}
                    </p>
                    <img
                      src={course.posterPath}
                      alt={course.courseTitles}
                      className="mb-2"
                    />
                    <a
                      href={course.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      Link to the book
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
