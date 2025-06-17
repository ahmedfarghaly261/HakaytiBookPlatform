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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-3">
                    {books.map((book) => (
                        <Link key={book._id} to={`/book/${book._id}`} className="transform transition duration-300 hover:scale-102">
                            <div className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                                <div className="absolute top-2 right-2 z-10">
                                    <span className="px-2 py-0.5 bg-[#E74C3C] text-white text-[10px] font-semibold rounded-full shadow-sm">
                                        KINDLE
                                    </span>
                                </div>                                <div className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                                    <img
                                        className="w-full h-[220px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        style={{
                                            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                                            imageRendering: "crisp-edges"
                                        }}
                                        src={book.image ? `http://localhost:3001/uploads/${book.image}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                        alt={book.title}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <span className="text-xs text-white font-medium backdrop-blur-sm bg-black/30 px-2 py-0.5 rounded-full">
                                                {book.rating || 0} Rating
                                            </span>
                                        </div>
                                    </div>
                                </div><div className="p-3 flex flex-col flex-grow">
                                    <h3 className="text-sm font-bold text-gray-800 mb-0.5 line-clamp-2 group-hover:text-[#3498DB] transition-colors duration-300">
                                        {book.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 mb-1 italic">{book.author}</p>
                                    
                                    <div className="flex items-center mb-2">
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
                                        <span className="ml-1 text-xs text-gray-600">({book.rating || 0})</span>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-end gap-1">
                                                <span className="text-base font-bold text-[#2C3E50]">
                                                    ${book.price ? book.price.toFixed(2) : '0.00'}
                                                </span>
                                                {book.oldPrice && (
                                                    <span className="text-xs text-gray-400 line-through">
                                                        ${book.oldPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                            <button className="flex items-center gap-0.5 px-2 py-1 bg-[#3498DB] text-white rounded-full text-xs font-medium hover:bg-[#2980B9] transition-colors duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Listen
                                            </button>
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