from typing import List

from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd

from inference import predict_batch

# -------------------------------------------------------
# Create FastAPI application instance
# -------------------------------------------------------
app = FastAPI(title="Sentiment Analysis API")

# -------------------------------------------------------
# CORS configuration (allows frontend to call this API)
# -------------------------------------------------------
origins = [
    "http://localhost:5500",      # Example: VS Code Live Server
    "http://127.0.0.1:5500",
    # later you will add:
    # "https://<your-username>.github.io",
    # "https://<your-username>.github.io/<your-frontend-repo>",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # Which domains are allowed
    allow_credentials=True,
    allow_methods=["*"],          # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],          # Allow all HTTP headers
)

# -------------------------------------------------------
# Pydantic models for /predict_text endpoint
# -------------------------------------------------------

class TextRequest(BaseModel):
    # Request body JSON format: { "texts": ["...", "..."] }
    texts: List[str]

class TextResult(BaseModel):
    # Single prediction item in the response
    text: str
    label: str
    score: float

class TextResponse(BaseModel):
    # Whole response: { "results": [ {…}, {…} ] }
    results: List[TextResult]


# -------------------------------------------------------
# Simple health check endpoint
# -------------------------------------------------------
@app.get("/")
async def root():
    # This is just to verify API is running
    return {"status": "ok", "message": "Sentiment API running"}


# -------------------------------------------------------
# /predict_text : for sentences from textarea
# -------------------------------------------------------
@app.post("/predict_text", response_model=TextResponse)
async def predict_text(payload: TextRequest):
    """
    Accepts JSON: { "texts": ["sentence1", "sentence2", ...] }
    Returns: { "results": [ {text, label, score}, ... ] }
    """
    if not payload.texts:
        # If user sends empty list, return 400 error
        raise HTTPException(status_code=400, detail="No texts provided")

    # Call your model inference (batch) with the list of texts
    results_raw = predict_batch(payload.texts)

    # Convert raw dicts from inference into Pydantic TextResult objects
    results = [
        TextResult(text=r["text"], label=r["label"], score=r["score"])
        for r in results_raw
    ]

    # FastAPI automatically turns TextResponse into JSON
    return TextResponse(results=results)


# -------------------------------------------------------
# /predict_file : for uploaded CSV/Excel datasets
# -------------------------------------------------------
@app.post("/predict_file")
async def predict_file(
    file: UploadFile = File(...),
    text_column: str = Form(...)
):
    """
    Accepts form-data with:
      - file: uploaded CSV or Excel file
      - text_column: name of the column containing text

    Returns JSON with row_count and predictions list.
    """

    # 1) Read uploaded file into pandas DataFrame
    try:
        if file.filename.endswith(".csv"):
            # file.file is a file-like object; pandas can read it directly
            df = pd.read_csv(file.file)
        elif file.filename.endswith(".xlsx") or file.filename.endswith(".xls"):
            df = pd.read_excel(file.file)
        else:
            # Unsupported extension: raise an HTTP 400 error
            raise HTTPException(status_code=400, detail="Unsupported file type")
    finally:
        # Release file handle
        file.file.close()

    # 2) Check that the requested column exists
    if text_column not in df.columns:
        raise HTTPException(
            status_code=400,
            detail=f"Column '{text_column}' not found in uploaded file",
        )

    # 3) Extract text column as list of strings
    texts = df[text_column].astype(str).tolist()

    # 4) Run predictions using your existing batch function
    results_raw = predict_batch(texts)

    # 5) Build response JSON
    return {
        "row_count": len(texts),
        "predictions": [
            {
                "text": r["text"],
                "label": r["label"],
                "score": r["score"],
            }
            for r in results_raw
        ],
    }
