from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import students, ai

app = FastAPI(title="NeuroCode API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
app.include_router(students.router, prefix="/api/students", tags=["Estudantes"])
app.include_router(ai.router, prefix="/api/ai", tags=["NeuroCode IA"])

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "neurocode-backend"}
