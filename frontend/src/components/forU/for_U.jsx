import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function For_U() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/specialbooks")
            .then(res => {
                // Only books with forUId set
                setBooks(res.data.filter(book => book.forUId));
            })
            .catch(() => setBooks([]));
    }, []);

    return (
        <>
            <div className="p-6 bg-[#f4eae4] mb-10 min-h-screen mt-10">
                <h2 className="text-5xl  font-bold mt-10 mb-5 mx-5 ">
                    F O R &nbsp; Y O U
                    <div className="w-[200px] h-1 bg-black mt-5 mb-5 rounded"></div>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                    {books.map((book, index) => (
                        <Link key={book._id} to={`/book/${book._id}`}>
                            <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[180px] lg:w-[190px] mx-10 mt-2 bg-[#e3e2e2] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={book.image ? `http://localhost:3001/uploads/${book.image}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                    alt={book.title}
                                />
                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-bold text-gray-800">{book.title}</h3>
                                        <button className="text-xs px-3 py-0.5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                                            listen
                                        </button>
                                    </div>
                                    <p className="text-sm text-[#7B7B7B] mt-1">{book.author}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    className={`w-4 h-4 text-gray-300`}
                                                >
                                                    <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default For_U;