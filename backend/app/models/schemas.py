from pydantic import BaseModel
from typing import List, Optional

class StudyRequest(BaseModel):
    youtube_url: str
    focus_topic: Optional[str] = None

class StudyNotes(BaseModel):
    video_title: str
    video_url: str
    summary: str
    key_concepts: List[str]
    action_items: List[str]
    study_points: List[str]
    transcript_length: int

class TranscriptResponse(BaseModel):
    video_title: str
    transcript: str
    transcript_length: int