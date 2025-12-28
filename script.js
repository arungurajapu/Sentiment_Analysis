// 🚀 YOUR LIVE API URL
const API_URL = "https://arungurajapu-sentiment-analysis.hf.space/";

class SentimentAnalyzer {
    // Text mode (textarea)
    static async predictText(textareaId, resultsId) {
        const textarea = document.getElementById(textareaId);
        const resultsDiv = document.getElementById(resultsId);
        
        const texts = textarea.value
            .split('\n')
            .map(t => t.trim())
            .filter(t => t.length > 0);
            
        if (texts.length === 0) {
            resultsDiv.innerHTML = "<p style='color: orange;'>Please enter some text!</p>";
            return;
        }
        
        resultsDiv.innerHTML = "<p>🔄 Analyzing...</p>";
        
        try {
            const response = await fetch(`${API_URL}/predict_text`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ texts })
            });
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            this.displayResults(data.results, resultsId);
            
        } catch (error) {
            resultsDiv.innerHTML = `<p style='color: red;'>❌ Error: ${error.message}</p>`;
        }
    }
    
    // File mode (CSV/Excel upload)
    static async predictFile(fileInputId, textColumnId, resultsId) {
        const fileInput = document.getElementById(fileInputId);
        const textColumnInput = document.getElementById(textColumnId);
        const resultsDiv = document.getElementById(resultsId);
        
        const file = fileInput.files[0];
        const textColumn = textColumnInput.value.trim();
        
        if (!file) {
            resultsDiv.innerHTML = "<p style='color: orange;'>Please select a file!</p>";
            return;
        }
        
        if (!textColumn) {
            resultsDiv.innerHTML = "<p style='color: orange;'>Please enter text column name!</p>";
            return;
        }
        
        resultsDiv.innerHTML = "<p>🔄 Processing file...</p>";
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('text_column', textColumn);
        
        try {
            const response = await fetch(`${API_URL}/predict_file`, {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            this.displayResults(data.predictions, resultsId, data.row_count);
            
        } catch (error) {
            resultsDiv.innerHTML = `<p style='color: red;'>❌ Error: ${error.message}</p>`;
        }
    }
    
    // Display results
    static displayResults(results, resultsId, rowCount = null) {
        const resultsDiv = document.getElementById(resultsId);
        
        if (rowCount) {
            resultsDiv.innerHTML += `<p><strong>📊 Processed ${rowCount} rows</strong></p>`;
        }
        
        resultsDiv.innerHTML += `
            <div style="margin-top: 20px;">
                ${results.map((r, i) => `
                    <div style="
                        background: ${r.label === 'LABEL_1' ? '#d4edda' : '#f8d7da'};
                        border-left: 4px solid ${r.label === 'LABEL_1' ? '#28a745' : '#dc3545'};
                        padding: 12px; margin: 8px 0; border-radius: 4px;
                    ">
                        <strong>${r.label === 'LABEL_1' ? '✅ POSITIVE' : '❌ NEGATIVE'}</strong> 
                        (${(r.score * 100).toFixed(1)}% confidence)
                        <br><small>"${r.text.substring(0, 100)}${r.text.length > 100 ? '...' : ''}"</small>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Text mode button
    const textBtn = document.getElementById('predict-text-btn');
    if (textBtn) {
        textBtn.addEventListener('click', () => {
            SentimentAnalyzer.predictText('text-input', 'text-results');
        });
    }
    
    // File mode button
    const fileBtn = document.getElementById('predict-file-btn');
    if (fileBtn) {
        fileBtn.addEventListener('click', () => {
            SentimentAnalyzer.predictFile('file-input', 'text-column-input', 'file-results');
        });
    }
    
    // Clear results
    const clearBtn = document.getElementById('clear-results');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.getElementById('text-results').innerHTML = '';
            document.getElementById('file-results').innerHTML = '';
        });
    }
});
