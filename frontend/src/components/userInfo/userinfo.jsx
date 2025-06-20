import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserInfo = () => {
    const { user } = useContext(UserContext);
    if (!user) return <div className="mt-10">No user info available.</div>;
    // Get initials from username or email
    let initials = "";
    if (user.username && user.username.length > 0) {
        initials = user.username.slice(0, 2).toUpperCase();
    } else if (user.email && user.email.length > 0) {
        initials = user.email.slice(0, 2).toUpperCase();
    }
    return (
        <div className="mt-10 p-8 bg-gradient-to-br from-[#E1ECFE] to-[#f4eae4] rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
            {/* Custom Avatar with border and status badge */}
            <div className="relative w-28 h-28 bg-[#e3f2fd] border-4 border-solid border-sky-600 flex justify-center items-center rounded-full shadow-lg">
                <span className="text-5xl font-bold text-sky-700 select-none">{initials}</span>
                {/* Status badge */}
                <span className="bottom-2 left-20 absolute w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold text-[#2d3d54]">{user.username || user.email}</h2>
                <p className="text-base text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
                {user.phone && <p className="text-base text-gray-700"><span className="font-semibold">Phone:</span> {user.phone}</p>}
                {user.role && <p className="text-base text-gray-700"><span className="font-semibold">Role:</span> {user.role}</p>}
                {user.createdAt && <p className="text-base text-gray-700"><span className="font-semibold">Joined:</span> {new Date(user.createdAt).toLocaleDateString()}</p>}
                <div className="flex flex-wrap gap-3 mt-4">
                    <span className="inline-block bg-[#2d3d54] text-white text-xs px-3 py-1 rounded-full">Active</span>
                    <span className="inline-block bg-[#3498DB] text-white text-xs px-3 py-1 rounded-full">Verified</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
