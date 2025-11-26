from fastapi import APIRouter
from sqlmodel import Session, select
from app.db import engine, Games
import requests
import os

router = APIRouter()

API_KEY = os.getenv("OPENROUTER_API_KEY")

@router.post("/review")
def generate_review(data: dict):
    game_id = data.get("game_id")

    if not game_id:
        return {"response": "Missing game_id."}

    with Session(engine) as session:
        game = session.get(Games, game_id)

    if not game:
        return {"response": "Game not found."}

    prompt = f"""
You are a professional videogame critic.

Your task is to generate a short AI review for a free videogame.
Always reply in the same language the user uses.

GAME DATA PROVIDED:
- Name: {game.name}
- Genre: {game.genre}
- Tags: {game.tags_list()}
- Platform: {game.platform}
- Developer: {game.developer}
- Publisher: {game.publisher}
- Release Date: {game.release_date}
- Description: {game.description}

⚠️ IMPORTANT RULES:
- Length: 45–60 words total.
- Keep tone friendly, modern and helpful.
- Focus on describing:
  • gameplay style
  • what makes it fun or appealing
  • what type of player will enjoy it
- DO NOT repeat the name more than once.
- DO NOT fabricate information that isn’t in the provided data.
- Don’t mention that you are an AI or that this is an AI-generated review.
- The review must feel natural and human.
"""
    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "mistralai/Mistral-7B-Instruct-v0.2",
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "max_tokens": 120,
            "temperature": 0.7
        }
    )

    response_json = response.json()
    print("OPENROUTER RAW RESPONSE:", response_json)

    if "choices" not in response_json:
        return {"response": "AI could not generate a review."}

    review = response_json["choices"][0]["message"]["content"]

    return {"response": review}
