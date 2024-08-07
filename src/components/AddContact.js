import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Note the import

function AddContact({ addContactHandler }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const add = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
            alert('All fields are mandatory!');
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
        };

        addContactHandler(newContact);

        // Clear the form
        setName('');
        setEmail('');
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Contact</h2>
            <form className="space-y-4" onSubmit={add}>
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddContact;
