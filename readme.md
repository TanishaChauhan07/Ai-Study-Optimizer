<div align="center">

<img src="https://img.shields.io/badge/AI%20Study%20Optimizer-v1.0-6366f1?style=for-the-badge&logoColor=white" />

# 🎓 AI Study Optimizer

**Transform any YouTube lecture into structured study notes in seconds.**

[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![Groq](https://img.shields.io/badge/Groq-LLaMA3-F55036?style=flat-square)](https://groq.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📌 Overview

AI Study Optimizer is a full-stack web application that eliminates manual note-taking from video lectures. Paste any YouTube URL — the system extracts the transcript, processes it through a large language model, and returns clean, structured study notes in under 30 seconds.

Built with a **FastAPI** backend, **React** frontend, and powered by **LLaMA 3.3 70B** via the Groq API.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 Transcript Extraction | Automatically pulls captions from any YouTube video |
| 🧠 AI-Powered Notes | LLaMA 3.3 70B generates structured content |
| 📋 Summary | Concise 3-5 sentence overview of the lecture |
| 💡 Key Concepts | Most important ideas explained clearly |
| ✅ Action Items | Practical exercises to reinforce learning |
| ⭐ Study Points | Critical facts you need to remember |
| 🎯 Focus Topic | Narrow AI analysis to a specific subject |
| 📋 Copy Notes | One-click copy everything to clipboard |

---

## 🛠️ Tech Stack
Frontend  →  React 18 + Vite + Axios
Backend   →  FastAPI (Python) + Uvicorn
AI Model  →  LLaMA 3.3 70B via Groq API (free)
Other     →  youtube-transcript-api, Pydantic, python-dotenv

---

## 📁 Project Structure
ai-study-optimizer/
├── backend/
│   ├── app/
│   │   ├── main.py                    # FastAPI app + CORS
│   │   ├── routers/study.py           # API endpoints
│   │   ├── services/
│   │   │   ├── transcript_service.py  # YouTube transcript extraction
│   │   │   └── gpt_service.py         # Groq LLM integration
│   │   └── models/schemas.py          # Pydantic request/response models
│   └── requirements.txt
└── frontend/
└── src/
├── components/
│   ├── InputForm.jsx           # URL input screen
│   ├── LoadingScreen.jsx       # Animated loading state
│   └── ResultsPage.jsx         # Study notes display
├── App.jsx
└── index.css

---

## ⚙️ Local Setup

### Prerequisites
- Python 3.9+
- Node.js 18+
- Free Groq API key → [console.groq.com](https://console.groq.com)

### 1. Clone the repository
```bash
git clone https://github.com/TanishaChauhan07/Ai-Study-Optimizer.git
cd Ai-Study-Optimizer
```

### 2. Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Create a `.env` file inside `backend/`:
GROQ_API_KEY=your_groq_api_key_here

Start the server:
```bash
uvicorn app.main:app --reload
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173** 🚀

---

## 🔌 API Reference

### `POST /api/v1/study-notes`
Generate structured study notes from a YouTube URL.

**Request:**
```json
{
  "youtube_url": "https://www.youtube.com/watch?v=aircAruvnKk",
  "focus_topic": "neural networks"
}
```

**Response:**
```json
{
  "video_title": "But what is a neural network?",
  "summary": "This lecture introduces neural networks...",
  "key_concepts": ["Perceptron: basic unit of a neural network"],
  "action_items": ["Implement a simple neural network from scratch"],
  "study_points": ["Activation functions introduce non-linearity"],
  "transcript_length": 18430
}
```

### `POST /api/v1/transcript`
Extract raw transcript only (no AI processing).

### `GET /api/v1/health`
Health check endpoint.

---

## 🔮 Roadmap

- [ ] Whisper AI support for videos without captions
- [ ] Export notes as PDF
- [ ] Save notes history
- [ ] Flashcard generation
- [ ] Quiz generation from notes
- [ ] Multi-language support

---

## 👩‍💻 Author

**Tanisha Chauhan**
[![GitHub](https://img.shields.io/badge/GitHub-TanishaChauhan07-181717?style=flat-square&logo=github)](https://github.com/TanishaChauhan07)

---

<div align="center">
<sub>Built with ❤️ using FastAPI, React, and Groq AI</sub>
</div>