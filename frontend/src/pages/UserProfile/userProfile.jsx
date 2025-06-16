import React, { useContext } from 'react';
import UserSidebar from '../../components/userSidebar/userSidebar';
import Header from '../../components/header/header';
import UserInfo from '../../components/userInfo/userinfo';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();
  
    return (
        <>
         <main className="flex flex-row min-h-screen">
                {/* Sidebar - fixed width */}
                <aside className=" border-gray-200 bg-[#f4eae4]  mr-12">
                    <UserSidebar/>
                </aside>
                <div className="d">
                    <UserInfo/>
                </div>
            </main>
        </>
    );
};

export default UserProfile;