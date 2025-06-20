import React, { useState, useContext } from 'react';
import { FaRegUser, FaCog, FaHeadset, FaUserFriends } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineBook } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const UserSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        alert('Logged out');
        navigate('/');
    };

    // Get initials from username or email
    let initials = "";
    if (user && user.username && user.username.length > 0) {
        initials = user.username.slice(0, 2).toUpperCase();
    } else if (user && user.email && user.email.length > 0) {
        initials = user.email.slice(0, 2).toUpperCase();
    }
    return (
        <>
            {/* Toggle button for small screens */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 rounded-md text-2xl text-gray-800 lg:hidden "
            >
                <FaListUl />
            </button>

            <Link to={""}></Link>
            {/* Overlay on mobile when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`bg-gradient-to-b from-[#E1ECFE] to-[#c5d8f9] fixed top-0 left-0 z-50 h-screen w-[350px] border-r border-[#b3c7e6] shadow-xl transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}
            >
                <div className="flex h-full flex-col justify-between">
                    {/* Sidebar content */}
                    <div className="px-4 py-8">
                        <span className="grid mb-6 place-content-center rounded-lg ">
                            <div className="relative w-16 h-16 bg-[#e3f2fd] border-4 border-solid border-sky-600 flex justify-center items-center rounded-full shadow-lg">
                                <span className="text-2xl font-bold text-sky-700 select-none">{initials}</span>
                                <span className="bottom-1 left-12 absolute w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                            </div>
                        </span>

                        <ul className="mt-6 space-y-2 divide-y divide-[#dbeafe]/60">
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="flex items-center gap-2 text-lg font-medium text-gray-700">
                                            <FaRegUser className="text-xl" />
                                            My Profile
                                        </span>
                                        <svg className="size-5 shrink-0 transition group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4 ">
                                        <li>
                                            <Link to={"/"} className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <FaRegUser className="text-lg" />
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/Categories"} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <MdOutlineBook className="text-lg" />
                                                Categories
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <FaUserFriends className="text-lg" />
                                                Writers
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="flex items-center gap-2 text-lg font-medium text-gray-700">
                                            <IoMdInformationCircleOutline className="text-xl" />
                                            Properties
                                        </span>
                                        <svg className="size-5 shrink-0 transition group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4 ">
                                        <li>
                                            <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <MdOutlineBook className="text-lg" />
                                                My Ebooks
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/user/favorites" className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <GrFavorite className="text-lg" />
                                                My Favorites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/audios" className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <MdOutlineKeyboardVoice className="text-lg" />
                                                My Audios
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <FaHeadset className="text-lg" />
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <FaCog className="text-lg" />
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-lg text-red-600 hover:bg-gray-100 hover:text-red-600"
                                    onClick={handleLogout}
                                >
                                    <CiLogout className="text-lg" />
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* User footer */}
                    <div className="border-t border-[#] p-4 bg-[#fff] flex items-center gap-3 mt-2">
                        <div className="relative w-12 h-12 bg-[#e3f2fd] border-2 border-sky-600 flex justify-center items-center rounded-full shadow">
                            <span className="text-lg font-bold text-sky-700 select-none">{initials}</span>
                            <span className="bottom-0 left-9 absolute w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#2d3d54]">{user?.username || user?.email}</p>
                            <p className="text-xs text-gray-700">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;
