import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


function AllBooks() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch all books on mount
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/api/books")
      .then((res) => setBooks(res.data))
      .catch(() => setBooks([]))
      .finally(() => setLoading(false));
  }, []);

  // Handle category change
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  const categories = [
    "All",
    "Fiction",
    "Non-fiction",
    "Science",
    "History",
    "Fantasy",
    "Biography",
    "Romance",
    "Other",
  ];

  // Filter by category first
  let filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.Category === selectedCategory);

  // Then filter by search
  if (search.trim() !== "") {
    const s = search.trim().toLowerCase();
    filteredBooks = filteredBooks.filter(
      (book) => book.title && book.title.toLowerCase().includes(s)
    );
  }

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
              onClick={() => handleCategoryClick(cat)}
              disabled={loading} // Prevent spamming while loading
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            
            </span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by title..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-blue-200 bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 placeholder-blue-300 transition-all duration-200"
              style={{ boxShadow: '0 2px 12px 0 rgba(33,150,243,0.08)' }}
            />
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <br />
            
          </div>
          
        ) : (
          <div className="flex flex-wrap gap-3 justify-center">
            {filteredBooks.map((book) => (
              <Link key={book._id} to={`/book/${book._id}`}>
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 min-w-[160px] sm:min-w-[180px] md:min-w-[180px] lg:w-[210px] mx-2 mt-2 group border border-blue-50 hover:border-blue-200">
                  <div className="relative">
                    <img
                      className="w-full h-56 object-cover object-center bg-gray-100 transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                      src={
                        book.image
                          ? `http://localhost:3001/uploads/${book.image}`
                          : "https://via.placeholder.com/200x300?text=No+Image"
                      }
                      alt={book.title}
                    />
                    <span className="absolute top-2 left-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-wide z-10">
                      {book.Category}
                    </span>
                    {book.publishedDate && (
                      <span className="absolute top-2 right-2 bg-white/80 text-blue-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm z-10 border border-blue-100">
                        {new Date(book.publishedDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {book.title}
                    </h3>
                    {/* <div className="text-sm text-gray-600 mb-2 line-clamp-3">
                      {book.description}
                    </div> */}
                    <div className="mt-2">
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={i < (book.rating || 0) ? "#FFD700" : "#E2E8F0"}
                            viewBox="0 0 20 20"
                            className="w-4 h-4"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-xs text-gray-500">{book.rating ? book.rating.toFixed(1) : "0.0"}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="text-xs text-gray-400">By</span>
                      <span className="flex items-center gap-1">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shadow-sm">
                          {book.author && book.author[0] ? book.author[0].toUpperCase() : "?"}
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
                          {book.author}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                </div>
              </Link>
            ))}
            {filteredBooks.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-10">
                No books found in this category.
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default AllBooks;
