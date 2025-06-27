import { FaHeart, FaPlay, FaStar, FaRegStar } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdGraphicEq } from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import preloader2 from "../../assets/prelod2.gif";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


//  comments
const FeedbackCard = ({ name, rating, comment }) => (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <div className="flex items-start justify-between">
            <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) =>
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
            </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mt-3">{name}</h3>
        <p className="text-sm text-gray-600 mt-2 leading-5">{comment}</p>
    </div>
);


const BookPage = () => {
  const [loading, setLoading] = useState(true);
 


    const { id } = useParams();
    const [book, setBook] = useState(null);
    const { user } = useContext(UserContext);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [comments, setComments] = useState([]);
    const [bookModel, setBookModel] = useState('');
    const [isFav, setIsFav] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // Audio player state
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);




    // Login Modal Component
    const LoginPromptModal = () => (
        <div className={` fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${showLoginModal ? '' : 'hidden'}`}>
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h3>
                <p className="text-gray-600 mb-6">You must be logged in to listen to audiobooks.</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setShowLoginModal(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        Cancel
                    </button>
                    <Link
                        to="/login"
                        className="px-6 py-2 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition-colors"
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );

    // Audio Player Component
    const AudioPlayer = () => (
        <div className="bg-gray-900 text-white p-4 rounded-lg mt-6">
            <div className="flex items-center gap-4 mb-4">
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 flex items-center justify-center bg-[#3498DB] rounded-full hover:bg-[#2980B9] transition-colors"
                >
                    {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">0:00</span>
                        <div className="flex-1 h-2 bg-gray-700 rounded-full">
                            <div
                                className="h-full bg-[#3498DB] rounded-full"
                                style={{ width: `${audioProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-sm">30:00</span>
                    </div>
                    <div className="flex gap-4">
                        <button className="text-sm text-gray-400 hover:text-white transition-colors">
                            1x Speed
                        </button>
                        <button className="text-sm text-gray-400 hover:text-white transition-colors">
                            Chapter 1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );


   //  loading 
 useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1500);
  return () => clearTimeout(timer);
}, []);







    // Fetch suggestions (other books)
    useEffect(() => {
        axios.get('http://localhost:3001/api/books')
            .then(res => {
                // Exclude the current book if present
                setSuggestions(res.data.filter(b => b._id !== id));
            })
            .catch(() => setSuggestions([]));
    }, [id]);
    useEffect(() => {
        if (id) {
            // Try specialbooks first
            axios.get(`http://localhost:3001/api/specialbooks/${id}`)
                .then(res => {
                    setBook(res.data);
                    setBookModel('SpecialBook');
                })
                .catch(() => {
                    // If not found, try regular books
                    axios.get(`http://localhost:3001/api/books/${id}`)
                        .then(res => {
                            setBook(res.data);
                            setBookModel('Book');
                        })
                        .catch(() => {
                            setBook(null);
                            setBookModel('');
                        });
                });
        }
    }, [id]);

    // Check if this book is in user's favorites
    useEffect(() => {
        if (user && id && bookModel) {
            axios.get(`http://localhost:3001/api/favorites/${user.username || user.email}`)
                .then(res => {
                    setIsFav(res.data.some(fav => fav.bookId === id && fav.bookModel === bookModel));
                })
                .catch(() => setIsFav(false));
        } else {
            setIsFav(false);
        }
    }, [user, id, bookModel, success]);

// fav sec
    const handleFav = async () => {
        if (!user) return;
        if (isFav) {
            // Remove from favorites
            await axios.delete('http://localhost:3001/api/favorites', {
                data: { user: user.username || user.email, bookId: id, bookModel }
            });
            setIsFav(false);
        } else {
            // Add to favorites
            await axios.post('http://localhost:3001/api/favorites', {
                user: user.username || user.email, bookId: id, bookModel
            });
            setIsFav(true);
        }
    };

    // Fetch comments 
    useEffect(() => {
        if (id && bookModel) {
            axios.get(`http://localhost:3001/api/comments/${bookModel}/${id}`)
                .then(res => setComments(res.data))
                .catch(() => setComments([]));
        }
    }, [id, bookModel, success]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError("");
        setSuccess("");
        try {
            await axios.post('http://localhost:3001/api/comments', {
                bookId: id,
                bookModel,
                user: user?.username || user?.email || 'Anonymous',
                comment,
                rating
            });
            setSuccess("Comment submitted!");
            setComment("");
            setRating(0);
        } catch (err) {
            setError("Failed to submit comment");
        }
        setSubmitting(false);
    };

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
        <>

        <Header />

            {/* Book Details Section */}
            <div className=" mt-24 flex bg-[#E1ECFE] p-10 rounded-lg shadow-lg  max-w-8xl mx-auto font-sans">
                {/* Book Image */}
                <div className="w-1/3 flex justify-center items-start">
                    <img
                        src={book?.image ? `http://localhost:3001/uploads/${book.image}` : "../../../public/ss4.png"}
                        alt={book?.title || "Book Cover"}
                        className="rounded-md w-[250px] h-auto"
                    />
                </div>

                {/* Book Info */}
                <div className="w-2/3 px-6 space-y-4">
                    {/* Title + Rating */}
                    <div>
                        <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
                            <h1>{book?.title || "Dune"} </h1>
                            {user && (
                                <FaHeart
                                    className={`text-lg cursor-pointer transition ${isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
                                    title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                                    onClick={handleFav}
                                />
                            )}
                        </h1>
                        <div className="text-yellow-500 flex items-center gap-1">
                            {"★".repeat(4)}
                            <span className="text-gray-500 ml-1 text-sm">(75)</span>
                        </div>
                        <p className="text-gray-500 font-semibold text-xl mt-1">BY:{book?.author || "Frank Herbert"}</p>
                    </div>

                    {/* Summary */}
                    <div>
                        <h2 className="font-bold text-lg text-gray-700">Summary</h2>
                        <p className="text-gray-700 text-sm">
                            {book?.description || `Dune is set in the distant future amidst a feudal interstellar
                            society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities...`}
                        </p>
                    </div>                    {/* Audio Section */}
                    <div className="mt-6">
                        {user ? (
                            <AudioPlayer />
                        ) : (
                            <div className="flex flex-col items-start gap-4">
                                <button
                                    onClick={() => setShowLoginModal(true)}
                                    className="flex items-center gap-2 px-6 py-3 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition-colors"
                                >
                                    <FaPlay className="w-4 h-4" />
                                    Listen to Audiobook
                                </button>
                                <p className="text-sm text-gray-600">
                                    Log in to access the full audiobook and more features.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Login Modal */}
                    <LoginPromptModal />

                    {/* Other Buttons */}
                    <div className="flex items-center gap-4 mt-6">
                        
                    </div>


                

                </div>
            </div>
            {/* Suggestions Carousel */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">You may also like</h2>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                >
                    {suggestions.length === 0 ? (
                        <SwiperSlide>
                            <div className="text-gray-500 text-center py-8">No suggestions available.</div>
                        </SwiperSlide>
                    ) : (
                        suggestions.map((sug, idx) => (
                            <SwiperSlide key={sug._id || idx}><Link to={`/book/${sug._id}`} className="">
                                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                                    <img src={sug.image ? `http://localhost:3001/uploads/${sug.image}` : '/ss4.png'} alt={sug.title} className="w-32 h-40 object-cover rounded mb-2" />
                                    <h3 className="text-lg font-semibold text-center">{sug.title}</h3>
                                    <p className="text-gray-600 text-sm mb-1">{sug.author}</p>
                                    <p className="text-xs text-gray-500 mb-2">{sug.Category}</p>
                                   
                                </div> </Link>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>

            {/* Feedback Section */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Feedback</h2>
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                >
                    {comments.length === 0 ? (
                        <SwiperSlide>
                            <div className="text-gray-500 text-center py-8">No feedback yet. Be the first to comment!</div>
                        </SwiperSlide>
                    ) : (
                        comments.map((fb, index) => (
                            <SwiperSlide key={index}>
                                <FeedbackCard name={fb.user} rating={fb.rating} comment={fb.comment} />
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>

                {/* Comment & Rating Form: Only show if user is logged in */}
                {user && (
                    <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Leave a Comment & Rating</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Your Comment</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                rows={3}
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                required
                                placeholder="Write your feedback..."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Your Rating</label>
                            <div className="flex items-center gap-1">
                                {[1,2,3,4,5].map(star => (
                                    <span
                                        key={star}
                                        className={`cursor-pointer text-2xl ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                    >
                                        <FaStar />
                                    </span>
                                ))}
                                <span className="ml-2 text-gray-600">{rating}/5</span>
                            </div>
                        </div>
                        {error && <div className="text-red-500 mb-2">{error}</div>}
                        {success && <div className="text-green-600 mb-2">{success}</div>}
                        <button
                            type="submit"
                            className="bg-yellow-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
                            disabled={submitting}
                        >
                            {submitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>


            <LoginPromptModal />
            {user && <AudioPlayer />}

        <Footer/>
        </>
    );
};

export default BookPage;
