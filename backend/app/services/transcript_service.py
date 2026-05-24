from youtube_transcript_api import YouTubeTranscriptApi, FetchedTranscript
import re
import urllib.request
import json

def extract_video_id(url: str) -> str:
    patterns = [
        r"(?:v=|\/)([0-9A-Za-z_-]{11}).*",
        r"(?:embed\/)([0-9A-Za-z_-]{11})",
        r"(?:youtu\.be\/)([0-9A-Za-z_-]{11})",
    ]
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    raise ValueError(f"Could not extract video ID from URL: {url}")

def get_video_title(video_id: str) -> str:
    try:
        url = f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={video_id}&format=json"
        with urllib.request.urlopen(url, timeout=5) as response:
            data = json.loads(response.read())
            return data.get("title", f"YouTube Video ({video_id})")
    except Exception:
        return f"YouTube Video ({video_id})"

def get_transcript(youtube_url: str):
    video_id = extract_video_id(youtube_url)
    try:
        ytt_api = YouTubeTranscriptApi()
        fetched = ytt_api.fetch(video_id)
        full_text = " ".join([snippet.text for snippet in fetched])
        video_title = get_video_title(video_id)
        return full_text, video_title
    except Exception as e:
        raise ValueError(f"Failed to fetch transcript: {repr(e)}")