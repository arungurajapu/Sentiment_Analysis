# Complete Guide - Sentiment Analysis Tool

Detailed guide for installation, usage, troubleshooting, and FAQs.

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [How to Use](#how-to-use)
3. [Common Questions](#common-questions)
4. [Troubleshooting](#troubleshooting)
5. [Features Explained](#features-explained)

---

## Installation & Setup

### Option 1: Live Demo (Recommended - No Installation)

Simply visit: **[https://arungurajapu.github.io/Sentiment_Analysis](https://arungurajapu.github.io/Sentiment_Analysis)**

No installation, registration, or dependencies needed!

---

### Option 2: Clone & Run Locally

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/arungurajapu/Sentiment_Analysis.git
cd Sentiment_Analysis
```

#### 2️⃣ No Dependencies Required!

This is a **pure frontend project**. No pip install, no npm install needed.

#### 3️⃣ Run Locally

**Method A: Open directly in browser**

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

**Method B: Use a local server**

```bash
python -m http.server 8000
# Visit http://localhost:8000 in your browser
```

---

## How to Use

### Text Analysis

**Step 1**: Open the app
- Visit [https://arungurajapu.github.io/Sentiment_Analysis](https://arungurajapu.github.io/Sentiment_Analysis)
- Or open `index.html` locally

**Step 2**: Select "Text" mode
- Click the **"Text"** button at the top (default mode)

**Step 3**: Enter your text
- Paste or type your text in the textarea
- One sentence per line for best results
- Example:
  ```
  I love this product!
  Terrible service and support.
  Amazing experience overall.
  ```

**Step 4**: Analyze
- Click **"Analyze Sentiment"** button
- Or press **Ctrl + Enter**

**Step 5**: View results
- See sentiment predictions (✅ POSITIVE or ❌ NEGATIVE)
- Each result shows confidence score (0-100%)
- Your analysis auto-saves to history

**Example Output:**
```
✅ POSITIVE (98.5%)
"I love this product!"

❌ NEGATIVE (96.2%)
"Terrible service and support."

✅ POSITIVE (94.1%)
"Amazing experience overall."
```

---

### Dataset Analysis

**Step 1**: Open the app

**Step 2**: Select "Dataset" mode
- Click the **"Dataset"** button

**Step 3**: Upload your file
- Click **"Choose File"**
- Select CSV or Excel file (.csv, .xlsx, .xls)
- Supported file size: up to 50MB

**Step 4**: Specify text column
- Enter the column name containing text
- Must match exactly (case-sensitive)
- Examples: "Review", "Text", "Comment", "feedback"
- Example file structure:
  ```
  | id | Review | Rating |
  | 1  | Love it! | 5 |
  | 2  | Hate it | 1 |
  ```
  → Enter column name: **"Review"**

**Step 5**: Analyze
- Click **"Analyze Sentiment"**

**Step 6**: View results
- See all rows analyzed with sentiments
- First 10 results displayed (most important ones)
- Results stored in analysis history

**Example:**
```
File: product_reviews.csv
Column: "Review"
Status: ✅ 150 rows analyzed

Results:
✅ POSITIVE (99.2%) | "Love it!"
❌ NEGATIVE (98.5%) | "Hate it"
... (more results)
```

---

## Features Explained

| Feature | How It Works |
|---------|------------|
| **Text Mode** | Analyze 1-100+ sentences instantly. One sentence per line. |
| **Dataset Mode** | Upload CSV/Excel. Select text column. Auto-analyzes all rows. |
| **Real-time Prediction** | Get results in <1 second per text. |
| **Confidence Score** | 0-100% score. Higher = more confident prediction. |
| **Positive/Negative** | Binary classification (no "neutral" category). |
| **Analysis History** | All past analyses saved locally in your browser. |
| **Responsive Design** | Works perfectly on phone, tablet, desktop. |

---

## Common Questions

### General Questions

**Q: Is my data saved on your server?**
A: No. Analysis history stays in your browser only. We don't send user data to any server except the sentiment prediction API.

**Q: Can I use this for commercial purposes?**
A: Yes! Under Apache 2.0 License. You can modify, distribute, and use commercially.

**Q: Can I analyze non-English text?**
A: Currently English only. Model trained on English data. Multilingual version coming soon.

**Q: Why are results sometimes wrong?**
A: DistilBERT is 91% accurate. Complex sarcasm, context, and slang sometimes confuse it. This is normal for NLP models.

**Q: When will login/register be available?**
A: User authentication features coming in future updates!

**Q: Can I download results as CSV?**
A: Future feature! For now, take screenshots or copy results manually.

**Q: How accurate is the model?**
A: ~91% accuracy on standard test datasets. Performs best on clear, straightforward sentiment text.

**Q: What's the difference between Positive and Negative?**
A: The model classifies text into two categories. Neutral sentiment is classified as either slightly positive or negative.

---

### Technical Questions

**Q: How does it work internally?**
A: 
1. You submit text to the app
2. Text is sent to Hugging Face API
3. DistilBERT processes it
4. Returns sentiment prediction (Positive/Negative) + confidence score
5. Results displayed instantly

**Q: What model is used?**
A: DistilBERT (distilbert-base-uncased-finetuned-sst-2-english)
- Trained on Stanford Sentiment Treebank (SST-2)
- ~91% accuracy
- Sub-second predictions
- Lightweight and fast

**Q: Is there an API I can use?**
A: Yes! The backend uses Hugging Face Spaces API. See main README for endpoints.

**Q: Can I modify the model?**
A: The frontend is yours to modify. For backend model changes, visit [Hugging Face Spaces](https://huggingface.co/spaces/arungurajapu/sentiment_analysis).

---

### Usage Questions

**Q: How many texts can I analyze at once?**
A: Text Mode: 100+ sentences. Dataset Mode: Limited by file size (50MB max), typically 1000s of rows.

**Q: What file formats are supported?**
A: CSV (.csv) and Excel (.xlsx, .xls) files.

**Q: How do I specify the column name for dataset analysis?**
A: Enter exactly as it appears in your file (case-sensitive).
- ❌ "review" won't match "Review"
- ✅ "Review" matches "Review"

**Q: Can I analyze multiple columns?**
A: Not currently. Specify one text column per analysis.

**Q: How long does analysis take?**
A: Usually <1 second per text. Depends on:
- File size
- Internet connection
- API server status

**Q: Where are my results stored?**
A: In your browser's localStorage (local storage on your computer). Not on any server.

**Q: Can I clear my history?**
A: Yes. Future feature coming. For now, clear browser data manually.

---

### Mobile Questions

**Q: Does it work on mobile?**
A: Yes! Fully responsive. Works on iPhone, Android, tablets, desktops.

**Q: Can I upload files on mobile?**
A: Yes, but file upload depends on your browser. Some mobile browsers have limitations.

**Q: Is it slow on mobile?**
A: No, same speed as desktop. Results still <1 second.

---

## Troubleshooting

### App won't load?

**Symptom**: App not appearing, blank page

**Solutions**:
1. Clear browser cache (Ctrl+Shift+Delete on Windows, Cmd+Shift+Delete on Mac)
2. Disable browser extensions (especially ad blockers)
3. Try in incognito/private mode
4. Check internet connection
5. Try different browser (Chrome, Firefox, Safari)

---

### API errors?

**Symptom**: Error message when clicking "Analyze"

**Possible causes & solutions**:
- **No internet connection** → Check WiFi/data connection
- **API server down** → Hugging Face Spaces might be restarting. Wait 1-2 minutes and try again.
- **CORS error** → Usually temporary. Refresh page and retry.
- **Timeout error** → API took too long. Check your internet speed or try with smaller file.

**Check error details**:
1. Open browser console (F12)
2. Click "Console" tab
3. Look for detailed error message
4. Share error details if contacting support

---

### Results not saving?

**Symptom**: Analysis history empty after refresh

**Causes**:
- Private/Incognito mode enabled (disables localStorage)
- Browser storage full
- Browser storage disabled

**Solutions**:
1. Use normal mode (not private/incognito)
2. Clear browser storage (Settings → Privacy → Clear browsing data)
3. Check if localStorage is enabled:
   - Open console (F12)
   - Type: `localStorage.setItem('test', 'value')`
   - If error appears, localStorage is disabled

---

### Upload issues?

**Symptom**: Can't upload file or file won't process

**Check these**:
- File format is CSV or Excel (.csv, .xlsx, .xls) ✓
- Column name matches exactly (case-sensitive) ✓
- File size < 50MB ✓
- No special characters in column name ✓
- File is valid (not corrupted) ✓

**Example:**
```
❌ "product reviews" (space in file)
❌ "Reviews" (doesn't match "review" in file)
✅ "review" (matches column name exactly)
```

---

### Wrong results?

**Symptom**: Predictions don't match your expectations

**Remember**:
- Model is 91% accurate (not 100%)
- Sarcasm, slang, context often confuse it
- Model trained on English data
- Idioms might be misclassified
- Example:
  - "This is terrible" → NEGATIVE ✓
  - "This is terribly good" → Might classify wrong (context issue)

**Solutions**:
- Verify manually - sometimes model is right, you're wrong!
- Rephrase text more clearly
- Try shorter sentences
- Report persistent issues on GitHub

---

### Other Issues

**Issue**: Page loads slow

**Solutions**:
- Check internet speed
- Hugging Face API might be busy. Try again in few minutes.
- Disable extensions

**Issue**: Text not analyzing

**Solutions**:
- Ensure text is not empty
- Try shorter text first
- Check internet connection
- Clear console errors

**Issue**: File upload button not working

**Solutions**:
- Refresh page
- Try different browser
- Check browser permissions (Settings → Privacy)

---

## Browser Compatibility

| Browser | Status | Notes |
|---------|--------|-------|
| Chrome | ✅ Perfect | Recommended |
| Firefox | ✅ Perfect | Works great |
| Safari | ✅ Perfect | Works on Mac/iOS |
| Edge | ✅ Perfect | Works great |
| Opera | ✅ Perfect | Works great |
| Internet Explorer | ❌ Not supported | Too old, use modern browser |

---

## Performance Tips

**For faster analysis**:
1. Keep sentences short (2-10 words optimal)
2. Use clear, standard English
3. Avoid special characters
4. Use smaller files (< 10MB for datasets)
5. Ensure good internet connection
6. Close other browser tabs

---

## Limitations & Known Issues

✓ English text only
✓ Works best with 2-10 word sentences
✓ Handles sarcasm inconsistently
✓ Max 10 results displayed at once (but processes all)
✓ File size limit: 50MB
✓ No neutral sentiment category (Positive or Negative only)
✓ Context sometimes lost in short phrases

---

## Getting Help

**If you find a bug:**
1. Open browser console (F12)
2. Screenshot the error
3. Go to [GitHub Issues](https://github.com/arungurajapu/Sentiment_Analysis/issues)
4. Create new issue with details

**For questions:**
📧 Email: arungurajapu@gmail.com

---

**Last Updated**: December 31, 2025
**Status**: ✅ Complete & Tested
