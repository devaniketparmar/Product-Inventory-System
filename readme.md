
# 🛒 Product Inventory System (MERN)

>A modern, full-stack inventory management app built with **MongoDB, Express.js, React.js, and Node.js**.

---

## 🚀 Features

- **Add Products**
	- Unique name, description, quantity, and multi-category selection (from seeded categories)
- **Paginated Product Listing**
	- Product name, categories (as tags), added date, and delete option
	- Numbered pagination (1, 2, 3, ...)
- **Filters**
	- Search by product name
	- Multi-select dropdown to filter by categories (shows products in any selected category)
- **Validation & UX**
	- Duplicate product names not allowed (server/client validation)
	- User-friendly error and success feedback
	- Modern, responsive UI (Tailwind + react-select)

---

## 🏗️ Tech Stack

- **Frontend:** React, Redux Toolkit, Tailwind CSS, react-select
- **Backend:** Node.js, Express.js, MongoDB, Mongoose

---

## 📦 Project Structure

```
backend/
	controllers/      # Express controllers
	models/           # Mongoose models
	routes/           # API routes
	seeder/           # Category seeder
	server.js         # Express entry point
frontend/
	src/
		components/     # React UI components
		slices/         # Redux slices
		App.js          # Main app
		...
```

---

## 📝 Requirements

- Node.js, npm, MongoDB

---

## 🛠️ Setup & Run

1. **Install dependencies:**
	 - `cd backend && npm install`
	 - `cd ../frontend && npm install`
2. **Seed categories:**
	 - Categories are auto-seeded on backend start if DB is empty
3. **Start servers:**
	 - Backend: `npm start` (from backend folder)
	 - Frontend: `npm start` (from frontend folder)
4. **Open app:**
	 - Visit [http://localhost:3000](http://localhost:3000)

---

## 📋 Constraints & Best Practices

- No duplicate product names (enforced server & client)
- Clean code structure, scalable for future features
- Both client-side and server-side validation
- Proper error handling and user feedback
- Designed for performance and scalability

---

