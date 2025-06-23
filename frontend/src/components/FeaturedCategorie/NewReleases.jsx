import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function NewReleases() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/specialbooks')
      .then(res => {
        // Only books labeled as New Releases
        setBooks(res.data.filter(b => b.newReleasesId));
      })
      .catch(() => setBooks([]));
  }, []);

  return (
    <section className="px-8 py-12 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Releases</h2>

      <div className="flex gap-6 mb-6 text-sm text-gray-500 border-b border-gray-200">
        {['History', 'Science & Math', 'Romance', 'Travel'].map((cat) => (
          <button
            key={cat}
            className={`pb-2 px-1 hover:text-black ${
              cat === 'History' ? 'text-black border-b-2 border-black' : ''
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Side Promo */}
        <div className="bg-pink-50 p-6 rounded-lg flex flex-col items-start justify-between">
          <img
            src="public/img1.png"
            alt="Promo Book"
            className="w-full mb-4"
          />
          <h3 className="text-lg font-medium text-gray-800 mb-1">Get Extra</h3>
          <p className="text-2xl font-bold text-red-500 mb-1">Sale -25%</p>
          <p className="text-sm text-gray-500 mb-4">ON ORDER OVER $100</p>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600">
            View More
          </button>
        </div>

        {/* Books Grid */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book._id} className="flex flex-col">
              <img
                src={book.image ? `http://localhost:3001/uploads/${book.image}` : '/ss4.png'}
                alt={book.title}
                className="w-full h-48 object-cover rounded"
              />
              <span className="text-xs text-red-500 mt-2">New Release</span>
              <h3 className="text-sm font-medium text-gray-800 truncate">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <span className="text-sm font-semibold text-gray-900 mt-1">{book.price || ''}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
