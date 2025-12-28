const API_URL = "https://arungurajapu-sentiment-analysis.hf.space";
const textModeBtn = document.getElementById("modeTextBtn");
const fileModeBtn = document.getElementById("modeFileBtn");

const textBlock = document.getElementById("textModeBlock");
const fileBlock = document.getElementById("fileModeBlock");

const analyzeBtn = document.getElementById("analyzeBtn");
const statusBox = document.getElementById("status");
const resultsBox = document.getElementById("results");

// -------- Mode Switching ----------
textModeBtn.addEventListener("click", () => {
  textModeBtn.classList.add("active");
  fileModeBtn.classList.remove("active");
  textBlock.classList.remove("hidden");
  fileBlock.classList.add("hidden");
});

fileModeBtn.addEventListener("click", () => {
  fileModeBtn.classList.add("active");
  textModeBtn.classList.remove("active");
  fileBlock.classList.remove("hidden");
  textBlock.classList.add("hidden");
});

// -------- Analyze Button ----------
analyzeBtn.addEventListener("click", async () => {
  resultsBox.classList.remove("hidden");
  resultsBox.innerHTML = "";
  statusBox.innerHTML = "⏳ Processing...";

  // If TEXT MODE
  if (textModeBtn.classList.contains("active")) {
    await predictText();
  } 
  // If FILE MODE
  else {
    await predictFile();
  }
});

// -------- TEXT MODE ----------
async function predictText() {
  const textarea = document.getElementById("inputText");
  const texts = textarea.value
    .split("\n")
    .map(t => t.trim())
    .filter(t => t.length > 0);

  if (texts.length === 0) {
    statusBox.innerHTML = "⚠️ Please enter some text!";
    return;
  }

  try {
    const res = await fetch(`${API_URL}/predict_text`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texts })
    });

    const data = await res.json();
    statusBox.innerHTML = "✅ Completed";
    showResults(data.results);

  } catch (err) {
    statusBox.innerHTML = "❌ Error connecting to API";
  }
}

// -------- FILE MODE ----------
async function predictFile() {
  const file = document.getElementById("datasetFile").files[0];
  const column = document.getElementById("textColumnName").value.trim();

  if (!file) {
    statusBox.innerHTML = "⚠️ Please upload a file!";
    return;
  }

  if (!column) {
    statusBox.innerHTML = "⚠️ Enter text column name!";
    return;
  }

  const form = new FormData();
  form.append("file", file);
  form.append("text_column", column);

  try {
    const res = await fetch(`${API_URL}/predict_file`, {
      method: "POST",
      body: form
    });

    const data = await res.json();
    statusBox.innerHTML = `✅ Processed ${data.row_count} rows`;
    showResults(data.predictions);

  } catch (err) {
    statusBox.innerHTML = "❌ Error processing file";
  }
}

// -------- Display Results ----------
function showResults(items) {
  resultsBox.innerHTML = items
    .map(r => `
      <div class="result-item ${r.label === "LABEL_1" ? "positive" : "negative"}">
        <div class="result-header">
          <span class="label ${r.label === "LABEL_1" ? "positive" : "negative"}">
            ${r.label === "LABEL_1" ? "Positive 😊" : "Negative 😡"}
          </span>
          <span class="confidence">${(r.score * 100).toFixed(1)}% confidence</span>
        </div>
        <div class="result-text">${r.text}</div>
      </div>
    `)
    .join("");
}

