# Sentiment Analysis Tool

A fast, accurate deep learning web application that analyzes sentiment in text using DistilBERT. Perfect for social media monitoring, customer feedback analysis, and research projects.

🚀 **[Try Live Demo Here →](https://arungurajapu.github.io/Sentiment_Analysis)**

---

## Features

🚀 Real-time sentiment prediction (Positive/Negative)
📊 Batch analysis with CSV/Excel datasets
🤖 DistilBERT transformer model for high accuracy
⚡ Instant results with confidence scores
📱 Fully responsive mobile design
🌐 Hosted on GitHub Pages + Hugging Face

---

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend API**: Hugging Face Spaces (DistilBERT)
- **Hosting**: GitHub Pages
- **Model**: DistilBERT (Transformer-based NLP)
- **Storage**: Browser localStorage
- **Database**: JSON-based user management

---

## Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/arungurajapu/Sentiment_Analysis.git
cd Sentiment_Analysis
```

### 2️⃣ No Dependencies Required!

This is a **pure frontend project**. No pip install, no npm install needed.

### 3️⃣ Run Locally (Optional)

Open `index.html` in your browser:

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

Or use a local server:

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### 4️⃣ Live Version

No installation needed! Just visit:
👉 **[https://arungurajapu.github.io/Sentiment_Analysis](https://arungurajapu.github.io/Sentiment_Analysis)**

---

## How to Use

### Text Analysis

1. Open the app → Click "Text" mode
2. Paste or type your text (one sentence per line)
3. Click "Analyze Sentiment"
4. View results with confidence scores (0-100%)
5. Your analysis auto-saves to history

### Dataset Analysis

1. Open the app → Click "Dataset" mode
2. Upload CSV or Excel file
3. Enter the column name containing text (e.g., "Review", "Text", "Comment")
4. Click "Analyze Sentiment"
5. View sentiment breakdown for all rows
6. Results stored in analysis history

---

## Project Architecture

```
Frontend (GitHub Pages)
    ↓
HTML/CSS/JavaScript
    ↓
Calls API Endpoints
    ↓
Hugging Face DistilBERT
    ↓
Returns Sentiment Predictions
    ↓
Display Results + Save to History
```

### Components

**index.html** - Main UI with text/dataset input, results display
**script.js** - API calls, history management, result rendering
**style.css** - Responsive design, result cards, modal styling

---

## File Structure

```
Sentiment_Analysis/
│
├── index.html          # Main application page
├── script.js           # JavaScript logic & API calls
├── style.css           # Styling & responsive design
├── README.md           # This file
└── assets/             # Screenshots (add later)
```

---

## API Details

The app uses **Hugging Face Spaces API** with DistilBERT for sentiment analysis.

### Text Analysis Endpoint

```
POST https://arungurajapu-sentiment_analysistthis.hf.space/predict_text
```

### File Analysis Endpoint

```
POST https://arungurajapu-sentiment_analysistthis.hf.space/predict_file
```

For detailed API documentation, visit the [Hugging Face Spaces endpoint](https://huggingface.co/spaces/arungurajapu/sentiment_analysis).

---

## Model Information

**Model**: DistilBERT (distilbert-base-uncased-finetuned-sst-2-english)

**Accuracy**: ~91% on test data
**Speed**: Sub-second predictions
**Languages**: English
**Training Data**: SST-2 (Stanford Sentiment Treebank)

---

## Features Explained

| Feature | Purpose |
|---------|---------|
| **Text Mode** | Analyze 1-100+ sentences at once |
| **Dataset Mode** | Batch analyze CSV/Excel files |
| **Real-time Prediction** | Instant results while you type |
| **Confidence Score** | Know how confident the model is (0-100%) |
| **Analysis History** | Track all past analyses locally |
| **Responsive Design** | Works on phone, tablet, desktop |

---

## Limitations & Known Issues

✓ English text only (model trained on English)
✓ Works best with 2-10 word sentences
✓ Handles sarcasm inconsistently (common in NLP)
✓ Max 10 results displayed (load first 10)
✓ File size limit: ~50MB (reasonable for most datasets)

---

## Browser Support

✅ Chrome/Brave (Recommended)
✅ Firefox
✅ Safari
✅ Edge
⚠️ Internet Explorer (Not supported)

---

## Common Questions

**Q: Is my data saved on your server?**
A: No. Analysis history stays in your browser only.

**Q: Can I use this for commercial purposes?**
A: Yes, under Apache 2.0 License. You can modify and use freely.

**Q: Can I analyze non-English text?**
A: Currently English only. Multilingual version coming soon.

**Q: Why are results sometimes wrong?**
A: DistilBERT is 91% accurate. Complex sarcasm and context sometimes confuse it.

**Q: When will login/register be available?**
A: User authentication features coming in future updates!

**Q: Can I download results as CSV?**
A: Future feature! For now, take screenshots or copy results manually.

---

## Future Roadmap

🚧 User authentication (Login/Register)
🚧 Export results as CSV/PDF
🚧 Multilingual sentiment analysis (Spanish, Hindi, etc.)
🚧 Emotion detection (joy, anger, sadness, fear)
🚧 Aspect-based sentiment analysis
🚧 Real-time social media feed analysis
🚧 Dark mode
🚧 API rate limiting dashboard

---

## Deployment Info

**Deployed on**: GitHub Pages (auto-updates with git push)
**Live URL**: https://arungurajapu.github.io/Sentiment_Analysis
**Hosted by**: GitHub (free, unlimited)
**Backend API**: Hugging Face Spaces (free tier)

### Deploy Your Own Version

1. Fork this repository
2. Enable GitHub Pages in settings
3. Push changes to `main` branch
4. Your version goes live at `https://yourusername.github.io/Sentiment_Analysis`

---

## Contributing

Contributions welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/awesome-feature`
3. Make changes and commit: `git commit -m 'Add awesome feature'`
4. Push to branch: `git push origin feature/awesome-feature`
5. Submit a Pull Request

---

## License

This project is licensed under the **Apache License 2.0**.

You are free to:
✅ Use commercially
✅ Modify
✅ Distribute
✅ Include in your projects

Full license: See LICENSE file or [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)

---

## Troubleshooting

### App won't load?
- Clear browser cache (Ctrl+Shift+Delete)
- Disable browser extensions
- Try incognito mode
- Check internet connection

### API errors?
- Check internet connection
- Hugging Face Spaces might be restarting (try again in 1 minute)
- Check browser console (F12) for detailed errors

### Results not saving?
- Enable localStorage (not in private/incognito mode)
- Check browser storage limits

### Upload issues?
- File must be CSV or Excel format
- Column name must match exactly (case-sensitive)
- File size should be under 50MB

---

## Author & Contact

👤 **Chandra Mouli Arun Gurajapu**
📧 Email: arungurajapu@gmail.com
🔗 GitHub: [@arungurajapu](https://github.com/arungurajapu)

---

## Acknowledgments

🙏 **DistilBERT** - Hugging Face for transformer model
🙏 **GitHub** - Free hosting with GitHub Pages
🙏 **Hugging Face** - Spaces for easy API deployment
🙏 Inspired by industry-standard sentiment analysis tools

---

## Star & Fork!

If this project helped you, please ⭐ star it on GitHub!

---

**Last Updated**: December 30, 2025
**Status**: ✅ Production Ready
