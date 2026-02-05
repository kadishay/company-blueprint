import { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import Message from './Message';
import './ChatPanel.css';

export default function ChatPanel() {
  const { state, sendMessage, getSelectedPersona, dispatch } = useGame();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const selectedPersona = getSelectedPersona();

  const filteredMessages = state.chatMessages.filter(
    (msg) => msg.personaId === state.selectedPersonaId
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [filteredMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !selectedPersona) return;

    sendMessage(inputValue.trim());
    setInputValue('');
  };

  return (
    <div className="chat-panel pixel-border">
      <div className="chat-header">
        <span className="chat-title">💬 CHAT</span>
        {selectedPersona && (
          <button
            className="clear-btn"
            onClick={() => dispatch({ type: 'CLEAR_CHAT' })}
          >
            CLEAR
          </button>
        )}
      </div>

      <div className="chat-messages pixel-border-inset">
        {!selectedPersona ? (
          <div className="no-persona-message">
            <span>👆</span>
            <p>Select a persona from the map to start chatting</p>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="no-persona-message">
            <span>{selectedPersona.avatar}</span>
            <p>Start a conversation with {selectedPersona.name}</p>
          </div>
        ) : (
          <>
            {filteredMessages.map((msg) => (
              <Message
                key={msg.id}
                message={msg}
                persona={selectedPersona}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={
            selectedPersona
              ? `Message ${selectedPersona.name}...`
              : 'Select a persona first'
          }
          disabled={!selectedPersona || selectedPersona.isBusy}
        />
        <button
          type="submit"
          disabled={!selectedPersona || !inputValue.trim() || selectedPersona.isBusy}
        >
          SEND
        </button>
      </form>
    </div>
  );
}
