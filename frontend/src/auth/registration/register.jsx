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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3001/api/auth/register", {
                username,
                email,
                password,

            });
            setMessage(response.data.message || "Registration successful!");
        } catch (err) {
            setError(
                err.response?.data?.error || "Registration failed. Please try again."
            );
        }
    };

    return (
        <>
            <nav className="bg-white shadow py-4">
                <div className="container mx-auto flex justify-center items-center">
                    <a href="#">
                        <img
                            className="h-12 w-auto"
                            src="../../../public/logo.png"
                            alt="Logo"
                        />
                    </a>
                </div>
            </nav>

            <div className="login-container">
                <section className="bg-[#f4eae4] ">
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
                                    {message && <div className="text-green-600 mb-2">{message}</div>}
                                    {error && <div className="text-red-600 mb-2">{error}</div>}
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

                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#2d3d54] dark:hover:bg-[#2d3d54] dark:focus:ring-[#2d3d54]">Submit</button>
                                    <span className='float-end'> already have an account?  
                                        <Link to={"/login"} className="underline p-2"> login</Link>
                                    </span>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Register;