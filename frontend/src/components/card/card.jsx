import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import axios from "axios";

// Add custom styles for Swiper
const swiperStyles = `
  .swiper-container {
    overflow: visible !important;
  }
  .swiper-pagination-bullet {
    background: #3498DB;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #2C3E50;
    transform: scale(1.2);
  }
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0;
    color: #2C3E50;
    background: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  .group:hover .swiper-button-next,
  .group:hover .swiper-button-prev {
    opacity: 1;
  }
  .swiper-button-next {
    right: 0;
    transform: translateX(50%);
  }
  .swiper-button-prev {
    left: 0;
    transform: translateX(-50%);
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: white;
    transform: translateX(50%) scale(1.1);
  }
  .swiper-button-prev:hover {
    transform: translateX(-50%) scale(1.1);
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 18px;
    font-weight: bold;
  }
  .swiper-slide {
    transition: all 0.3s ease;
  }
  .swiper-slide-active {
    transform: scale(1.02);
  }
`;

function CardList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/specialbooks")
            .then(res => {
                // Only books with trainingId set
                setBooks(res.data.filter(book => book.trainingId));
            })
            .catch(() => setBooks([]));
    }, []);    return (        <div className="w-full px-4 sm:px-6 md:px-8 relative group">
            <style>{swiperStyles}</style>
            <div className="absolute inset-y-0 left-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-[#F4EEE0] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-[#F4EEE0] to-transparent z-10"></div><Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={800}
                loop={true}
                slidesPerGroup={1}
                centeredSlides={false}
                allowTouchMove={true}
                grabCursor={true}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    390: {
                        slidesPerView: 1,
                        spaceBetween: 12
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 12
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 12
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    }
                }}
                className="py-8"
            >
                {books.map((book) => (
                    <SwiperSlide key={book._id}>                <div className="p-1.5 sm:p-2">
                            <Link to={`/book/${book._id}`} className="block transform transition duration-300 hover:scale-[1.02]">
                                <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                                    <div className="absolute top-2 right-2 z-10">
                                        <span className="px-2 py-0.5 bg-[#E74C3C] text-white text-[10px] font-semibold rounded-full shadow-sm">
                                            KINDLE
                                        </span>
                                    </div>
                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>
                                        <img
                                            className="w-full h-[220px] object-cover transform transition-all duration-700 hover:scale-110 hover:brightness-110"
                                            style={{
                                                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
                                                imageRendering: "crisp-edges"
                                            }}
                                            src={book.image ? `http://localhost:3001/uploads/${book.image}` : 'https://via.placeholder.com/200x300?text=No+Image'}
                                            alt={book.title}
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full hover:translate-y-0 transition-transform duration-500 z-30">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                                <span className="text-xs text-white font-medium backdrop-blur-sm bg-black/30 px-2 py-0.5 rounded-full">
                                                    {book.rating || 0} Rating
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3 flex flex-col flex-grow">
                                        <h3 className="text-sm font-bold text-gray-800 mb-0.5 line-clamp-2 hover:text-[#3498DB] transition-colors duration-300">
                                            {book.title}
                                        </h3>
                                        <p className="text-xs text-gray-600 mb-2 italic">{book.author}</p>
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
                                        </div>
                                        <div className="mt-auto pt-2 flex items-center justify-between border-t border-gray-100">
                                            <button className="flex items-center gap-0.5 px-2 py-1 bg-[#3498DB] text-white rounded-full text-xs font-medium hover:bg-[#2980B9] transition-colors duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Listen
                                            </button>
                                            <div className="flex items-center gap-1">
                                                <span className="text-sm font-bold text-[#2C3E50]">
                                                    ${book.price ? book.price.toFixed(2) : '0.00'}
                                                </span>
                                                {book.oldPrice && (
                                                    <span className="text-xs text-gray-400 line-through">
                                                        ${book.oldPrice.toFixed(2)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardList;