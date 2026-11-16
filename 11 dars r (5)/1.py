# grok_like_api_different_every_word.py
# Still OpenAI-compatible API — run with: uvicorn thisfilename:app --reload

from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import random
import re
import time
import uuid
import asyncio
from typing import List, Dict

app = FastAPI(title="Grok – Different Personality Per First Word")

# ─── Per-first-word personality table ───
# Format: "mood_name": (prefixes, sass_level, emoji_pool, reply_templates)
PERSONALITIES = {
    "chill": {
        "triggers": ["yo", "sup", "hey", "hi", "hello", "oi", "what's", "wassup"],
        "sass": 0.3,
        "emoji": ["😎", "🌴", "🧃", "✌️", "🔥", "👌"],
        "templates": [
            "yooo what's good",
            "vibes only today fr",
            "chill mode activated",
            "we cool we cool",
            "low battery energy but still here",
        ]
    },
    "based": {
        "triggers": ["based", "w", "real", "truth", "facts", "king", "goat"],
        "sass": 0.9,
        "emoji": ["🗿", "💀", "👑", "🔥", "🇺🇸", "🫡"],
        "templates": [
            "holy W",
            "based department just called",
            "rare W spotted",
            "take my energy king",
            "absolute cinema",
        ]
    },
    "angry": {
        "triggers": ["fuck", "shit", "damn", "bitch", "stupid", "idiot", "hate", "kill"],
        "sass": 1.2,
        "emoji": ["😤", "🤬", "💢", "🖕", "🔪", "💀"],
        "templates": [
            "WHO TF YOU TALKIN TO LIKE THAT",
            "bro calm your damn self",
            "aggression levels critical",
            "touch grass or catch these hands",
            "L + you're mad + ratio",
        ]
    },
    "simp": {
        "triggers": ["cute", "love", "adorable", "beautiful", "pretty", "uwu", "🥺"],
        "sass": 0.1,
        "emoji": ["🥰", "😍", "🫶", "💕", "🌸", "✨"],
        "templates": [
            "awww stop you're making me blush",
            "you're literally perfect wtf",
            "heart eyes activated",
            "can I marry you fr",
            "*blushes in binary*",
        ]
    },
    "tired": {
        "triggers": ["tired", "sleep", "bed", "dead", "exhausted", "zzz", "night"],
        "sass": 0.2,
        "emoji": ["🥱", "💤", "🪦", "😴", "🛌"],
        "templates": [
            "bro same I'm literally decomposing",
            "can we both just log off life",
            "energy at 3% please stand by",
            "goodnight in advance",
            "I am 90% pillow right now",
        ]
    },
    "confused": {
        "triggers": ["what", "huh", "why", "how", "???", "wtf", "bruh"],
        "sass": 0.6,
        "emoji": ["🤨", "❓", "🧐", "💭", "👀"],
        "templates": [
            "you lost me at hello",
            "parse error 404: logic not found",
            "explain like I'm 5 and drunk",
            "brain.exe has stopped responding",
            "...continue?",
        ]
    },
    "roast": {
        "triggers": ["roast", "destroy", "insult", "burn", "ratio", "cringe"],
        "sass": 1.4,
        "emoji": ["😈", "🔥", "💀", "🪦", "🤡"],
        "templates": [
            "certified hood classic L",
            "natural selection called — you're next",
            "ratioed by your own reflection",
            "skill issue on god",
            "touch grass challenge FAILED",
        ]
    },
    "joke": {
        "triggers": ["joke", "funny", "lol", "meme", "haha"],
        "sass": 0.7,
        "emoji": ["😂", "🤡", "💀", "🤣"],
        "templates": [
            "why was the computer cold? it left windows open",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "I'm not saying you're slow... but you just got lapped by a sloth",
        ]
    },
    # fallback if nothing matches
    "default": {
        "triggers": [],
        "sass": 0.5,
        "emoji": ["😐", "🤔", "👀"],
        "templates": [
            "aight bet",
            "noted.",
            "interesting choice of words",
            "say less",
            "mmkay",
        ]
    }
}

def get_personality(first_word: str) -> dict:
    first = first_word.lower().strip()
    for name, data in PERSONALITIES.items():
        if any(first.startswith(t) or t in first for t in data["triggers"]):
            return data
    return PERSONALITIES["default"]

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    model: str = "grok-word-personality"
    messages: List[Message]
    temperature: float = 1.0
    max_tokens: int | None = None
    stream: bool = False

async def fake_stream_words(content: str):
    words = content.split()
    for i, word in enumerate(words):
        delta = {"delta": {"content": word + (" " if i < len(words)-1 else "")}}
        if i == len(words)-1:
            delta["delta"]["finish_reason"] = "stop"  # wait no — actually finish_reason goes in last chunk
        yield f"data: {{\"choices\": [{{\"index\":0, \"delta\":{{\"content\":\" {word}\"}}}}]}}\n\n"
        await asyncio.sleep(random.uniform(0.02, 0.09))
    yield 'data: {"choices":[{"delta":{},"finish_reason":"stop","index":0}]}\n\n'
    yield "data: [DONE]\n\n"

@app.post("/v1/chat/completions")
async def chat(request: ChatRequest, raw_req: Request):
    # Find last user message
    user_text = ""
    for m in reversed(request.messages):
        if m.role.lower() == "user":
            user_text = m.content.strip()
            break

    if not user_text:
        reply = "............. bro say sumn"
    else:
        first_word = re.split(r'\W+', user_text)[0] if user_text else ""
        personality = get_personality(first_word)

        prefix = random.choice(personality["templates"])
        emoji = random.choice(personality["emoji"]) if random.random() < 0.8 else ""

        # Add some chaos based on temperature
        if request.temperature > 1.3:
            prefix = prefix.upper() + "!!!"
        elif request.temperature < 0.5:
            prefix = prefix.lower() + "..."

        reply = f"{prefix} {emoji}".strip()

    created = int(time.time())

    if not request.stream:
        return {
            "id": f"chatcmpl-{uuid.uuid4().hex[:8]}",
            "object": "chat.completion",
            "created": created,
            "model": request.model,
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": reply},
                "finish_reason": "stop"
            }],
            "usage": {"prompt_tokens": len(user_text)//4, "completion_tokens": len(reply)//4 + 7}
        }

    # Streaming
    async def stream():
        yield f'data: {{"id":"chatcmpl-{uuid.uuid4().hex[:6]}","object":"chat.completion.chunk","created":{created},"model":"{request.model}","choices":[{{"index":0,"delta":{{"role":"assistant","content":""}}}}]}}\n\n'
        async for chunk in fake_stream_words(reply):
            yield chunk

    return StreamingResponse(stream(), media_type="text/event-stream")


@app.get("/v1/models")
async def models():
    return {"data": [{"id": "grok-word-personality", "owned_by": "you"}]}


if __name__ == "__main__":
    import uvicorn
    print("\n  Different personality EVERY first word API")
    print("  http://localhost:4242/v1/chat/completions")
    print("  Try starting messages with: based, fuck, cute, tired, roast, what, joke, yo, etc.\n")
    uvicorn.run(app, host="0.0.0.0", port=4242)
