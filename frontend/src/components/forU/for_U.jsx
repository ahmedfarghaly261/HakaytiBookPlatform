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
        <>            <div className="p-4 bg-gradient-to-br from-[#F4EEE0] to-[#F9F5EC] mb-10 min-h-screen mt-10">
                <h2 className="text-4xl font-bold mt-8 mb-6 mx-4 relative">
                    F O R &nbsp; Y O U
                    <div className="w-[160px] h-0.5 bg-black mt-4 mb-4 rounded bg-gradient-to-r from-[#2C3E50] to-[#3498DB]"></div>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 px-14">
                    {books.map((book) => (
                        <Link key={book._id} to={`/book/${book._id}`} className="transform transition duration-300 hover:scale-102">
                            <div className="relative rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full bg-white" data-aos="fade-down">
                                <img
                                    className="w-full h-[340px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                    style={{
                                        boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                                        imageRendering: "crisp-edges"
                                    }}
                                    src={book.image ? `http://localhost:3001/uploads/${book.image}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                    alt={book.title}
                                />
                                
                                {/* Overlay with details on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-4 pointer-events-none">
                                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2 pointer-events-auto">{book.title}</h3>
                                    <span
                                        className={
                                            `self-end mb-2 px-2 py-0.5 text-white text-[12px] font-semibold rounded-full shadow-sm pointer-events-auto ` +
                                            (book.Category === 'Romance' ? 'bg-pink-400' :
                                            book.Category === 'Fiction' ? 'bg-blue-500' :
                                            book.Category === 'Non-fiction' ? 'bg-green-500' :
                                            book.Category === 'Science' ? 'bg-purple-500' :
                                            book.Category === 'History' ? 'bg-yellow-600' :
                                            book.Category === 'Fantasy' ? 'bg-indigo-500' :
                                            book.Category === 'Biography' ? 'bg-orange-500' :
                                            book.Category === 'Other' ? 'bg-gray-500' :
                                            'bg-gray-400')
                                        }
                                    >
                                        {book.Category}
                                    </span>
                                    <p className="text-xs text-gray-200 mb-1 italic pointer-events-auto">{book.author}</p>
                                    <div className="flex items-center mb-2 pointer-events-auto">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill={i < (book.rating || 0) ? "#FFD700" : "#E2E8F0"}
                                                viewBox="0 0 20 20"
                                                className="w-3 h-3"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
                                            </svg>
                                        ))}
                                        <span className="ml-1 text-xs text-gray-200">({book.rating || 0})</span>
                                    </div>
                                    <button className="flex items-center gap-0.5 px-2 py-1 bg-[#3498DB] text-white rounded-full text-xs font-medium hover:bg-[#2980B9] transition-colors duration-300 mt-2 self-end pointer-events-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Listen
                                    </button>
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