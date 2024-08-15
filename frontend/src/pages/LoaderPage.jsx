import React from 'react'

const LoaderPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 mb-4 animate-spin"></div>
        <p className="text-lg font-medium text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  )
}

export default LoaderPage
