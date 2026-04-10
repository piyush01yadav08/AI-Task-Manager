# 🚀 NeuroTask AI – Smart AI Task Manager

An intelligent full-stack task management application powered by AI, designed to enhance productivity through smart task parsing, prioritization, and modern UI/UX.

---

## 📌 Overview

**NeuroTask AI** is a full-stack web application that allows users to manage tasks efficiently using an intuitive interface and AI-powered features. It supports authentication, real-time task updates, and scalable architecture.

---

## ✨ Features

### 🧠 AI Capabilities

* Natural Language Task Input *(e.g., "Finish assignment tomorrow")*
* AI Task Parsing (title, priority, deadline extraction)
* Smart Task Suggestions *(extendable)*
* AI-ready backend for OpenAI integration

### 📋 Task Management

* Create, update, delete tasks
* Task prioritization (Low, Medium, High)
* Task deadlines
* Status tracking (To Do, In Progress, Done)
* User-specific tasks

### 🔐 Authentication

* Secure Login & Registration
* JWT-based authentication
* Protected API routes

### 💻 Frontend

* Built with **Next.js**
* Responsive design
* API-integrated UI
* Clean and minimal interface (extendable to advanced UI)

### ⚙️ Backend

* Node.js + Express architecture
* RESTful APIs
* MongoDB database with Mongoose
* Modular and scalable code structure

---

## 🏗️ Tech Stack

| Layer          | Technology             |
| -------------- | ---------------------- |
| Frontend       | Next.js, React         |
| Backend        | Node.js, Express       |
| Database       | MongoDB (Mongoose)     |
| Authentication | JWT                    |
| AI Integration | OpenAI API (pluggable) |
| HTTP Client    | Axios                  |

---

## 📁 Project Structure

```
neurotask-ai/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── controllers/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/neurotask-ai.git
cd neurotask-ai
```

---

### 🔹 2. Setup Backend

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key
```

Run backend:

```bash
npm run dev
```

---

### 🔹 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### 📋 Tasks

* `GET /api/tasks` (Protected)
* `POST /api/tasks` (Protected)
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

### 🧠 AI

* `POST /api/ai/parse`
  *(Parses natural language into structured task data)*

---

## 🧠 AI Integration (Example)

You can integrate OpenAI like this:

```js
// Replace AI route logic with OpenAI API
const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "system", content: "Extract task details" },
    { role: "user", content: input }
  ]
});
```

---

## 🚀 Deployment

| Service  | Platform         |
| -------- | ---------------- |
| Frontend | Vercel           |
| Backend  | Render / Railway |
| Database | MongoDB Atlas    |

---

## 🎯 Future Enhancements

* Drag & Drop Kanban Board
* AI Chat Assistant
* Task Analytics Dashboard
* Notifications & Reminders
* Dark Mode UI
* Voice Input for Tasks

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Piyush Yadav**

* LinkedIn: https://www.linkedin.com/in/piyush-yadav-48ba81324
* Email: [piyushyadav24680@gmail.com](mailto:piyushyadav24680@gmail.com)

---


