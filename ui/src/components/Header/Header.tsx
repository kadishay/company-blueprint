import { useGame } from '../../context/GameContext';
import './Header.css';

export default function Header() {
  const { state, dispatch, getSelectedPersona } = useGame();
  const selectedPersona = getSelectedPersona();

  return (
    <header className="header pixel-border">
      <div className="header-title">
        <span className="header-icon">🏢</span>
        <h1>PIXEL STARTUP</h1>
      </div>

      <div className="header-status">
        {selectedPersona ? (
          <div className="selected-persona">
            <span className="persona-avatar">{selectedPersona.avatar}</span>
            <span className="persona-info">
              <span className="persona-name">{selectedPersona.name}</span>
              <span className="persona-role">{selectedPersona.role}</span>
            </span>
            {selectedPersona.isBusy && (
              <span className="busy-indicator">THINKING...</span>
            )}
          </div>
        ) : (
          <span className="no-selection">Click a persona to chat</span>
        )}
      </div>

      <div className="header-controls">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_PAUSE' })}
          className={state.isPaused ? 'paused' : ''}
        >
          {state.isPaused ? '▶ PLAY' : '⏸ PAUSE'}
        </button>
      </div>
    </header>
  );
}
