import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/postSlice';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (title.trim() === '' || content.trim() === '') {
      setErrorMessage('Please fill in both Title and Content fields.');
      return; // Prevent form submission if validation fails
    }

    dispatch(addPost({ title, content }));
    navigate('/posts');
    setTitle('');
    setContent('');
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-400"> 
      <form onSubmit={handleSubmit} className="w-full max-w-sm py-4 bg-white shadow-md rounded-lg p-8 text-gray-700">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-900">Create Post</h2> 
        {errorMessage && (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        )}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="content" className="block text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 disabled:opacity-50"
            disabled={!title.trim() || !content.trim()}
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

