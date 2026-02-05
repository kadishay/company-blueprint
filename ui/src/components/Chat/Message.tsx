import { ChatMessage, Persona } from '../../types';
import './Message.css';

interface MessageProps {
  message: ChatMessage;
  persona: Persona;
}

export default function Message({ message, persona }: MessageProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`message ${message.isUser ? 'user' : 'persona'}`}>
      <div className="message-avatar">
        {message.isUser ? '👤' : persona.avatar}
      </div>
      <div className="message-content">
        <div className="message-header">
          <span className="message-sender">
            {message.isUser ? 'You' : persona.name}
          </span>
          <span className="message-time">{formatTime(message.timestamp)}</span>
        </div>
        <div
          className="message-bubble"
          style={{
            borderColor: message.isUser ? 'var(--color-accent)' : persona.color,
          }}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}
