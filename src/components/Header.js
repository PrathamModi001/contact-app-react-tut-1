import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-blue-600 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-2xl font-bold">
                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none"
                    >
                        MyApp
                    </button>
                </div>
                <nav className="space-x-4">
                    <button
                        onClick={() => navigate('/')}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none"
                    >
                        About
                    </button>
                    <button
                        onClick={() => navigate('/services')}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none"
                    >
                        Services
                    </button>
                    <button
                        onClick={() => navigate('/add')}
                        className="hover:text-gray-300 transition-colors bg-transparent border-none"
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
