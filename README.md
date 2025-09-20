Here’s a clean **README.md** draft tailored for your **Task Manager** repo 👇

---

# Task Manager API

A simple **Task Manager REST API** built with **Node.js, Express, and MongoDB**.
This project provides endpoints to manage tasks (create, read, update, delete) with proper validation and structured code.

---

## 🚀 Features

* Create new tasks
* Get all tasks or a single task by ID
* Update tasks (completed or details)
* Delete tasks
* Error handling middleware
* MongoDB with Mongoose ORM

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** (Mongoose ODM)
* **Nodemon** for development

---

## 📂 Project Structure

```
task-manager/
│── controllers/     # Request handlers (logic for tasks)
│── db/              # MongoDB connection
│── middleware/      # Custom error handling
│── models/          # Mongoose schemas
│── routes/          # API routes
│── app.js           # Main app setup
│── server.js        # Server start file
```

---

## ⚙️ Installation & Setup

1. Clone the repo

   ```bash
   git clone https://github.com/Mohamedelmesery2004/task-Manager.git
   cd task-Manager
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a **.env** file and add your MongoDB connection string:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server

   ```bash
   npm run dev
   ```

---

## 📌 API Endpoints

### 🔹 Tasks

* **Create a Task**
  `POST /api/v1/tasks`

  ```json
  {
    "name": "Finish Node.js project",
    "completed": false
  }
  ```

* **Get All Tasks**
  `GET /api/v1/tasks`

* **Get Single Task**
  `GET /api/v1/tasks/:id`

* **Update Task**
  `PATCH /api/v1/tasks/:id`

  ```json
  {
    "completed": true
  }
  ```

* **Delete Task**
  `DELETE /api/v1/tasks/:id`

---

## 📷 Example Response

```json
{
  "_id": "64ff2b1c9f1a2e0012345678",
  "name": "Finish Node.js project",
  "completed": false,
  "__v": 0
}
```

---

## 📝 License

This project is open-source and available under the **MIT License**.

---


