import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-3xl font-extrabold tracking-wide">
                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-gray-200 transition-colors bg-transparent border-none"
                    >
                        Contact Manager
                    </button>
                </div>
                <nav className="space-x-6">
                    <button
                        onClick={() => navigate('/add')}
                        className="hover:text-gray-200 transition-colors bg-transparent border-none text-lg font-semibold"
                    >
                        Add Contact
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
