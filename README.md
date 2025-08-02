# 🧠 Quiz Builder

A modern, full-stack quiz creation and management application built with React and Node.js. Create, customize, and share interactive quizzes with ease.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- PostgreSQL database
- Git

### 📦 Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Arthurysh/quiz-builder
cd quiz-builder
```

#### 2. Frontend Setup
Navigate to the frontend directory and configure environment variables:

```bash
cd frontend
```

Create a `.env` file in the frontend directory:
```env
API_URL=http://localhost:4000
```

Install dependencies and start the development server:
```bash
npm install
npm run dev
```

#### 3. Backend Setup

First, create a PostgreSQL database for the project.

Navigate to the backend directory:
```bash
cd backend
```

Create a `.env` file in the backend directory with your database configuration:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=db_name
```

Install dependencies and start the server:
```bash
npm install
npm run start
```

## 🎯 Getting Started

### Creating Your First Quiz

1. **Access the Application**: Open your browser and navigate to the frontend URL (typically `http://localhost:3000`)

2. **Create a New Quiz**:
    - Click **"Create Quiz"** in the header navigation, or
    - Navigate to **"Quiz List"** and then click **"Create Quiz"**

3. **Fill Out the Form**: Complete the quiz creation form with your questions and answers

4. **Save and Share**: Your quiz is ready to use and share!

---