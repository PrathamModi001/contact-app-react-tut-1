import React from 'react';

function CardContact({ contacts }) {
    return (
        <ul className="space-y-4">
            {contacts.map((contact) => {
                const { id, name, email } = contact;
                return (
                    <div key={id} className="p-4 mb-4 bg-blue-900 text-white rounded shadow-md">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="profile"
                            className="h-full px-3 w-20 rounded-full float-left mr-4"
                        />
                        <p className="text-xl text-left font-bold">{name}</p>
                        <p className='text-left'>{email}</p>
                    </div>
                );
            })}
        </ul>
    );
}

export default CardContact;
