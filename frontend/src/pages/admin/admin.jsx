import Sidebar from "../../components/sidebar/sidebar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { ChevronDown, MoreVertical } from "lucide-react";
import Modal from './adminTools/modal';

function AdminPage() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (open) => {
    setIsOpen(open);

  };
  const [selectedYear, setSelectedYear] = useState("2024");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [specialBooks, setSpecialBooks] = useState([]);
  const [specialBookToDelete, setSpecialBookToDelete] = useState(null);

  const fetchUsers = () => {
    axios.get('http://localhost:3001/api/auth/users')
      .then(res => setUsers(res.data))
      .catch(() => setUsers([]));
  };

  const fetchBooks = () => {
    axios.get('http://localhost:3001/api/books')
      .then(res => setBooks(res.data))
      .catch(() => setBooks([]));
  };

  const fetchSpecialBooks = () => {
    axios.get('http://localhost:3001/api/specialbooks')
      .then(res => setSpecialBooks(res.data))
      .catch(() => setSpecialBooks([]));
  };

  useEffect(() => {
    fetchUsers();
    fetchBooks();
    fetchSpecialBooks();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/auth/users/${id}`)
      .then(() => fetchUsers())
      .catch(() => alert('Failed to delete user'));
  };

  const handleDeleteBook = (id) => {
    setBookToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDeleteBook = () => {
    if (!bookToDelete) return;
    axios.delete(`http://localhost:3001/api/books/${bookToDelete}`)
      .then(() => fetchBooks())
      .catch(() => alert('Failed to delete book'));
    setDeleteModalOpen(false);
    setBookToDelete(null);
  };
  const cancelDeleteBook = () => {
    setDeleteModalOpen(false);
    setBookToDelete(null);
  };

  const handleDeleteSpecialBook = (id) => {
    setSpecialBookToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDeleteSpecialBook = () => {
    if (!specialBookToDelete) return;
    axios.delete(`http://localhost:3001/api/specialbooks/${specialBookToDelete}`)
      .then(() => fetchSpecialBooks())
      .catch(() => alert('Failed to delete special book'));
    setDeleteModalOpen(false);
    setSpecialBookToDelete(null);
  };
  const cancelDeleteSpecialBook = () => {
    setDeleteModalOpen(false);
    setSpecialBookToDelete(null);
  };

  // Sample data
  const monthlyData = {
    "2024": [16, 4, 13, 26, 16, 10, 7],
    "2023": [-12, -18, -8, -13, -6, -15, -14]
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  // Calculate revenue values
  const revenue2024 = 32.5;
  const revenue2023 = 41.2;
  const growthPercentage = 78;
  const companyGrowth = 62;

  return (

    <>
      <main className="flex flex-row ">
        {/* Sidebar - fixed width */}
        <aside className="border-gray-200">
          <Sidebar />
        </aside>

        {/* Main Content - scrollable table */}


        <section className="flex-1 px-4 py-20 overflow-x-auto">


          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col lg:flex-row">

              {/* Left side - Chart */}
              <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-100 pb-6 lg:pb-0 lg:pr-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-gray-700 text-xl font-medium">Total </h2>
                  <button className="text-gray-400">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex space-x-4 mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-gray-600">2024</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 mr-2"></div>
                      <span className="text-gray-600">2025</span>
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-64 flex items-end relative overflow-x-auto">
                  {/* Y-axis */}
                  <div className="absolute inset-0 hidden sm:block">
                    <div className="relative h-full">
                      {["30", "20", "10", "0", "-10", "-20"].map((label, i) => (
                        <div key={i} className={`absolute ${i === 0 ? 'top-0' : i === 1 ? 'top-1/4' : i === 2 ? 'top-1/2' : i === 3 ? 'top-3/4' : i === 4 ? 'bottom-0' : 'bottom-[-24px]'} w-full border-t border-dashed border-gray-200 flex`}>
                          <span className="text-xs text-gray-400 -mt-2">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bar Chart */}
                  <div className="flex items-end justify-between w-full pt-6 z-10">
                    {months.map((month, index) => (
                      <div key={month} className="flex flex-col items-center w-16">
                        <div
                          className="w-8 bg-blue-500 rounded-t-md"
                          style={{
                            height: `${Math.abs(monthlyData["2024"][index]) * 3}px`,
                            marginBottom: '2px'
                          }}
                        ></div>
                        <div
                          className="w-8 bg-cyan-400 rounded-b-md mt-2"
                          style={{
                            height: `${Math.abs(monthlyData["2023"][index]) * 3}px`
                          }}
                        ></div>
                        <span className="text-gray-400 text-sm mt-2">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Stats */}
              <div className="w-full lg:w-64 pt-6 lg:pt-0 lg:pl-6">
                {/* Year Dropdown */}
                <div className="relative mb-6">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between py-2 px-4 rounded-lg border border-blue-200 text-blue-500"
                  >
                    <span>{selectedYear}</span>
                    <ChevronDown size={16} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      {["2024", "2023"].map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-gray-700"
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Gauge Chart */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 sm:w-40 h-32 sm:h-40">
                    <div className="absolute inset-0 rounded-full border-16 border-blue-100 opacity-30" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
                    <div className="absolute inset-0 rounded-full border-16 border-blue-400" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)' }}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-3xl sm:text-4xl font-bold text-gray-800">{growthPercentage}%</div>
                      <div className="text-gray-500">Growth</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4 text-center text-gray-600">{companyGrowth}% platform Growth</div>

                {/* Revenue Comparison */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="bg-blue-50 rounded-lg p-3 flex-1">
                    <div className="flex items-center justify-center mb-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-2">
                        $
                      </div>
                      <div className="text-sm text-gray-500">2024</div>
                    </div>
                    <div className="text-center font-semibold">${revenue2024}k</div>
                  </div>

                  <div className="bg-cyan-50 rounded-lg p-3 flex-1">
                    <div className="flex items-center justify-center mb-1">
                      <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mr-2">
                        <div className="w-4 h-4 border-2 border-cyan-600 rounded"></div>
                      </div>
                      <div className="text-sm text-gray-500">2025</div>
                    </div>
                    <div className="text-center font-semibold">${revenue2023}k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* tables */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Users table</h2>
            <span className="px-3 py-1 text-blue-600 bg-blue-100 rounded-full text-sm">
              {users.length} users
            </span>
          </div>

          {/* Table wrapper */}
          <div className="w-full overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3.5 px-4 text-left text-gray-500 font-medium">
                        <div className="flex items-center gap-x-3">
                          <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                          <span>Name</span>
                        </div>
                      </th>
                      <th className="px-4 py-3.5 text-left text-gray-500 font-medium">Email</th>
                      <th className="px-4 py-3.5 text-left text-gray-500 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map(user => (
                      <tr key={user._id}>
                        <td className="px-4 py-4 whitespace-nowrap text-gray-700 font-medium">{user.username}</td>
                        <td className="px-4 py-4 whitespace-nowrap text-gray-500">{user.email}</td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <button className="text-gray-500 hover:text-red-500 text-2xl" onClick={() => handleDelete(user._id)}>
                            <RiDeleteBin5Line />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* end members table */}

          <br />
          <br />
          {/* Book List Table */}
          <h1 className="text-2xl font-semibold mx-4 mb-3 ">Book List</h1>
          <span className="px-3 py-1 text-black font-bold bg-red-100 rounded-full text-sm float-end">
              {books.length} Books
            </span>
          <div className="flex flex-col ">
            <div className="overflow-x-auto">
              <div className="min-w-full inline-block align-middle">
                <div className="relative  text-gray-500 focus-within:text-gray-900 mb-4">
                  <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none ">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="black" strokeOpacity="0.2" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <input type="text" id="default-search" className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none" placeholder="Search for book" />
                </div>
                <div className="overflow-hidden ">
                  <table className="min-w-full rounded-xl">
                    <thead>
                      <tr className="bg-gray-50">
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Book ID </th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Book Name </th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> Type </th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize"> writer </th>
                        <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl"> Actions </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                      {books.map(book => (
                        <tr key={book._id} className="bg-white transition-all duration-500 hover:bg-gray-50">
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book._id}</td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book.title}</td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                            {book.Category}
                          </td>
                          <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book.author}</td>
                          <td className="p-5 ">
                            <div className="flex items-center gap-1">
                              <button className="text-gray-500 text-2xl hover:text-red-500" onClick={() => handleDeleteBook(book._id)}>
                                <RiDeleteBin5Line />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> {/* End overflow-x-auto wrapper for Book List table */}
<br />         
<br />         
<br />   
       {/* Special Books Table */}
          <h1 className="text-2xl font-semibold mx-4 mb-3 ">Special Books</h1>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full rounded-xl mb-8">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize rounded-t-xl">Book Name</th>
                  <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Book ID</th>
                  <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Type</th>
                  <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Writer</th>
                  <th className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                {specialBooks.map(book => (
                  <tr key={book._id} className="bg-white transition-all duration-500 hover:bg-gray-50">
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book.title}</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book._id}</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book.Category}</td>
                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{book.author}</td>
                    <td className="p-5 ">
                      <div className="flex items-center gap-2">
                        <button
                          className={`text-blue-600 hover:text-blue-800 p-1 border border-blue-600 rounded px-2 text-xs ${book.forUId ? 'bg-blue-100' : ''}`}
                          title="Made For U"
                          onClick={async () => {
                            await axios.patch(`http://localhost:3001/api/specialbooks/${book._id}/foru`, { forUId: book._id });
                            fetchSpecialBooks();
                          }}
                        >
                          {book.forUId ? `For U (ID: ${book.forUId})` : 'Made For U'}
                        </button>
                        <button
                          className={`text-green-600 hover:text-green-800 p-1 border border-green-600 rounded px-2 text-xs ${book.trainingId ? 'bg-green-100' : ''}`}
                          title="Made Training"
                          onClick={async () => {
                            await axios.patch(`http://localhost:3001/api/specialbooks/${book._id}/training`, { trainingId: book._id });
                            fetchSpecialBooks();
                          }}
                        >
                          {book.trainingId ? `Training (ID: ${book.trainingId})` : 'Made Training'}
                        </button>
                        <button
                          className={`text-yellow-600 hover:text-yellow-800 p-1 border border-yellow-600 rounded px-2 text-xs ${book.newReleasesId ? 'bg-yellow-100' : ''}`}
                          title="New Releases"
                          onClick={async () => {
                            await axios.patch(`http://localhost:3001/api/specialbooks/${book._id}/newrelease`, { newReleasesId: book._id });
                            fetchSpecialBooks();
                          }}
                        >
                          {book.newReleasesId ? `New Release (ID: ${book.newReleasesId})` : 'New Releases'}
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800 p-1"
                          title="Delete Book"
                          onClick={() => handleDeleteSpecialBook(book._id)}
                        >
                          <RiDeleteBin5Line size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> {/* End overflow-x-auto wrapper for Special Books table */}

        </section>



      </main>

      <Modal
        isOpen={deleteModalOpen}
        onClose={specialBookToDelete ? cancelDeleteSpecialBook : cancelDeleteBook}
        title="Delete Book"
      >
        <div className="mb-4">Are you sure you want to delete this book?</div>
        <div className="flex justify-end gap-2">
          <button onClick={specialBookToDelete ? cancelDeleteSpecialBook : cancelDeleteBook} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
          <button onClick={specialBookToDelete ? confirmDeleteSpecialBook : confirmDeleteBook} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">Delete</button>
        </div>
      </Modal>

    </>
  );
}
export default AdminPage;




