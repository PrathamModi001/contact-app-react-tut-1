import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditContact({ contacts, editContactHandler }) {
    const { id } = useParams();
    const contact = contacts.find(contact => contact.id === id);

    const [name, setName] = useState(contact ? contact.name : '');
    const [email, setEmail] = useState(contact ? contact.email : '');

    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
            alert('All fields are mandatory!');
            return;
        }

        const updatedContact = {
            id: contact.id,
            name,
            email,
        };

        editContactHandler(updatedContact);

        // Clear the form
        setName('');
        setEmail('');
        navigate('/');
    };

    useEffect(() => {
        if (!contact) {
            navigate('/');
        }
    }, [contact, navigate]);

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Contact</h2>
            <form className="space-y-4" onSubmit={update}>
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
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditContact;
