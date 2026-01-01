# Sentiment Analysis Tool

Analyze emotions in text instantly using AI-powered DistilBERT. Perfect for understanding customer feedback, social media sentiment, product reviews, and research data. Upload datasets or paste text to get real-time positive/negative sentiment predictions with confidence scores.

🚀 **[Try Live Demo Here →](https://arungurajapu.github.io/Sentiment_Analysis)**

---

## Quick Start

1. Visit the **[live demo](https://arungurajapu.github.io/Sentiment_Analysis)** (no installation needed!)
2. Paste text or upload CSV/Excel file
3. Click "Analyze Sentiment"
4. View results with confidence scores

📖 **For detailed setup & usage**: See **[GUIDE.md](./GUIDE.md)**

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
├── GUIDE.md            # Complete guide (installation, usage, FAQ)
└── assets/             # Screenshots (add later)
```

---

## Model Information

**Model**: DistilBERT (distilbert-base-uncased-finetuned-sst-2-english)

**Accuracy**: ~91% on test data
**Speed**: Sub-second predictions
**Languages**: English
**Training Data**: SST-2 (Stanford Sentiment Treebank)

---

## Notebook

You can view and run the full training and experimentation in this Colab notebook:

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](
https://colab.research.google.com/github/arungurajapu/Sentiment_Analysis/blob/main/sentiment_bert.ipynb)


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

**Last Updated**: December 31, 2025
**Status**: ✅ Production Ready
