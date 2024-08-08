import React from 'react';
import { useParams } from 'react-router-dom';
import img from './user.jpg';

function CardDetail({ contacts }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) {
        return <p>Contact not found</p>;
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Details</h2>
            <div className="relative w-full mb-6">
                <img
                    src={img}
                    alt="Profile"
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>
            <div className="text-center">
                <p className="text-xl font-semibold mb-2">{contact.name}</p>
                <p className="text-gray-600">{contact.email}</p>
            </div>
            <button
                onClick={() => window.history.back()}
                className="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Go Back
            </button>
        </div>
    );
}

export default CardDetail;
