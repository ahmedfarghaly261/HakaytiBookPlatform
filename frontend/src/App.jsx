import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import UserHome from './pages/User_Home/Home'
import Login from './auth/login/login'
import Register from './auth/registration/register'
import Cards from './components/card/card'
import BookPage from './pages/bookPage/Bookpage'
import AdminPage from './pages/admin/admin'
import UserProfile from './pages/UserProfile/userProfile'
import Categories from './pages/categories/categories'
import For_U from './components/forU/for_U'
import ContactUs from './pages/contact_us/contact_us'
import AllBooks from './pages/all_books/allBooks'
import UserFav from './components/user_tools/userFav'
// import Test from './test/test'

function App() {
  
  return (
    <>
      <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/book/:id" element={<BookPage/>} />
        <Route path="/AdminPage" element={<AdminPage/>} />
        <Route path="/UserPage" element={<UserProfile/>} />
        <Route path="/Categories" element={<Categories/>} />
        <Route path="/booksForU" element={<For_U/>} />
        <Route path="/contact_us" element={<ContactUs/>} />
        <Route path="/all_books" element={<AllBooks/>} />
        <Route path="/user/favorites" element={<UserFav/>} />
        {/* <Route path="/test" element={<Test/>} /> */}
      </Routes>
      </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
