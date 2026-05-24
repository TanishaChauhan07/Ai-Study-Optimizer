<div align="center">

# 🎓 AI Study Optimizer

**Transform any YouTube lecture into structured study notes in seconds.**

[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📌 Overview

AI Study Optimizer is a full-stack web application that eliminates manual note-taking from video lectures. Paste any YouTube URL — the system extracts the transcript, processes it through a large language model, and returns clean structured study notes in under 30 seconds.

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

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Backend | FastAPI (Python) |
| AI Model | LLaMA 3.3 70B (Groq) |
| Transcript | youtube-transcript-api |

---

## 📁 Project Structure

```
ai-study-optimizer/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   │   └── study.py
│   │   ├── services/
│   │   │   ├── transcript_service.py
│   │   │   └── gpt_service.py
│   │   └── models/
│   │       └── schemas.py
│   └── requirements.txt
└── frontend/
    └── src/
        ├── components/
        │   ├── InputForm.jsx
        │   ├── LoadingScreen.jsx
        │   └── ResultsPage.jsx
        ├── App.jsx
        └── index.css
```

---


## ⚙️ Local Setup

### Prerequisites
- Python 3.9+
- Node.js 18+

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
uvicorn app.main:app --reload
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/study-notes` | Generate full study notes |
| POST | `/api/v1/transcript` | Extract raw transcript only |
| GET | `/api/v1/health` | Health check |

---

## 🔮 Roadmap

- [ ] Whisper AI for videos without captions
- [ ] Export notes as PDF
- [ ] Save notes history
- [ ] Flashcard generation
- [ ] Quiz generation from notes

---

## 👩‍💻 Author

**Tanisha Chauhan**  
[![GitHub](https://img.shields.io/badge/GitHub-TanishaChauhan07-181717?style=flat-square&logo=github)](https://github.com/TanishaChauhan07)

---

<div align="center">
<sub>Built with ❤️ using FastAPI, React, and LLaMA 3.3</sub>
</div>