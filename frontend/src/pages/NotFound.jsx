import React from 'react'

const NotFound = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center min-h-screen text-white">
            <div className="text-center px-6">
                <h1 className="text-7xl font-extrabold mb-4 animate-pulse">404</h1>
                <p className="text-2xl mb-4">Oops! Page not found</p>
                <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
                <a href="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full transition duration-300 shadow-lg">
                    Go Home
                </a>
            </div>
        </div>
    )
}

export default NotFound