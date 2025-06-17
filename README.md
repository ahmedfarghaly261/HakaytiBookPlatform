📚 BookPlatform
A full-stack web application built for book lovers, offering seamless user authentication, intuitive book management, and a modern, responsive user interface.

✨ Features
🔐 User Authentication & Authorization
Register and login with username, email, and password

Session management using localStorage

Role-based access: admin-only routes for managing users

📚 Book Management
Browse all books and explore featured categories

Discover trending, new releases, and special picks

Add books to favorites and saved lists

Leave comments on books

View detailed book pages with cover images

🧑‍💻 Admin Panel
View a list of all registered users

Delete users (admin only)

Secure admin-only API endpoints

💡 User Experience
Fully responsive design for desktop and mobile

Clean layout with sidebar, header, and modal components

Notification bell for logged-in users

User profile with avatar, personal details, and activity

🛠️ Technology Stack
Layer	Tech Stack
Frontend	React, Vite, Tailwind CSS
Backend	Node.js, Express.js, MongoDB (Mongoose)

📁 Project Structure
bash
Copy
Edit
BookPlatform/
├── backend/     # Express.js API (routes, models, config)
└── frontend/    # React app (UI, components, context)
🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone <repo-url>
cd BookPlatform
2. Install dependencies
Backend
bash
Copy
Edit
cd backend
npm install
Frontend
bash
Copy
Edit
cd ../frontend
npm install
3. Start the development servers
Backend (http://localhost:5000)
bash
Copy
Edit
cd backend
npm start
Frontend (http://localhost:5173)
bash
Copy
Edit
cd frontend
npm run dev
🧩 Full Feature List
✅ Authentication & Authorization
Sign up & login

LocalStorage-based session handling

Admin-only access control

📖 Book Functionality
View and explore book collections

Categorized lists: Trending, New, Special

Add to favorites/saved

Comment system

👤 User Profile & Dashboard
View/update personal info and avatar

Dashboard with user activity

🛡 Admin Controls
View all users

Remove unwanted accounts

🤝 Contribution
Feel free to fork this repo and contribute! Whether it's fixing bugs, improving UI, or adding new features — your contributions are welcome.

📄 License
This project is open-source and available under the MIT License.