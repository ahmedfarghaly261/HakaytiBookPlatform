import React, { useContext, useEffect, useState } from 'react';
import UserSidebar from '../../components/userSidebar/userSidebar';
import Header from '../../components/header/header';
import UserInfo from '../../components/userInfo/userinfo';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [favCount, setFavCount] = useState(0);

    useEffect(() => {
        if (user) {
            // Fetch user's favorites count
            fetch(`http://localhost:3001/api/favorites/${user.username || user.email}`)
                .then(res => res.json())
                .then(data => {
                    let favs = [];
                    if (Array.isArray(data)) {
                        favs = data;
                    } else if (data && Array.isArray(data.favorites)) {
                        favs = data.favorites;
                    }
                    // Filter out falsy or empty objects
                    const validFavs = favs.filter(fav => fav && Object.keys(fav).length > 0);
                    setFavCount(validFavs.length);
                })
                .catch(() => setFavCount(0));
        }
    }, [user]);
  
    return (
        <>
            <main className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-[#E1ECFE] to-[#f4eae4]">
                {/* Sidebar - fixed width */}
                <aside className="border-gray-200 bg-[#f4eae4] md:mr-12 md:min-h-screen shadow-lg">
                    <UserSidebar/>
                </aside>
                <section className="flex-1 flex flex-col   px-4 py-12">
                    <div className="w-full max-w-2xl">
                        <UserInfo/>
                        {/* User Stats Section */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                                <span className="text-2xl font-bold text-[#3498DB]">12</span>
                                <span className="text-sm text-gray-600 mt-1">Books Read</span>
                            </div>
                            <button
                                className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:bg-blue-50 transition cursor-pointer focus:outline-none"
                                onClick={() => navigate('/user/favorites')}
                                title="View your favorite books"
                            >
                                <span className="text-2xl font-bold text-[#3498DB]">{favCount} </span>
                                <span className="text-sm text-gray-600 mt-1">Favorites</span>
                            </button>
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
                                <span className="text-2xl font-bold text-[#3498DB]">3</span>
                                <span className="text-sm text-gray-600 mt-1">Audiobooks</span>
                            </div>
                        </div>
                        {/* Recent Activity Section */}
                        <div className="mt-8 bg-white rounded-xl shadow p-6">
                            <h3 className="text-lg font-semibold text-[#2d3d54] mb-4">Recent Activity</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>Finished <span className="font-semibold text-[#3498DB]">"Atomic Habits"</span> - 2 days ago</li>
                                <li>Added <span className="font-semibold text-[#3498DB]">"Deep Work"</span> to Favorites - 4 days ago</li>
                                <li>Listened to <span className="font-semibold text-[#3498DB]">"The Power of Now"</span> - 1 week ago</li>
                            </ul>
                        </div>
                        {/* Quick Actions Section */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="flex-1 min-w-[140px] px-6 py-3 bg-[#3498DB] text-white rounded-lg shadow hover:bg-[#2980B9] transition font-semibold">Edit Profile</button>
                            <button className="flex-1 min-w-[140px] px-6 py-3 bg-[#e74c3c] text-white rounded-lg shadow hover:bg-[#c0392b] transition font-semibold">Logout</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default UserProfile;