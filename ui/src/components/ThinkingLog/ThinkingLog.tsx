import { useEffect, useRef, useState } from 'react';
import { useGame } from '../../context/GameContext';
import './ThinkingLog.css';

export default function ThinkingLog() {
  const { state } = useGame();
  const logRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll && logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [state.thinkingLog, autoScroll]);

  const handleScroll = () => {
    if (logRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = logRef.current;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 20;
      setAutoScroll(isAtBottom);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="thinking-log pixel-border">
      <div className="thinking-header">
        <span className="thinking-title">🧠 THINKING LOG</span>
        <button
          className={`autoscroll-btn ${autoScroll ? 'active' : ''}`}
          onClick={() => setAutoScroll(!autoScroll)}
        >
          {autoScroll ? '⬇ AUTO' : '⏸ PAUSED'}
        </button>
      </div>

      <div
        className="thinking-content pixel-border-inset"
        ref={logRef}
        onScroll={handleScroll}
      >
        {state.thinkingLog.length === 0 ? (
          <div className="empty-log">
            <span>💭</span>
            <p>Persona thoughts will appear here...</p>
          </div>
        ) : (
          state.thinkingLog.map((entry) => (
            <div key={entry.id} className="thinking-entry">
              <span className="entry-time">[{formatTime(entry.timestamp)}]</span>
              <span
                className="entry-persona"
                style={{ color: entry.color }}
              >
                {entry.personaName}:
              </span>
              <span className="entry-content">{entry.content}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
