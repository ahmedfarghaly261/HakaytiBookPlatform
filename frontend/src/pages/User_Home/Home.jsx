import CardList from "../../components/card/card";
import Footer from "../../components/footer/footer";
import For_U from "../../components/forU/for_U";
import Header from "../../components/header/header";
import React, { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import FeaturedCategoric from "../../components/FeaturedCategorie/Featured_categorie";
import NewReleases from "../../components/FeaturedCategorie/NewReleases";
// import Test from "../../test/test";
import image from "../../assets/image.png";
import preloaderGif from "../../assets/preloader.gif";
import preloader2 from "../../assets/prelod2.gif";
import heroSecBG from "../../assets/heroSec-BG.png";

import Aos from "aos";
import "aos/dist/aos.css";

function UserHome() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  // aos Animation
  useEffect(() => {
    Aos.init({ duration: 2000 });

    //  loading 
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#fff] w-full">
        <div className="flex flex-col items-center">
          <img src={preloader2} alt="Loading..." className="w-32 h-36 mb-4 object-cover" />
          <span className="text-lg font-semibold text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden w-full">
      {/* header section */}
      <Header />
{/* <br />
<br />
<br />
<br /> */}
      {/* hero sec1 */}
      <section style={{ backgroundImage: `url(${heroSecBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="bg-[#E1ECFE] w-full py-16 overflow-x-hidden mt-20">
        <div className="max-w-9xl mx-auto px-28  flex flex-col md:flex-row items-center justify-between gap-24 md:gap-24">
          <div className="max-w-xl mb-10 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl font-serif font-semibold text-gray-900 leading-tight  lg:text-6xl ">
              Because Every <br /> <span className="text-blue-500 font-bold">Word </span>  Deserves to Be  <span className="text-blue-500 font-bold">Heard  </span>
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              From Page To Voice, Stories Come Alive Like Never Before.
            </p>
            {!user && (
              <Link to="/login">
                <button className="mt-8 px-8 py-3 bg-[#1e2d3d] text-white text-lg font-bold rounded-md shadow hover:scale-105 transition-transform duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>

          <div className="relative w-full md:w-auto" data-aos="fade-up-left">
            <div className="lg:w-[750px] h-auto">
              <img src={image} alt="" className="w-full max-w-[750px] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* end hero sec1 */}

      {/* sec2 */}
      <FeaturedCategoric />
      {/* end sec2 */}

      {/* sec3 */}
        <h1 className="text-4xl font-bold ml-7 mt-8 mb-2 text-gray-800 relative inline-block">
           Coming Soon
          <span
            className="block h-1 bg-[#302f2f] rounded mt-2"
            style={{ width: "70%" }}
          ></span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 md:p-8 bg-[#fdfaf4] overflow-x-hidden">
          {/* First Card */}
        <div
          data-aos="fade-down-right"
          className="flex-1 bg-[#f5b9b9] shadow-lg rounded-lg px-6 py-8 flex flex-col md:flex-row items-center justify-between hover:scale-105 transition-transform duration-500"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm font-semibold tracking-wide text-white uppercase mb-2">
              New Collection
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              new releases
            </h2>
            <button className="px-6 py-2 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#f5b9b9] transition">
              Explore now
            </button>
          </div>
          <img
            src="public/imageSecP.png"
            alt="Woman Reading"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[500px]"
          />
        </div>

        {/* Second Card */}
        <div
          data-aos="fade-down-left"
          className="flex-1 bg-[#a8e1d6] shadow-lg rounded-lg px-6 py-8 flex flex-col md:flex-row items-center justify-between hover:scale-105 transition-transform duration-500"
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm font-semibold tracking-wide text-white uppercase mb-2">
              New Collection
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6">
              Kids’ Books 📚
            </h2>
            <button className="px-6 py-2 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-[#a8e1d6] transition">
              Explore now
            </button>
          </div>
          <img
            src="public/imageSecB.png"
            alt="Flying Books"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[28 0px]"
          />
        </div>
      </div>

      {/* end sec3 */}

      {/* sec 4 */}
      <div className="mx-10 my-10 overflow-x-hidden" data-aos="zoom-in-up">
        <h2 className="text-5xl  font-bold mt-10 mb-5 mx-5 ">
          T r e n d i n g
          <div className="w-[200px] h-1 bg-black mt-5 mb-5 rounded"></div>
        </h2>
        <CardList />
      </div>
      {/* end sec4 */}

      {/* sec5 */}
      <section class="bg-[#F4EEE0] overflow-x-hidden ">
        <div class="container lg:px-[150px] py-10 mx-auto ">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <div className="" data-aos="fade-left">
              <img
                className="object-cover object-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px] h-80 sm:h-96 lg:h-[30rem] mx-auto rounded-lg"
                src="public/booksSec.jpg"
                alt="Books Section"
              />
            </div>

            <div
              class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 mx-10 my-4"
              data-aos="fade-right"
            >
              <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                Get over a 100 free books
              </h1>

              <p class=" lg:max-w-lg mt-6 text-black ">
                Subscribe to our newsletter and unlock access to over 100 free books! Jumpstart your reading journey by exploring our most popular categories and discover your next favorite story.
              </p>

              <h3 class="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
              <p class="text-gray-600 ">Marketing Manager at Stech</p>

              <div className="flex rounded-md overflow-hidden lg:w-full max-w-md   py-4">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  className="px-4 py-2 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-[#2c3e50] text-white px-6 py-2 font-semibold hover:bg-[#1a252f] transition-colors">
                  Get free books
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end sec5 */}

      {/* sec7 */}
      <section>
        <For_U />
      </section>
      {/* end sec7 */}

      {/* sec8 */}
      <NewReleases />
      {/* end sec8 */}

      {/* sec9 */}
      <div className="relative bg-[#e8f0ff] px-4 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden rounded-lg overflow-x-hidden">
        {/* Background decorations */}
        <img
          src="/finalSecLeft.png"
          alt="Left Leaf"
          className="absolute top-0 left-0 w-24 md:w-40 h-auto z-0"
        />
        <img
          src="/finalSecRight.png"
          alt="Right Leaf"
          className="absolute bottom-0 right-0 w-24 md:w-40 h-auto z-0"
        />

        {/* Content */}
        <h2 className="text-center md:text-left mx-[80px] text-xl md:text-3xl text-gray-800 font-serif z-10 max-w-3xl">
          Bring your story to life – join our community
        </h2>

        <Link to="/contact_us">
           <button className="z-10 px-6 py-2 mx-[100px] border-2 border-black rounded-full text-black hover:bg-black hover:text-white transition">
          Contacts
        </button>
        </Link>
      
      </div>
      {/* end sec9 */}

      {/* footer */}
      <Footer />
    </div>
  );
}
export default UserHome;
