import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import UserSidebar from '../userSidebar/userSidebar';
import UserInfo from '../userInfo/userinfo';

function UserFav() {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:3001/api/favorites/${user.username || user.email}`)
        .then(res => setFavorites(res.data))
        .catch(() => setFavorites([]));
    }
  }, [user]);

  useEffect(() => {
    // Fetch book details for each favorite
    const fetchBooks = async () => {
      const bookDetails = await Promise.all(favorites.map(async fav => {
        const url = fav.bookModel === 'SpecialBook'
          ? `http://localhost:3001/api/specialbooks/${fav.bookId}`
          : `http://localhost:3001/api/books/${fav.bookId}`;
        try {
          const res = await axios.get(url);
          return { ...res.data, bookModel: fav.bookModel };
        } catch {
          return null;
        }
      }));
      setBooks(bookDetails.filter(Boolean));
    };
    if (favorites.length > 0) fetchBooks();
    else setBooks([]);
  }, [favorites]);

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-[#E1ECFE] to-[#f4eae4]">
      <aside className="border-gray-200 bg-[#f4eae4] md:mr-12 md:min-h-screen shadow-lg">
        <UserSidebar />
      </aside>
      <section className="flex-1 flex flex-col px-4 py-12">
        <div className="w-full max-w-2xl">
          <UserInfo />
          <h2 className="text-2xl font-bold mb-4 mt-8">Your Favorite Books</h2>
          {books.length === 0 ? (
            <p>No favorite books yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map(book => (
                <Link to={`/book/${book._id}`} key={book._id} className="block bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                  <img src={book.image ? `http://localhost:3001/uploads/${book.image}` : '/ss4.png'} alt={book.title} className="w-full h-48 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-600">{book.author}</p>
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">{book.bookModel}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
export default UserFav;