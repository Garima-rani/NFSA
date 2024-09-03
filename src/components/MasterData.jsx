import React from 'react';
import useAuth from '../hook/useAuth'; // Ensure this path is correct

const MasterData = () => {
  const authenticated = true ;

  if (!authenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Master Data</h1>
        {/* Add content here for master data */}
      </div>
    </div>
  );
};

export default MasterData;
