# AI Study Optimizer

AI-powered platform that transforms long YouTube lectures into structured study material.  
It helps students save time by generating summarized notes, quizzes, and productivity insights from lecture videos.

## Problem
Students often spend hours watching long lectures before exams.  
Revising those videos again is time-consuming and inefficient.

## Solution
AI Study Optimizer extracts key concepts from lecture videos and converts them into structured notes and practice quizzes.  
This allows students to revise faster and track their study productivity.

## Features
- Convert YouTube lectures into summarized notes
- Generate quizzes automatically from lecture content
- Highlight key concepts and important topics
- Track student study productivity
- Smart revision system before exams
- Export notes for quick revision
  
## How It Works

1. User pastes a YouTube lecture link.
2. Backend extracts the video transcript.
3. AI processes the transcript to generate:
   - summarized notes
   - key concepts
   - quiz questions
4. Results are displayed in the frontend dashboard for quick revision.

   
## Tech Stack
Frontend: React.js  
Backend: Python (FastAPI / Flask)  
AI Integration: NLP models / OpenAI API  
Database: MongoDB  

## Project Structure

AI-Study-Optimizer
│
├── frontend
│   └── React application for user interface
│
├── backend
│   └── Python API for video processing and AI features
│
└── README.md

## Future Improvements
- PDF / PPT note export
- AI flashcards generation
- Study streak tracker
- Chrome extension for YouTube
