import { Bot } from "lucide-react";
import "../../styles/AiAssistant.css";
import logo from "../../assets/aiassisstance.png";
import { useNavigate } from "react-router-dom";

function AiAssistant() {
  const navigate = useNavigate();

  return (
    <section className="ai-assistant-section">
      <div className="ai-assistant-container">
        <div className="ai-assistant-grid">
          <div>
            <h2 className="ai-assistant-title">AI-Powered Health Assistant</h2>
            <p className="ai-assistant-description">
              Get instant answers to your health questions, symptom analysis,
              and personalized health recommendations powered by advanced AI
              technology.
            </p>
            <div>
              <button 
                className="ai-assistant-button"
                onClick={() => navigate("/chat")} // ✅ Navigate on click
              >
                AI Assistant
                <Bot className="ai-assistant-button-icon" />
              </button>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt="AI Health Assistant"
              className="ai-assistant-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiAssistant;
