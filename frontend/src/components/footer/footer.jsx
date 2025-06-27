import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src="../../../public/newone.png" className='object-cover w-[200px]' alt="" />
                        <p className="text-gray-300 text-sm">
                            Your ultimate destination for discovering, reading, and listening to your favorite books.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-[#e75e95] transition-colors text-2xl">
                                <FaInstagram />

                            </a>
                            <a href="https://www.facebook.com/ahmed.farghaly.917427/" className="text-gray-300 hover:text-[#3498DB] transition-colors text-2xl">
                                <FaFacebook />

                            </a>
                            <a href="https://github.com/ahmedfarghaly261" className="text-gray-300 hover:text-[#7ddb54] transition-colors text-2xl">
                                <FaGithub />

                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#3498DB]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
                            </li>
                            <li>
                                <Link to="/categories" className="text-gray-300 hover:text-white transition-colors text-sm">Categories</Link>
                            </li>
                            <li>
                                <Link to="/new-releases" className="text-gray-300 hover:text-white transition-colors text-sm">New Releases</Link>
                            </li>
                            <li>
                                <Link to="/bestsellers" className="text-gray-300 hover:text-white transition-colors text-sm">Bestsellers</Link>
                            </li>
                            <li>
                                <Link to="/audiobooks" className="text-gray-300 hover:text-white transition-colors text-sm">Audiobooks</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#3498DB]">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/help" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#3498DB]">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB] text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition-colors text-sm font-medium"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Ahmed Farghaly. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-gray-300 text-sm">
                                Privacy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-gray-300 text-sm">
                                Terms
                            </Link>
                            <Link to="/cookies" className="text-gray-400 hover:text-gray-300 text-sm">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;