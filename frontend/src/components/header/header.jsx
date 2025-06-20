import React, { useState, useContext, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
  FaHome,
  FaBook,
  FaUserFriends,
  FaEnvelope,
  FaThLarge,
} from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Close notification dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);
  return (
    <nav className="relative bg-white shadow">
      <div className="container px-9 py-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img
              className="text-xl sm:h-12 w-[110px] h-[70px] object-cover"
              src="../../../public/newone.png"
              alt=""
            />
          </a>

          {/* Desktop center nav links */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  <FaHome className="inline-block text-lg" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="flex items-center gap-2 text-[#314157] text-xl hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  <FaThLarge className="inline-block text-lg" />
                  About Us
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to="/all_books"
                    className="flex items-center gap-2 text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md"
                  >
                    <FaBook className="inline-block text-lg" />
                    All Books
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/contact_us"
                  className="flex items-center gap-2 text-gray-700 text-xl hover:bg-gray-100 px-3 py-2 rounded-md"
                >
                  <FaEnvelope className="inline-block text-lg" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop right icons */}
          <div className="hidden lg:flex lg:items-center space-x-4">
            <div className="relative" ref={notifRef}>
              {user && (
                <>
                  <button
                    className="text-gray-600 hover:text-gray-700 focus:outline-none"
                    aria-label="show notifications"
                    onClick={() => setShowNotifications((prev) => !prev)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.6 15.6C18.2 15.2 18 14.7 18 14.2V11C18 8.4 16.3 6.2 14 5.3V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V5.3C7.7 6.2 6 8.4 6 11V14.2C6 14.7 5.8 15.2 5.4 15.6L4 17H9V18C9 19.7 10.3 21 12 21C13.7 21 15 19.7 15 18V17Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="p-4 border-b font-semibold text-gray-700">
                        Notifications
                      </div>
                      <ul className="max-h-60 overflow-y-auto">
                        <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                          No new notifications
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>

            {!user ? (
              <Link to={"/registration"}>
                <a
                  href="javascript:;"
                  className="relative inline-flex rounded-lg items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold border-2 border-[#E1ECFE] text-black transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-[#E1ECFE] group"
                >
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                        stroke="currentcolor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-[#2d3d54]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                        stroke="currentcolor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#2d3d54]">
                    Join us
                  </span>
                </a>
              </Link>
            ) : (
              <button
                type="button"
                className="flex items-center focus:outline-none"
                onClick={() => navigate("/UserPage")}
              >
                {/* Dynamic Initials Avatar */}
                <div className="relative w-8 h-8 bg-[#e3f2fd] border-2 border-sky-600 flex justify-center items-center rounded-full shadow">
                  <span className="text-base font-bold text-sky-700 select-none">
                    {user && user.username && user.username.length > 0
                      ? user.username.slice(0, 2).toUpperCase()
                      : user && user.email
                      ? user.email.slice(0, 2).toUpperCase()
                      : ""}
                  </span>
                  <span className="bottom-0 left-6 absolute w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <span className="ml-2 text-[#2d3d54] font-semibold">
                  {user.username || user.email}
                </span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 lg:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  <FaHome className="inline-block text-lg" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Categories"
                  className="flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  <FaThLarge className="inline-block text-lg" />
                  About Us
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to="/all_books"
                    className="flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100"
                  >
                    <FaBook className="inline-block text-lg" />
                    All Books
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/contact_us"
                  className="flex items-center gap-2 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  <FaEnvelope className="inline-block text-lg" />
                  Contact Us
                </Link>
              </li>
              {!user && (
                <li>
                  <Link to="/registration" className="mt-2 block w-full">
                    <span className="relative inline-flex rounded-lg items-center justify-start py-4 pl-8 pr-16 overflow-hidden font-semibold border-2 border-[#E1ECFE] text-black transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 hover:bg-[#E1ECFE] group">
                    
                      <span className="absolute left-4 -translate-x-2 group-hover:translate-x-0 duration-200">
                        <svg
                          className="w-5 h-5 text-[#2d3d54]"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14.9385 6L20.9999 12.0613M20.9999 12.0613L14.9385 18.1227M20.9999 12.0613L3 12.0613"
                            stroke="currentcolor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-[#2d3d54]">
                        Join us
                      </span>
                    </span>
                  </Link>
                </li>
              )}
            </ul>

            {/* Mobile icons */}

            <div className="mt-4 flex items-center justify-end space-x-4">
              {user ? (
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  onClick={() => navigate("/UserPage")}
                >
                  <div className="relative w-8 h-8 bg-[#e3f2fd] border-2 border-sky-600 flex justify-center items-center rounded-full shadow">
                    <span className="text-base font-bold text-sky-700 select-none">
                      {user && user.username && user.username.length > 0
                        ? user.username.slice(0, 2).toUpperCase()
                        : user && user.email
                        ? user.email.slice(0, 2).toUpperCase()
                        : ""}
                    </span>
                    <span className="bottom-0 left-6 absolute w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>
                  <span className="ml-2 text-[#2d3d54] font-semibold">
                    {user.username || user.email}
                  </span>
                </button>
              ) : null}
              {user && (
                <div className="relative" ref={notifRef}>
                  <button
                    className="text-gray-600 hover:text-gray-700 focus:outline-none"
                    aria-label="show notifications"
                    onClick={() => setShowNotifications((prev) => !prev)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.6 15.6C18.2 15.2 18 14.7 18 14.2V11C18 8.4 16.3 6.2 14 5.3V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V5.3C7.7 6.2 6 8.4 6 11V14.2C6 14.7 5.8 15.2 5.4 15.6L4 17H9V18C9 19.7 10.3 21 12 21C13.7 21 15 19.7 15 18V17Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="p-4 border-b font-semibold text-gray-700">
                        Notifications
                      </div>
                      <ul className="max-h-60 overflow-y-auto">
                        <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                          No new notifications
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
