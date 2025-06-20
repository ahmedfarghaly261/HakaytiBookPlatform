import {
  FaImage,
  FaUtensils,
  FaHeart,
  FaStethoscope,
  FaUserEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Aos from "aos";
import "aos/dist/aos.css";


function FeaturedCategoric() {
  const { user } = useContext(UserContext);
  const categories = [
    {
      name: "Arts & Photography",
      icon: <FaImage className="text-purple-600 text-4xl" />,
      bg: "bg-purple-50",
    },
    {
      name: "Food & Drink",
      icon: <FaUtensils className="text-yellow-500 text-4xl" />,
      bg: "bg-yellow-50",
    },
    {
      name: "Romance",
      icon: <FaHeart className="text-red-500 text-4xl" />,
      bg: "bg-red-50",
    },
    {
      name: "Health",
      icon: <FaStethoscope className="text-cyan-500 text-4xl" />,
      bg: "bg-cyan-50",
    },
    {
      name: "Biography",
      icon: <FaUserEdit className="text-pink-400 text-4xl" />,
      bg: "bg-pink-50",
    },
  ];

   // aos Animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured Categories
        </h2>
        {user && (
          <div className="text-sm font-medium text-gray-600 flex items-center gap-1 cursor-pointer hover:underline">
            <Link to="/all_books">All Categories</Link>
            <span className="text-lg">→</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"  data-aos="zoom-in-down">
        {categories.map((cat, index) => (
          <div  
             data-aos="fade-down"
            key={index}
            className={`${cat.bg} p-6 rounded-lg flex flex-col items-start gap-4 transition hover:scale-105 hover:shadow-lg duration-200`}
          >
            {cat.icon}
            <div>
              <h3 className="text-base font-semibold text-gray-800">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500">Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default FeaturedCategoric;
