import os
import json
from groq import Groq
from typing import Optional
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

SYSTEM_PROMPT = """You are an expert academic assistant that transforms lecture transcripts into structured study materials.
Always respond with valid JSON only — no markdown, no preamble."""

def generate_study_notes(transcript: str, video_title: str, focus_topic: Optional[str] = None) -> dict:
    truncated = transcript[:12000]
    if len(transcript) > 12000:
        truncated += "\n\n[Transcript truncated...]"

    focus_instruction = f"\nPay special attention to content about: {focus_topic}" if focus_topic else ""

    user_prompt = f"""Analyze this YouTube lecture transcript titled "{video_title}" and create structured study notes.{focus_instruction}

TRANSCRIPT:
{truncated}

Respond ONLY with a JSON object in this exact format:
{{
  "summary": "A clear 3-5 sentence summary of the entire lecture",
  "key_concepts": [
    "Concept 1: brief explanation",
    "Concept 2: brief explanation",
    "Concept 3: brief explanation"
  ],
  "action_items": [
    "Action item 1",
    "Action item 2",
    "Action item 3"
  ],
  "study_points": [
    "Important fact 1",
    "Important fact 2",
    "Important fact 3",
    "Important fact 4",
    "Important fact 5"
  ]
}}

Include 3-6 items in each list. Be specific and educational."""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.3,
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)