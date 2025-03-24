import React from 'react';

const ErrorPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="text-9xl mb-4">😢</div>
                <h1 className="text-4xl font-bold mb-2">Oops!</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Something went wrong. Please try again later.
                </p>
                <a href="/" className="text-blue-500 text-lg hover:underline">
                    Go back home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;