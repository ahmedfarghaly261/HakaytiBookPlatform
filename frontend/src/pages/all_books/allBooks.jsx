import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";

function AllBooks() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => setBooks(res.data))
      .catch(() => setBooks([]));
  }, []);

  const categories = [
    "All",
    "Fiction",
    "Non-fiction",
    "Science",
    "History",
    "Fantasy",
    "Biography",
    "Other",
  ];

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.Category === selectedCategory);

  return (
    <>
      <Header />
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          All Books
        </h1>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border transition text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {filteredBooks.map((book) => (
            <Link key={book._id} to={`/book/${book._id}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition min-w-[160px] sm:min-w-[180px] md:min-w-[180px] lg:w-[190px] mx-2 mt-2">
                <img
                  className="w-full h-56 object-cover object-center bg-gray-100"
                  src={
                    book.image
                      ? `http://localhost:3001/uploads/${book.image}`
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  alt={book.title}
                />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 font-semibold">
                      {book.Category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {book.publishedDate
                        ? new Date(book.publishedDate).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <div className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {book.description}
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-gray-500">By</span>
                    <span className="text-sm font-medium text-gray-700">
                      {book.author}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {filteredBooks.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No books found in this category.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllBooks;
