
# 📚 HakaytiBookPlatform

A vibrant platform empowering authors to create and sell personalized storybooks. Readers can customize characters, titles, and create memorable, tailor-made experiences. Includes author dashboards, payment integration, and admin management—all in one intuitive system.

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

| Layer       | Technology           |
|-------------|----------------------|
| Frontend    | Vue 3 + Vite + Tailwind CSS |
| Backend     | Node.js + Express    |
| Database    | MongoDB              |
| Auth        | JWT-based sessions   |
| Payments    | Stripe API (+ PayPal)|
| Testing     | Jest + Supertest     |
| Linting     | ESLint + Prettier    |
| Deployment  | Docker + GitHub Actions |

---

## 🔧 Quick Start (Locally)

1. **Clone the repo**  
   ```bash
   git clone https://github.com/ahmedfarghaly261/HakaytiBookPlatform.git
   cd HakaytiBookPlatform
Install dependencies

bash
Copy
Edit
npm install
Configure environment variables
Duplicate .env.example to .env and populate:

ini
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
Run in development mode

bash
Copy
Edit
npm run dev
Access the app

Frontend: http://localhost:3000

API: http://localhost:3001/api/v1

🧪 Running Tests & Quality Checks
Execute tests

bash
Copy
Edit
npm test
Lint & fix files

bash
Copy
Edit
npm run lint
📃 API Overview
All endpoints are prefixed with /api/v1.
Here are the key ones:

POST /auth/register
Register a new user.

POST /auth/login
Login and receive JWT token.

GET /books
Browse all available books.

GET /books/:id
Get details for a specific book.

POST /books (Author-only)
Create a new book listing.

PUT /books/:id (Author-only)
Update a listing.

POST /checkout
Initiate payment via Stripe.

GET /admin/users (Admin-only)
List and manage users.

Full request/response examples available in [docs/api.md].

🎯 Screenshots
Add visuals here—e.g.,

User-facing homepage

Author dashboard

Payment flow

🤝 Contributing
Contributions appreciated! To get started:

Fork the repo

Create a feature branch: git checkout -b feat/my-awesome-feature

Commit changes: git commit -m "Add new feature"

Push: git push origin feat/my-awesome-feature

Submit a Pull Request

Check out [CONTRIBUTING.md] for style guides and CI requirements.

📄 License
Distributed under the MIT License. See [LICENSE.md] for details.

🧭 Support
For questions or help, please open an issue or contact Ahmed Farghaly.
