import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserInfo = () => {
    const { user } = useContext(UserContext);
    if (!user) return <div className="mt-10">No user info available.</div>;
    return (
        <div className="mt-10 p-6 bg-white rounded-xl shadow-md flex items-center space-x-4">
            <img
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                src={user.avatar || `https://i.pravatar.cc/150?u=${user.email}`}
                alt="User Avatar"
            />
            <div className='py-2'>
                <h2 className="text-xl font-semibold text-gray-800">{user.username || user.email}</h2>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
            </div>
        </div>
    );
};

export default UserInfo;
