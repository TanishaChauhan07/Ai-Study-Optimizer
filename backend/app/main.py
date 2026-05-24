from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import study
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="AI Study Optimizer",
    description="Extract transcripts from YouTube lectures and convert them into structured study notes.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(study.router, prefix="/api/v1", tags=["Study"])

@app.get("/")
def root():
    return {"message": "AI Study Optimizer API is running"}