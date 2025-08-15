import { useState } from "react";
import "./TextSpecForm.css";

export default function TextSpecForm() {
  const [rolle, setRolle] = useState("");
  const [instruksjoner, setInstruksjoner] = useState("");
  const [lix, setLix] = useState("");
  const [lengde, setLengde] = useState("");
  const [format, setFormat] = useState("");
  const [language, setLanguage] = useState("");
  const [resultat, setResultat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const template = `You are an ${rolle}. Your job is to ${instruksjoner}. Give the answer in ${format} Format and in ${lengde} length. The answer needs to be readable to a person with a LIX score of ${lix}. All communication should be in ${language}.`;
    setResultat(template);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(resultat);
      alert("Copied to clipboard!");
    } catch (err) {
      alert("Failed to copy text. Please try again.");
    }
  }

  return (
    <div className="tsf-container">
      {/* Left: Form */}
      <div className="tsf-wrap">
        <h2 className="tsf-title">Generate Instruction Text</h2>

        <form className="tsf-form" onSubmit={handleSubmit}>
          <label className="tsf-field">
            <span>Rolle</span>
            <input
              type="text"
              value={rolle}
              onChange={(e) => setRolle(e.target.value)}
              placeholder="e.g., teacher, developer"
              required
            />
          </label>

          <label className="tsf-field">
            <span>Instruksjoner</span>
            <textarea
              value={instruksjoner}
              onChange={(e) => setInstruksjoner(e.target.value)}
              placeholder="Describe the task..."
              required
            />
          </label>

          <label className="tsf-field">
            <span>LIX Score</span>
            <input
              type="number"
              value={lix}
              onChange={(e) => setLix(e.target.value)}
              placeholder="e.g., 30"
              required
            />
          </label>

          <label className="tsf-field">
            <span>Lengde</span>
            <input
              type="text"
              value={lengde}
              onChange={(e) => setLengde(e.target.value)}
              placeholder="e.g., short paragraph"
              required
            />
          </label>

          <label className="tsf-field">
            <span>Format</span>
            <input
              type="text"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              placeholder="e.g., list, article"
              required
            />
          </label>

          <label className="tsf-field">
            <span>Language</span>
            <input
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              placeholder="e.g., English, Norwegian"
              required
            />
          </label>

          <button type="submit" className="tsf-btn">Generate</button>
        </form>

        {resultat && (
          <div className="tsf-result">
            <div className="tsf-result-header">
              <h3>Generated Text</h3>
              <button className="tsf-copy-btn" onClick={handleCopy}>Copy</button>
            </div>
            <p>{resultat}</p>
          </div>
        )}
      </div>

      {/* Right: Info Box */}
      <aside className="tsf-info">
        <h3>About This Form</h3>
        <p>
          This form creates a text prompt based on your inputs using a fixed
          template. Fill in:
        </p>
        <ul>
          <li><strong>Rolle:</strong> Who you want the AI or person to act as.</li>
          <li><strong>Instruksjoner:</strong> What task or content should be produced.</li>
          <li><strong>LIX Score:</strong> Target readability level.</li>
          <li><strong>Lengde:</strong> Desired length (words, sentences, paragraphs).</li>
          <li><strong>Format:</strong> Style of the answer (e.g., article, list).</li>
          <li><strong>Language:</strong> The language for the output.</li>
        </ul>
        <p>
          When you click <em>Generate</em>, the inputs are combined into a
          single structured instruction.
        </p>
      </aside>
    </div>
  );
}

