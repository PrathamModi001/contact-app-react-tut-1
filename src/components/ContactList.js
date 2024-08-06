import React from 'react';
import CardContact from './CardContact';

export default function ContactList({ contacts }) {
    return (
        <div className="container py-4 px-6 max-w-md mx-auto">
            <CardContact contacts={contacts} />
        </div>
    );
}
