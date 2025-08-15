import { useState } from 'react';
import botsData from '../data/Bots.json';
import './BotList.css';

function BotList() {
  const [openBot, setOpenBot] = useState(null);

  const toggleBot = (name) => {
    setOpenBot(openBot === name ? null : name);
  };

  const copyDescription = async (description) => {
    try {
      await navigator.clipboard.writeText(description);
      alert("Description copied to clipboard!");
    } catch (err) {
      alert("Failed to copy. Please try again.");
    }
  };

  return (
    <div className="bot-list">
      <h2 className="bot-list-title">Ferdiglagde Botter</h2>
      <div className="bot-grid">
        {botsData.bots.map((bot) => (
          <div key={bot.name} className="bot-card">
            <button
              className="bot-name"
              onClick={() => toggleBot(bot.name)}
            >
              {bot.name}
            </button>
            {openBot === bot.name && (
              <div className="bot-details">
                <button
                  className="copy-btn"
                  onClick={() => copyDescription(bot.description)}
                >
                  Kopier Botten
                </button>
                <p>{bot.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotList;
