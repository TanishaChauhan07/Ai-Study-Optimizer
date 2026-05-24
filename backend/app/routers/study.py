from fastapi import APIRouter, HTTPException
from app.models.schemas import StudyRequest, StudyNotes, TranscriptResponse
from app.services.transcript_service import get_transcript
from app.services.gpt_service import generate_study_notes

router = APIRouter()

@router.post("/study-notes", response_model=StudyNotes)
async def create_study_notes(request: StudyRequest):
    try:
        transcript, video_title = get_transcript(request.youtube_url)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    try:
        notes_data = generate_study_notes(transcript, video_title, request.focus_topic)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"GPT processing failed: {str(e)}")

    return StudyNotes(
        video_title=video_title,
        video_url=request.youtube_url,
        summary=notes_data["summary"],
        key_concepts=notes_data["key_concepts"],
        action_items=notes_data["action_items"],
        study_points=notes_data["study_points"],
        transcript_length=len(transcript)
    )

@router.post("/transcript", response_model=TranscriptResponse)
async def extract_transcript(request: StudyRequest):
    try:
        transcript, video_title = get_transcript(request.youtube_url)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return TranscriptResponse(
        video_title=video_title,
        transcript=transcript,
        transcript_length=len(transcript)
    )

@router.get("/health")
async def health_check():
    return {"status": "healthy"}