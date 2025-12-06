# Comment System Frontend

A React + Vite + TailwindCSS frontend for a JWT-authenticated comment system with replies, likes/dislikes, sorting, and pagination.

---

# Setup Guide

## 1. Navigate to the frontend folder

```bash
cd frontend
2. Install dependencies
bash
Copy code
npm install
3. Create a .env file
env
Copy code
VITE_API_BASE_URL=http://localhost:5000/api
For production:

env
Copy code
VITE_API_BASE_URL=https://your-backend-domain.com/api
4. Start development server
bash
Copy code
npm run dev
5. Build for production
bash
Copy code
npm run build
6. Preview production build
bash
Copy code
npm run preview
Project Structure
pgsql
Copy code
frontend/
│
├── src/
│   ├── api/
│   │   ├── authApi.js
│   │   └── commentsApi.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CommentForm.jsx
│   │   ├── CommentItem.jsx
│   │   ├── CommentList.jsx
│   │   ├── ReplyList.jsx
│   │   ├── SortBar.jsx
│   │   ├── Pagination.jsx
│   │   └── ConfirmModal.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── AuthProvider.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   └── CommentPage.jsx
│   │
│   ├── routes/
│   │   ├── AppRouter.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── RedirectIfAuth.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
└── package.json
Available Scripts
Run dev server
bash
Copy code
npm run dev
Build
bash
Copy code
npm run build
Preview build
bash
Copy code
npm run preview
Environment Variables Required
ini
Copy code
VITE_API_BASE_URL=YOUR_BACKEND_URL/api
Features Included
Login & Registration

JWT-based authentication with auto-refresh

Protected routes

Add, edit, delete comments

Reply to comments

Like / dislike comments

Sorting: newest, most liked, most disliked

Pagination

Modern UI using TailwindCSS

Toast notifications

Profile page

Navbar with logout

Deployment Notes
Vercel / Netlify build command:
arduino
Copy code
npm run build
Publish directory:
nginx
Copy code
dist
Add environment variable:
ini
Copy code
VITE_API_BASE_URL=https://your-production-backend.com/api # demo
```
