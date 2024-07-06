import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div className="rounded-lg p-4 hover:bg-gray-100 bg-gradient-to-r from-indigo-500 to-blue-400 " > 
      <h3 className="text-lg font-medium mb-2 text-white">{post.title} </h3> 
      <p className="text-gray-200 overflow-hidden text-ellipsis">
        {post.content}
      </p>
      <div className="flex justify-end items-center"> 
        <Link to={`/edit/${post.id}`} className="text-yellow-300 hover:underline mr-2"> 
          Edit
        </Link>
        
      </div>
    </div>
  );
};

export default Post;
