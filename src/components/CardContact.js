import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegTrashAlt } from "react-icons/fa";

function CardContact({ contacts, removeContactHandler }) {
    return (
        <ul className="space-y-4">
            {contacts.map((contact) => {
                const { id, name, email } = contact;
                return (
                    <div key={id} className="p-4 mb-4 bg-blue-900 text-white rounded shadow-md flex items-center">
                        <CgProfile className="h-10 w-10 rounded-full mr-4" />
                        <div className="flex-grow">
                            <p className="text-xl font-bold">{name}</p>
                            <p>{email}</p>
                        </div>
                        <FaRegTrashAlt className="h-6 w-6 cursor-pointer"
                            onClick={() => {
                                removeContactHandler(id);
                            }}
                        />
                    </div>
                );
            })}
        </ul>
    );
}

export default CardContact;
