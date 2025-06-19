import React, { useContext } from 'react';
import ss1 from '../assets/ss1.png'; // Adjust the path as necessary
import ss2 from '../assets/ss2.png'; // Adjust the path as necessary
import ss3 from '../assets/ss3.png'; // Adjust the path as necessary
import image from '../assets/image.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
export default function Test() {
     const { user } = useContext(UserContext);
  return (
    <>
   
    <section className="bg-[#E1ECFE] w-full py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-5xl font-serif font-semibold text-gray-900 leading-tight">
            Because Every <br /> Word
            Deserves to Be Heard
          </h1>
          <p className="text-lg text-gray-700 mt-4">
 From Page To Voice, Stories Come
Alive Like Never Before.
          </p>
         {!user && (
            <Link to="/login">
              <button className="mt-8 px-8 py-3 bg-[#1e2d3d] text-white text-lg font-bold rounded-md shadow hover:bg-[#16222f] transition">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Right Content (Books Stack) */}
        <div className="relative w-full md:w-auto">
          {/* Replace with real images or use <img src={book1} /> if imported */}
          <div className=" w-[650px] h-[px]">
            <img src={image} alt="" className='w-15'/>
          </div>
          {/* Decorative elements like stars or dots can be added with SVGs or images */}
        </div>
      </div>
    </section>


    {/* section1
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#f4eae4] min-h-screen px-6 md:px-20 py-10 relative overflow-hidden">
        <div className="max-w-4xl text-center md:text-left mt-20 md:mt-0 ">
          <h1 className="text-6xl tracking-widest">
            <span className="mr-8 my-5">B e c a u s e</span>
            <span className="mr-8">E v e r y</span> <br />
            <span>
              W o r d <span className="mr-8 ml-8">D e s e r v e s </span>{" "}
            </span>
            <br /> <span className="mr-8">t o </span> B e H e a r d
          </h1>
          <p className="mt-6 text-lg tracking-wider text-[#1e2d3d] font-medium">
            From Page To Voice, Stories Come
            <br />
            Alive Like Never Before.
          </p>
          {!user && (
            <Link to="/login">
              <button className="mt-8 px-8 py-3 bg-[#1e2d3d] text-white text-lg font-bold rounded-md shadow hover:bg-[#16222f] transition">
                Login
              </button>
            </Link>
          )}
        </div>

       
        <div className="mt-12 md:mt-0">
          <img
            src="../../../public/books.png"
            alt="Books"
            className="w-[600px] md:w-[350px] lg:w-[500px] "
          />
        </div>
      </div> */}
     </>
  );
}
