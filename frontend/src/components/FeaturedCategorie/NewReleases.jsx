import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewReleases() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/specialbooks")
      .then((res) => {
        // Only books labeled as New Releases
        setBooks(res.data.filter((b) => b.newReleasesId));
      })
      .catch(() => setBooks([]));
  }, []);

  return (
    <>
   <section className="bg-[#f9f5ef] min-h-screen px-4 sm:px-6 py-12">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    <h2 className="text-3xl sm:text-4xl font-serif font-semibold">Picks for you</h2>
    <button className="border px-4 py-2 rounded-full text-sm hover:bg-gray-100">
      Browse All <span className="ml-1">→</span>
    </button>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    {/* Left Featured Book (first from backend) */}
    {books[0] && (
      <Link
        to={`/book/${books[0]._id}`}
        className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow hover:shadow-lg transition-shadow duration-200"
      >
        <div className="relative w-full md:w-1/2">
          <img
            src={
              books[0].image
                ? `http://localhost:3001/uploads/${books[0].image}`
                : "/thirsty.jpg"
            }
            alt={books[0].title || "Book"}
            className="rounded-lg h-full w-full object-cover max-h-[350px]"
          />
          {books[0].discount && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
              -{books[0].discount}%
            </span>
          )}
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500 text-sm">
                {"★".repeat(Math.round(books[0].rating || 0))}
                {"☆".repeat(5 - Math.round(books[0].rating || 0))}
              </div>
              <span className="text-sm text-gray-500 ml-1">
                ({books[0].rating || 0})
              </span>
            </div>
            <h3 className="text-xl font-serif font-semibold">
              {books[0].title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              {books[0].author}
            </p>
            <p className="text-lg text-gray-600">
              {books[0].description}
            </p>
          </div>
          <span
            className={
              `self-start mt-4 px-2 py-0.5 text-white text-[12px] font-semibold rounded-full shadow-sm pointer-events-auto ` +
              (books[0].Category === "Romance"
                ? "bg-pink-400"
                : books[0].Category === "Fiction"
                ? "bg-blue-500"
                : books[0].Category === "Non-fiction"
                ? "bg-green-500"
                : books[0].Category === "Science"
                ? "bg-purple-500"
                : books[0].Category === "History"
                ? "bg-yellow-600"
                : books[0].Category === "Fantasy"
                ? "bg-indigo-500"
                : books[0].Category === "Biography"
                ? "bg-orange-500"
                : books[0].Category === "Other"
                ? "bg-gray-500"
                : "bg-gray-400")
            }
          >
            {books[0].Category}
          </span>
        </div>
      </Link>
    )}

    {/* Right List of Books (rest from backend) */}
    <div className="bg-white rounded-xl p-4 shadow grid grid-cols-1 sm:grid-cols-2 gap-4">
      {books.slice(1).map((book, index) => (
        <Link
          to={`/book/${book._id}`}
          key={book._id || index}
          className="flex gap-3 items-start hover:bg-gray-50 rounded-lg transition-colors duration-150 p-2"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={
              book.image
                ? `http://localhost:3001/uploads/${book.image}`
                : "/ss4.png"
            }
            alt={book.title}
            className="w-20 h-28 object-cover rounded-md"
          />
          <div>
            <div className="flex items-center">
              <div className="text-yellow-500 text-sm">
                {"★".repeat(Math.round(book.rating || 0))}
                {"☆".repeat(5 - Math.round(book.rating || 0))}
              </div>
              <span className="text-sm text-gray-500 ml-1">
                ({book.rating || 0})
              </span>
            </div>
            <h4 className="font-serif font-medium">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.author}</p>
            <span
              className={
                `self-start mt-2 px-2 py-0.5 text-white text-[12px] font-semibold rounded-full shadow-sm pointer-events-auto ` +
                (book.Category === "Romance"
                  ? "bg-pink-400"
                  : book.Category === "Fiction"
                  ? "bg-blue-500"
                  : book.Category === "Non-fiction"
                  ? "bg-green-500"
                  : book.Category === "Science"
                  ? "bg-purple-500"
                  : book.Category === "History"
                  ? "bg-yellow-600"
                  : book.Category === "Fantasy"
                  ? "bg-indigo-500"
                  : book.Category === "Biography"
                  ? "bg-orange-500"
                  : book.Category === "Other"
                  ? "bg-gray-500"
                  : "bg-gray-400")
              }
            >
              {book.Category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
    </>
    
  );
}
