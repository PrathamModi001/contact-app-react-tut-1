import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import img from './user.jpg'

function CardContact({ contacts, deleteContactHandler}) {
    const navigate = useNavigate();

    return (
        <ul className="space-y-4">
            {contacts.map((contact) => {
                const { id, name, email } = contact;
                return (
                    <li key={id} className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <img
                            src={img}
                            alt="Profile"
                            className="h-16 w-16 rounded-full object-cover border-2 border-blue-600"
                        />
                        <div
                            className="ml-4 flex-grow cursor-pointer"
                            onClick={() => navigate(`/contact/${id}`)}
                        >
                            <p className="text-xl font-semibold text-gray-800">{name}</p>
                            <p className="text-gray-600">{email}</p>
                        </div>
                        <FaRegTrashAlt
                            className="text-red-600 h-6 w-6 ml-4 cursor-pointer hover:text-red-800 transition-colors duration-300"
                            onClick={() => deleteContactHandler(id)}
                        />
                        <MdEdit
                            className="text-blue-600 h-6 w-6 ml-4 cursor-pointer hover:text-blue-800 transition-colors duration-300"
                            onClick={() => navigate(`/edit/${id}`)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default CardContact;
