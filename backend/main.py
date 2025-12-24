from fastapi import FastAPI

app = FastAPI(title="Agentic Backend")

@app.get("/")
async def root():
    return {"message": "Hello World"}
