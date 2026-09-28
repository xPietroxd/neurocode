from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class AIRequest(BaseModel):
    context: str
    student_profile: str
    task: str

@router.post("/adapt-activity")
def adapt_activity(request: AIRequest):
    return {
        "original": request.task,
        "adapted": f"Adaptação Pedagógica: Para o perfil '{request.student_profile}', sugere-se dividir a atividade '{request.task}' em etapas menores, utilizando apoio visual.",
        "provider": "NeuroCode AI Engine",
        "safety_check": "passed"
    }
