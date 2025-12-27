const inputEl = document.getElementById("inputText");
const analyzeBtn = document.getElementById("analyzeBtn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");

const modeTextBtn = document.getElementById("modeTextBtn");
const modeFileBtn = document.getElementById("modeFileBtn");
const textModeBlock = document.getElementById("textModeBlock");
const fileModeBlock = document.getElementById("fileModeBlock");
const datasetFileInput = document.getElementById("datasetFile");
const textColumnInput = document.getElementById("textColumnName");

let currentMode = "text"; 

modeTextBtn.addEventListener("click", () => {
  currentMode = "text";
  modeTextBtn.classList.add("active");
  modeFileBtn.classList.remove("active");
  textModeBlock.classList.remove("hidden");
  fileModeBlock.classList.add("hidden");
  statusEl.textContent = "";
  resultsEl.classList.add("hidden");
});

modeFileBtn.addEventListener("click", () => {
  currentMode = "file";
  modeFileBtn.classList.add("active");
  modeTextBtn.classList.remove("active");
  fileModeBlock.classList.remove("hidden");
  textModeBlock.classList.add("hidden");
  statusEl.textContent = "";
  resultsEl.classList.add("hidden");
});

function fakePredict(text) {
  const lowered = text.toLowerCase();
  if (lowered.includes("love") || lowered.includes("great")) {
    return { label: "positive", score: 0.95 };
  } else if (lowered.includes("disappointed") || lowered.includes("bad")) {
    return { label: "negative", score: 0.92 };
  }
  return { label: "neutral", score: 0.55 };
}

async function handleAnalyzeText() {
  const raw = inputEl.value.trim();
  if (!raw) {
    statusEl.textContent = "Please enter at least one sentence.";
    resultsEl.classList.add("hidden");
    return;
  }

  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  statusEl.textContent = `Analyzing ${lines.length} line(s)... (demo mode)`;
  resultsEl.innerHTML = "";
  resultsEl.classList.remove("hidden");

  for (const line of lines) {
    const { label, score } = fakePredict(line);

    const row = document.createElement("div");
    row.className = "result-item";

    const textSpan = document.createElement("span");
    textSpan.className = "result-text";
    textSpan.textContent = line;

    const labelSpan = document.createElement("span");
    labelSpan.className = "result-label";
    labelSpan.textContent = `${label} (${(score * 100).toFixed(1)}%)`;

    row.appendChild(textSpan);
    row.appendChild(labelSpan);
    resultsEl.appendChild(row);
  }

  statusEl.textContent = "Done (demo prediction only).";
}

async function handleAnalyzeFile() {
  const file = datasetFileInput.files[0];
  const columnName = textColumnInput.value.trim();

  if (!file) {
    statusEl.textContent = "Please choose a CSV/Excel file.";
    return;
  }
  if (!columnName) {
    statusEl.textContent = "Please enter the text column name (e.g., Text).";
    return;
  }

  statusEl.textContent =
    `Dataset mode selected. File "${file.name}" with text column "${columnName}". ` +
    "Backend integration will process and return a result file.";
  resultsEl.classList.add("hidden");
}

async function handleAnalyze() {
  if (currentMode === "text") {
    await handleAnalyzeText();
  } else {
    await handleAnalyzeFile();
  }
}

analyzeBtn.addEventListener("click", handleAnalyze);
