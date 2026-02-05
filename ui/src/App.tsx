import { usePersonaMovement } from './hooks/usePersonaMovement';
import { useGame } from './context/GameContext';
import Header from './components/Header/Header';
import GameWorld from './components/GameWorld/GameWorld';
import ChatPanel from './components/Chat/ChatPanel';
import ThinkingLog from './components/ThinkingLog/ThinkingLog';
import './App.css';

function App() {
  usePersonaMovement();
  const { state } = useGame();

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="game-area">
          <GameWorld />
        </div>
        <aside className="sidebar">
          <ThinkingLog />
          <ChatPanel />
        </aside>
      </main>
      {state.isPaused && (
        <div className="pause-overlay">
          <span>PAUSED</span>
        </div>
      )}
    </div>
  );
}

export default App;
