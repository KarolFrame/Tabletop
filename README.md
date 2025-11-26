# 🎮 ZeroPlay — Free Games Discovery Platform

ZeroPlay is a modern platform for discovering and browsing **free-to-play games**, featuring AI-powered reviews, personalized recommendations, and a clean UI built with Angular and FastAPI.

🌐 **Frontend (Vercel):** https://zeroplay-roan.vercel.app  
🖥️ **Backend (Render):** https://zeroplay.onrender.com  

---

## ✨ Main Features

- 🔥 **Dynamic game lists**
  - Most Played  
  - New Releases  
  - Trending (rank + recency score)  
  - Related games by genre and tags

- 🔎 **Smart Search (Fuzzy Matching with Fuse.js)**
  - Fixes typos automatically
  - Example: “oberwatch” → Overwatch
  - Works on top of backend filters
  - Fully client-side

- 🤖 **Integrated AI (OpenRouter)**
  - Chat assistant using Mistral  
  - Automatic AI-generated reviews  
  - Short, language-matching recommendations  

- 🎨 **Modern UI**
  - Angular 20  
  - TailwindCSS  
  - PrimeNG components  
  - Google Material Icons  
  - Fully responsive layout  
  - Custom-made mascot for the chat  

- ⚙️ **FastAPI Backend**
  - SQL database using SQLModel  
  - REST endpoints  
  - Automatic tags parsing  
  - Game ingestion from free games APIs  
  - Trending algorithm based on rank and recency  

- 🚀 **Deployment**
  - Frontend → **Vercel**  
  - Backend → **Render**  
  - SQL database hosted on Render  

---

## 🧱 Project Architecture

```
/
├── frontend/        # Angular 20 + Tailwind + PrimeNG
│   ├── src/
│   ├── angular.json
│   └── package.json
│
├── backend/         # FastAPI + SQLModel
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── db.py
│   │   ├── routes/
│   ├── start.sh
│   └── requirements.txt
│
└── README.md
```

---

## 🖥️ Technologies

### **Frontend**
- Angular 20  
- TypeScript  
- TailwindCSS  
- PrimeNG  
- Google Material Icons  
- RxJS (Observables)
- Fuse.js (Fuzzy Search)  
- Angular Router

### **Backend**
- FastAPI  
- SQLModel (ORM)  
- Python  
- Requests  
- OpenRouter API integration  
- Render deployment

---

## 🔎 Fuzzy Search (Fuse.js)

ZeroPlay integrates Fuse.js to provide typo-tolerant search:
- User enters → overwathc / oberwatch / ovrwach
- Fuse.js ranks similarity
- Correct result is displayed → “Overwatch”

Search flow:  
1. User submits filters
2. Backend filters by:
   - genre
   - platform
   - tags
3. Frontend applies fuzzy search over the returned list
4. Results are displayed in the /results view

This makes search:
- fast
- typo-resistant
- independent from backend performance

---

## 🎮 Free Games API Integration

The backend periodically consumes a **freetogame** to populate the SQL database with:

- name  
- genre  
- platform  
- publisher  
- developer  
- release_date  
- image_url  
- description  
- tags  

These entries are then used to generate:
- related games  
- trending lists  
- AI reviews  

---

## 🤖 AI Integration (OpenRouter)

ZeroPlay uses OpenRouter for:
- Chat assistant  
- AI reviews  
- Smart recommendations  

---

## 🔥 Main API Endpoints

### 🎮 Games

| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/latest10` | Lastest 10 games |
| GET | `/api/top10` | Top 10 by rank |
| GET | `/api/trending` | Trending games (rank + recency) |
| GET | `/api/games` | All games |
| GET | `/api/games/{id}` | Game detail |
| GET | `/api/games/{id}/related` | Related games |

### 🤖 AI

| Method | Route | Description |
|--------|--------|-------------|
| POST | `/review` | AI-generated review |
| POST | `/chat` | Chat assistant |

---

## ⚙️ Running Locally

### Backend

```bash
cd backend
pip install -r requirements.txt
chmod +x start.sh
./start.sh
```

Backend will run at:

```
http://localhost:8000
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:4200
```

---

## 🧪 Trending Algorithm

Trending = **Popularity (rank)** + **Recency (release date)**:

```python
score = (rank_score * 0.6) + (recency_score * 0.4)
```

✔ Makes trending different from “Most Played”  
✔ New games with good rank appear higher  

---

## 📄 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this project as long as proper credit is given.

---

## ✨ Author

Developed by **Carolina Pérez** / **KarolFrame**
ZeroPlay — Free Games Discovery Platform
