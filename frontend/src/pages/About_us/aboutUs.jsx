import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for 1s
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <section className="bg-[#E1ECFE] py-16 px-4 min-h-[70vh] flex flex-col items-center justify-center relative mt-20">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-20">
                        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                {!loading && (
                    <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-center justify-center">
                        {/* Left: Hero/Intro + Extra Info */}
                        <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left gap-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 font-serif">About BookPlatform</h1>
                                <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-6">
                                    BookPlatform is dedicated to connecting readers and writers in a vibrant, inclusive community. Our mission is to make stories accessible, foster creativity, and empower every voice to be heard.
                                </p>
                            </div>

                            {/* New Section: Core Values */}
                            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border border-blue-100 w-full">
                                <h2 className="text-xl font-semibold text-blue-600 mb-2">Core Values</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Inclusivity and Diversity</li>
                                    <li>Empowering New Voices</li>
                                    <li>Community-Driven Innovation</li>
                                    <li>Love for Literature</li>
                                </ul>
                            </div>

                            {/* New Section: Why BookPlatform */}
                            <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border border-blue-100 w-full">
                                <h2 className="text-xl font-semibold text-blue-600 mb-2">Why BookPlatform?</h2>
                                <p className="text-gray-700">
                                    Whether you're an avid reader, a budding writer, or someone exploring the literary world, BookPlatform offers a space where your passion for stories comes to life with interactive tools and a welcoming community.
                                </p>
                            </div>

                            {/* New Section: Join Us */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-lg font-semibold text-blue-500 mt-4">Want to be part of our story?</h2>
                                <p className="text-gray-600">
                                    Join our platform today any questions? <Link to={"/contact_us"}> <a href="" className='text-blue-600 font-bold underline'> contact US</a>. </Link>
                                </p>
                            </div>
                        </div>

                        {/* Right: Story & Team Card */}
                        <div className="flex-1 bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8">
                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded in 2025, BookPlatform was born from a passion for literature and technology. We believe that every story matters and that technology can bring people together to share, discover, and celebrate books in new ways.
                            </p>

                            <h2 className="text-xl font-semibold text-blue-500 mb-2 mt-6">Our Mission</h2>
                            <p className="text-gray-600 mb-4">
                                To provide a seamless, interactive platform where users can explore books, connect with authors, and participate in a thriving literary community.
                            </p>

                            <h2 className="text-xl font-semibold text-blue-500 mb-2 mt-6">Meet the Team</h2>
                            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
                                <div className="bg-[#E1ECFE] rounded-xl shadow p-4 flex flex-col items-center w-[100%]">
                                    <img
                                        src="public/leaderImg.png"
                                        alt="Team Member"
                                        className="w-20 h-20 rounded-full mb-2 border-4 border-blue-200"
                                    />
                                    <span className="font-bold text-blue-700">Ahmed Farghaly</span>
                                    <span className="text-sm text-gray-500">Lead Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default AboutUs;