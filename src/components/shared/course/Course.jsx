import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TableComponent = () => {
  const [course, setCourse] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'English',
      description: 'Helps your English level.',
      instructor: 'T.mireille',
      category: 'level1',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Get started with data science concepts.',
      instructor: 'T.sandrine',
      category: 'level3',
    },
    {
      id: 3,
      title: 'Mathematics',
      description: 'Mathematics learning.',
      instructor: 'T.rebekker',
      category: 'level3',
    },
  ]);
     const [isLoading, setIsLoading] = useState(false);
  const handleAddCourse = () => {
    const newCourse = {
      id: data.length + 1,
      title: '',
      description: '',
      instructor: '',
      category: '',
    };
    setData([...data, newCourse]);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setData(
      data.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  const handleFetchCourse = () => {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'https://parents-follow-u.onrender.com/followup/course/list',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data);
        setCourse(response.data.getCourses);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        toast.error("Error fetching course");
      });
  };

  const handleDeleteCourse = async (id) => {
    if(window.confirm('Are you sure you want to delete this course')){

      try {
        await axios.delete(
          `https://parents-follow-u.onrender.com/followup/course/delete/${id}`
        );
        setCourse(course.filter((course) => course._id !== id));
        toast.success("successfully deleted")
        console.log('Course deleted successfully');
      } catch (error) {
        console.error('Error deleting course:', error);
        toast.error("Error deleting course");
      }
    }
  };

  useEffect(() => {
    handleFetchCourse();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-screen pr-10">
      <ToastContainer />
        <Link to="/Dcourse">
          <div className="relative mb-14">
            <button
              className="absolute top-0 right-0 bg-teal-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-[10%] mb-8"
              onClick={handleAddCourse}
            >
              Add Course
            </button>
          </div>
        </Link>

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 pr-20">
                <thead className="bg-teal-600">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Instructor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {course.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {course.tittle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {course.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {course.instructor}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {course.category}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={`/EditCourse/${course._id}`}>
                          <button className="bg-teal-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">
                            Edit
                          </button>
                        </Link>
                        <button
                          className="bg-teal-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDeleteCourse(course._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
