import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import axios from "axios";

function CardList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/specialbooks")
            .then(res => {
                // Only books with trainingId set
                setBooks(res.data.filter(book => book.trainingId));
            })
            .catch(() => setBooks([]));
    }, []);

    return (
        <div className="w-full px-4">
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={50}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.2,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                    1280: {
                        slidesPerView: 6,
                    },
                }}
                className="my-8"
            >
                {books.map((book) => (
                    <SwiperSlide key={book._id}>
                        <Link to={`/book/${book._id}`}>
                            <div className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] bg-[#f4eae4] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
                                <img
                                    className="w-full h-60 object-cover"
                                    src={book.image ? `http://localhost:3001/uploads/${book.image}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                    alt={book.title}
                                />
                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-sm font-bold text-gray-800">
                                            {book.title}
                                        </h3>
                                        <button className="text-xs px-3 py-0.5 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
                                            listen
                                        </button>
                                    </div>
                                    <p className="text-sm text-[#7B7B7B] mt-1">{book.author}</p>
                                    <div className="flex items-center space-x-1 mt-2">
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
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardList;