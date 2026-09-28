from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="NeuroCode API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "neurocode-backend", "multi_tenancy": "enabled"}

@app.get("/api/v1/students")
def get_students():
    # Simulação com isolamento de tenant (school_id)
    return [
        {"id": 1, "name": "João Silva", "school_id": 1, "profile": "TEA, Potencialidade em Arte"},
        {"id": 2, "name": "Maria Oliveira", "school_id": 1, "profile": "TDAH, Potencialidade em Tecnologia"}
    ]
