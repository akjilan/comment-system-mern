# Comment System Backend

A Node.js + Express + MongoDB backend for a JWT-authenticated comment system with replies, likes/dislikes, sorting, and pagination.

---

# Setup Guide

## 1. Navigate to the backend folder

```bash
cd backend
2. Install dependencies
bash
Copy code
npm install
3. Create a .env file
env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
Example:

env
Copy code
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/commentdb
JWT_SECRET=9c167342692a6a93621e59b4f44f7f37b85831dcc088eb42d701675386999808
4. Start development server
bash
Copy code
npm run dev
5. Start production server
bash
Copy code
npm start
Project Structure
pgsql
Copy code
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── comment.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── user.model.js
│   │   └── comment.model.js
│   │
│   ├── repositories/
│   │   ├── user.repository.js
│   │   └── comment.repository.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── comment.routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   └── comment.service.js
│   │
│   └── server.js
│
├── package.json
└── .env
Available Scripts
Run dev server (with nodemon)
bash
Copy code
npm run dev
Run production server
bash
Copy code
npm start
API Endpoints
Auth
bash
Copy code
POST /api/auth/register
POST /api/auth/login
GET  /api/me
Comments
bash
Copy code
GET    /api/comments?page=1&limit=10&sort=newest
POST   /api/comments
PUT    /api/comments/:id
DELETE /api/comments/:id

POST   /api/comments/:id/like
POST   /api/comments/:id/dislike
POST   /api/comments/:id/reply
Environment Variables Required
ini
Copy code
PORT=5000
MONGO_URI=YOUR_MONGODB_STRING
JWT_SECRET=YOUR_SECRET_KEY
Features Included
Register & Login with JWT

Protected routes

Add, edit, delete comments

Reply to comments

Like / dislike

Sorting: newest, most liked, most disliked

Pagination support

Clean MVC architecture

Service + repository pattern

MongoDB with Mongoose

Deployment Notes
Production environment variables required:
ini
Copy code
MONGO_URI=your_production_mongodb
JWT_SECRET=your_strong_secret
PORT=5000
Running in production:
bash
Copy code
npm install
npm run build (if applicable)
npm start
```
