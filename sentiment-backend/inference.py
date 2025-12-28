# inference.py
from typing import List, Dict
import os
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# Build absolute path to the local model folder (inference_export next to this file)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "inference_export")

print("Loading model from:", MODEL_DIR)

DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

tokenizer = AutoTokenizer.from_pretrained(MODEL_DIR)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_DIR)
model.to(DEVICE)
model.eval()

ID2LABEL = model.config.id2label or {0: "Negative", 1: "Positive"}
LABEL2ID = {v: k for k, v in ID2LABEL.items()}

def predict_single(text: str) -> Dict:
    """
    Run sentiment prediction for a single text.
    Returns: { "label": str, "score": float, "label_id": int }
    """
    if not text or not text.strip():
        return {"label": "Unknown", "score": 0.0, "label_id": -1}

    encoded = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=128,
    )

    encoded = {k: v.to(DEVICE) for k, v in encoded.items()}

    with torch.no_grad():
        outputs = model(**encoded)
        probs = torch.softmax(outputs.logits, dim=-1)[0]
        score, label_id = torch.max(probs, dim=0)

    label_id_int = int(label_id)
    label = ID2LABEL.get(label_id_int, str(label_id_int))
    return {
        "label": label,
        "score": float(score),
        "label_id": label_id_int,
    }


def predict_batch(texts: List[str]) -> List[Dict]:
    """
    Run sentiment prediction for a list of texts.
    Returns a list of dicts in the same order as input.
    """
    cleaned = [t.strip() for t in texts if t and t.strip()]
    if not cleaned:
        return []

    encoded = tokenizer(
        cleaned,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=128,
    )

    encoded = {k: v.to(DEVICE) for k, v in encoded.items()}

    with torch.no_grad():
        outputs = model(**encoded)
        probs = torch.softmax(outputs.logits, dim=-1)

    results = []
    for i, text in enumerate(cleaned):
        p = probs[i]
        score, label_id = torch.max(p, dim=0)
        label_id_int = int(label_id)
        label = ID2LABEL.get(label_id_int, str(label_id_int))

        results.append({
            "text": text,
            "label": label,
            "score": float(score),
            "label_id": label_id_int,
        })

    return results
