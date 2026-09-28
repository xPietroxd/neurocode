from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import models
from pydantic import BaseModel

class StudentCreate(BaseModel):
    school_id: int
    name: str
    diagnosis_info: str | None = None

router = APIRouter()

@router.get("/")
def read_students(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return db.query(models.Student).offset(skip).limit(limit).all()

@router.post("/", status_code=201)
def create_student(student_data: StudentCreate, db: Session = Depends(get_db)):
    db_student = models.Student(**student_data.model_dump())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student
