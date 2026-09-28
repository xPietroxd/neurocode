from pydantic_settings import BaseSettings
class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://neurocode_user:NeuroCode@2024!@localhost:5432/neurocode_db"
    SECRET_KEY: str = "super_secret_key"
    class Config:
        env_file = ".env"
settings = Settings()
