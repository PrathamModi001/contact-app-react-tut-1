import React from 'react';

function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
                <div className="text-2xl font-bold">
                    <a href="/" className="hover:text-gray-300 transition-colors">MyApp</a>
                </div>
                <nav className="space-x-4">
                    <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
                    <a href="/about" className="hover:text-gray-300 transition-colors">About</a>
                    <a href="/services" className="hover:text-gray-300 transition-colors">Services</a>
                    <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
