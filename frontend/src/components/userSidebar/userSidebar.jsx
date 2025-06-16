import React, { useState, useContext } from 'react';
import { FaRegUser } from "react-icons/fa";
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
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        alert('Logged out');
        navigate('/');
    };

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
                className={`bg-[#f4eae4] fixed top-0 left-0 z-50 h-screen w-[350px] border-r  transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block`}
            >
                <div className="flex h-full flex-col justify-between">
                    {/* Sidebar content */}
                    <div className="px-4 py-6">
                        <span className="grid mb-4 place-content-center rounded-lg ">
                            <img src="../../../public/logo.png" alt=""
                                className='bg-[#f4eae4] w-[140px] mb-4 border-b-black' />
                        </span>

                        <ul className="mt-6 space-y-1">
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
                                            <Link to={"/"}> 
                                            <a href="#" className=" block rounded-lg px-4 py-2  font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                H o m e
                                                 </a></Link> 
                                        </li>
                                        <li>
                                            <Link to={"/Categories"}> <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">c a t e g o r i e s</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">w r i t e r s</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <span className="flex items-center gap-2 text-lg font-medium text-gray-700">
                                            <IoMdInformationCircleOutline className="text-xl" />
                                            proprieties
                                        </span>
                                        <svg className="size-5 shrink-0 transition group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4 ">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                            >
                                                <MdOutlineBook className="text-lg" />
                                                My Ebooks
                                            </a>
                                        </li>

                                        <li>
                                            <Link to="/user/favorites" className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <GrFavorite className="text-lg" />
                                                my Favorites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/user/audios" className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                                <MdOutlineKeyboardVoice className="text-lg" />
                                                my audios
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <a href="#" className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">support</a>
                            </li>

                            <li>
                                <a href="#" className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">settings</a>
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
                    <div className="border-t border-gray-100 p-4">
                        <a href="#" className="flex items-center gap-2 hover:bg-gray-50">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1770&q=80"
                                className="size-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-xs">
                                    <strong className="block font-medium">Eric Frusciante</strong>
                                    <span>eric@frusciante.com</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;
