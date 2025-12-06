

## 3. Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- CORS middleware

---

## 4. Folder Structure

```
backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── repositories/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
│── package.json
│── .env (ignored)
│── README.md

```

## 5. Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

## 6. Setup Instructions

Install dependencies

cd backend
npm install

Create .env file
Use placeholder values:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start development server

npm run dev

Start production server

npm start

## 7. Running the Server

The server runs locally at:

http://localhost:5000

## 8. API Endpoints

```
🔐 Authentication

Method    Endpoint               Description
POST      /api/auth/register     Register user
POST      /api/auth/login        Login + get token
GET       /api/auth/me           Get logged in user

💬 Comments

Method    Endpoint                     Description
GET       /api/comments                Get paginated comments
POST      /api/comments                Add comment
PUT       /api/comments/:id            Edit comment
DELETE    /api/comments/:id            Delete comment

Query params:

?page=1&limit=10&sort=newest

Sort options:
newest
most_liked
most_disliked

↩️ Reply to Comments

Method    Endpoint                     Description
POST      /api/comments/:id/reply      Add reply

Body:
{
  "text": "This is a reply"
}

Like & Dislike
Method    Endpoint                     Description
POST      /api/comments/:id/like       Like comment
POST      /api/comments/:id/dislike    Dislike comment

Backend will deploy at:
https://comment-system-mern.onrender.com/

Use that URL in the frontend.
```