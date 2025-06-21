import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3001/api/auth/register", {
                username,
                email,
                password,
            });
            setTimeout(() => {
                setLoading(false);
                setMessage(response.data.message || "Registration successful!");
            }, 1200);
        } catch (err) {
            setTimeout(() => {
                setLoading(false);
                setError(
                    err.response?.data?.error || "Registration failed. Please try again."
                );
            }, 1200);
        }
    };

    return (
        <>
            <nav className="bg-white shadow py-4">
                <div className="container mx-auto flex justify-center items-center">
                    <a href="#">
                           <img
                            className="w-[140px] object-cover h-16"
                            src="../../../public/newone.png"
                            alt="Logo"
                        />
                    </a>
                </div>
            </nav>

            <div className="login-container">
                <section className="bg-[#E1ECFE] ">
                    <div className="container lg:px-[150px] py-10 mx-auto ">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img 
                                className="hidden lg:block object-cover object-center lg:w-[600px] lg:mx-5 mx-11 h-96 lg:h-[30rem] rounded-[3rem]"
                                src="../../../public/register.png"
                                alt=""
                            />

                            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 mx-10 my-4">
                                <form className="max-w-md mx-auto border-black" onSubmit={handleSubmit}>
                                    <h1 className='text-3xl font-300 text-[#2d3d54]'>Create an account</h1>
                                    <br />
                                  {message && (
                                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                                        <p className="text-green-900 text-sm font-bold">{message}</p>
                                    </div>
                                )}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
                                        <p className="text-red-900 text-sm font-bold">{error}</p>
                                    </div>
                                )}

                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                                            placeholder=" "
                                            required
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                        <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                                            placeholder=" "
                                            required
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-[#2d3d54] peer"
                                            placeholder=" "
                                            required
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-[#2d3d54] peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-5 group">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2d3d54] dark:border-gray-600 dark:focus:border-[#2d3d54] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            required
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                        />
                                        <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-[#2d3d54] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full px-6 py-3 text-white bg-gradient-to-r from-[#2d3d54] to-[#1e2a3a] rounded-lg hover:from-blue-800 hover:to-[#1e2a3a] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-base shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <svg className="animate-spin w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                        ) : null}
                                        {loading ? 'Registering...' : 'Submit'}
                                    </button>
                                    <span className='float-end'> already have an account?  
                                        <Link to={"/login"} className="underline p-2"> login</Link>
                                    </span>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer class="rounded-lg shadow-sm text-white  m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
                <img
                            className="w-[140px] object-cover h-16"
                            src="../../../public/newone.png"
                            alt="Logo"
                        />
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" class="hover:underline">Ahmed Farghaly</a>. All Rights Reserved.</span>
    </div>
</footer>


        </>
    );
}
export default Register;