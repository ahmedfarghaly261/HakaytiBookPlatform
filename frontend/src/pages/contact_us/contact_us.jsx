import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

const ContactUs = () => {
    const [pageLoading, setPageLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setPageLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1800); 
    };

    return (
        <>
            <Header />
            <section className='bg-[#E1ECFE] py-8 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center min-h-[70vh]'>
                {pageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-20">
                        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                {!pageLoading && (
                <div className="mx-4 md:mx-16 w-full">
                    <div className="container px-6 py-12 mx-auto bg-white/90 rounded-2xl shadow-2xl border border-blue-100 backdrop-blur-md">
                        <div>
                            <p className="font-medium text-blue-500">Contact us</p>
                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Chat to our friendly team</h1>
                            <p className="mt-3 text-gray-500">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                                {/* ...existing code for contact info cards... */}
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    <h2 className="mt-4 text-base font-medium text-gray-800">Email</h2>
                                    <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500">hello@merakiui.com</p>
                                </div>
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    <h2 className="mt-4 text-base font-medium text-gray-800">Live chat</h2>
                                    <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                                    <p className="mt-2 text-sm text-blue-500">Start new chat</p>
                                </div>
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    <h2 className="mt-4 text-base font-medium text-gray-800">Office</h2>
                                    <p className="mt-2 text-sm text-gray-500">Come say hello at our office HQ.</p>
                                    <p className="mt-2 text-sm text-blue-500">100 Smith Street Collingwood VIC 3066 AU</p>
                                </div>
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </span>
                                    <h2 className="mt-4 text-base font-medium text-gray-800">Phone</h2>
                                    <p className="mt-2 text-sm text-gray-500">Mon-Fri from 8am to 5pm.</p>
                                    <p className="mt-2 text-sm text-blue-500">+1 (555) 000-0000</p>
                                </div>
                            </div>
                            <div className="">
                                <form className="border border-gray-200 rounded-2xl p-8 shadow-xl bg-white/80 backdrop-blur-md" onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-1">
                                            <label className="mb-2 text-sm font-semibold text-gray-700 flex items-center gap-1">
                                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                First Name
                                            </label>
                                            <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" required />
                                        </div>
                                        <div className="flex-1">
                                            <label className="mb-2 text-sm font-semibold text-gray-700 flex items-center gap-1">
                                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                Last Name
                                            </label>
                                            <input type="text" placeholder="Doe" className="block w-full px-5 py-3 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" required />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="mb-2 text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0a4 4 0 01-8 0" /></svg>
                                            Email address
                                        </label>
                                        <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition" required />
                                    </div>
                                    <div className="mt-4">
                                        <label className="mb-2 text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8a9 9 0 1118 0z" /></svg>
                                            Message
                                        </label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none transition resize-none" placeholder="Type your message..." required></textarea>
                                    </div>
                                    <button type="submit" className="w-full px-6 py-3 mt-6 text-base font-semibold tracking-wide text-white uppercase transition-colors duration-300 transform bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading}>
                                        {loading ? (
                                            <svg className="animate-spin w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        )}
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {sent && (
                                        <div className="mt-4 text-green-600 font-semibold flex items-center justify-center gap-2 animate-fade-in">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            Your message has been sent!
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </section>
            <br />
            <Footer />
        </>
    );
};
export default ContactUs;