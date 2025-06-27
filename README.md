# 📚 HakaytiBookPlatform

Empowering authors to publish immersive, personalized audiobooks—while giving listeners the freedom to browse, customize, and enjoy captivating stories anytime, anywhere. With intuitive features like author dashboards,  and full admin control, the platform offers a seamless journey from creation to listening. Whether you're crafting tales or exploring new worlds by sound, it's where stories come to life and voices are truly heard.

---

## 🚀 Highlights

- **Personalized Books** – Readers customize names, appearances, and stories.  
- **Author Tools** – Add/edit books, track sales, and view performance metrics.  
- **Secure Auth** – User registration, login, password reset, JWT-based sessions.  
- **Seamless Checkout** – Integrated checkout with Stripe (or PayPal).  
- **Explore & Discover** – Genre filters, age ranges, full-text search.  
- **Admin Interface** – Moderate users/books and monitor metrics.

---

## 🛠️ Tech Stack

| Layer       | Technology                |
|-------------|---------------------------|
| Frontend    | react +Vite +Tailwind CSS |
| Backend     | Node.js + Express         |
| Database    | MongoDB                   |
| Auth        | JWT-based sessions        |
| Testing     | Jest + Supertest          |
| Linting     | ESLint + Prettier         |
| Deployment  | GitHub Actions            |

---
.

## Features

### User Authentication & Management
- Register and login with username, email, and password
- Session management using local storage
- Admin-only endpoints for user management
- View all users (admin)
- Delete users (admin)

### Book Browsing & Interaction
- Browse all books and featured categories
- View trending, new releases, and special books
- Add books to favorites and saved lists
- Comment on books
- See book details and cover images

### User Experience
- Responsive design for desktop and mobile
- Sidebar, header, and modal components
- Notification bell (visible only to logged-in users)
- User profile with avatar and personal info
- Dashboard and user home page

### Admin Features
- View and manage all registered users
- View and manage all books
- Delete users
- Add & delete books 

### Technology Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)

## Project Structure
- `frontend/` — React app (UI, pages, components, context)
- `backend/` — Express API (routes, models, db)

## Getting Started

### 1. Clone the repository
```
git clone <repo-url>
cd BookPlatform
```

### 2. Install dependencies

#### Backend
```
cd backend
npm install
```

#### Frontend
```
cd ../frontend
npm install
```

### 3. Run the application

#### Start Backend Server
```
cd backend
npm start
```
The backend will run by default on [http://localhost:5000](http://localhost:5000)

#### Start Frontend Dev Server
```
cd frontend
npm run dev
```
The frontend will run by default on [http://localhost:5173](http://localhost:5173)

---

Feel free to contribute or customize for your own book platform!
- Add GitHub badges (build, license, etc.)
- Insert sample `.env.example` file
- Include placeholder screenshots
- Add a live demo section or deployment steps

Would you like me to turn this into an actual `README.md` file you can paste into your GitHub repo?
