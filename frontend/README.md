## Frontend Documentation: Comment System Backend (Node.js + Express + MongoDB)

This is the frontend of the MERN Comment System project.
It features authentication, comment CRUD, replies, likes/dislikes, sorting, pagination, profile view, and a modern UI with Tailwind CSS.

---

## 📌 Table of Contents

1. Project Overview
2. Features
3. Tech Stack
4. Folder Structure
5. Install Dependencies
6. Environment Setup
7. Start Development Server
8. Build for Production

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

```
frontend/
│── public/
│   └── _redirects          # Netlify routing rules
│
│── src/
│   ├── api/                # API request functions
│   ├── components/         # Reusable UI components
│   ├── context/            # Global state management
│   ├── pages/              # Page components for routing
│   ├── routes/             # App routes configuration
│   ├── styles/             # Global & module styles
│   ├── App.jsx             # Root app component
│   └── main.jsx            # Entry point
│
│── package.json
│── vite.config.js
│── README.md

```

## 5.Install Dependencies

cd frontend
npm install

## 6. Environment Setup

Create a .env file inside the frontend folder:

VITE_API_BASE_URL=https://comment-system-mern.onrender.com/api

## 7. Start Development Server

npm run dev

The app will run at:

http://localhost:5173

## 8. Build for Production

npm run build

```

```
