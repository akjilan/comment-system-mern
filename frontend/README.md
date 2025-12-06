# comment-system-mern


Frontend documentation :


# Comment System Frontend (React + Vite + Tailwind)

This is the frontend of the MERN Comment System project.
It features authentication, comment CRUD, replies, likes/dislikes, sorting, pagination, profile view, and a modern UI with Tailwind CSS.

---

## 📌 Table of Contents

1. Project Overview
2. Features
3. Tech Stack
4. Folder Structure
5. Environment Variables
6. Setup Instructions
7. Running the App
8. Build for Production
9. Deployment Notes

---

## 1. Project Overview

This frontend is built using **React (Vite)** and communicates with the backend API to provide a complete comment system.
Users can log in, register, add/edit/delete comments, reply, like/dislike, and sort comments.

---

## 2. Features

- Login / Register pages
- JWT-based authentication
- View profile
- Add, edit, delete comments
- Add replies
- Like / dislike with validation
- Sorting bar (newest, most liked, most disliked)
- Pagination
- Protected routes
- Global auth context
- Modern UI with Tailwind
- Toast notifications

---

## 3. Tech Stack

- React (Vite)
- React Router
- Axios
- Tailwind CSS
- React Icons
- React Hot Toast

---

## 4. Folder Structure

```bash
frontend/
│── public/
│   └── _redirects   (for Netlify routing)
│
│── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
│── package.json
│── vite.config.js
│── README.md




##setup

Create a .env file inside the frontend folder:

VITE_API_BASE_URL=https://comment-system-mern.onrender.com/api


7. Running the App
Development mode
npm run dev


The app will run at:

http://localhost:5173

8. Build for Production
npm run build


````
