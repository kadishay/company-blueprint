import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, Persona, ChatMessage, ThinkingEntry } from '../types';
import { initialPersonas, mockResponses, mockThoughts } from '../data/personas';

type GameAction =
  | { type: 'SELECT_PERSONA'; personaId: string | null }
  | { type: 'ADD_MESSAGE'; message: ChatMessage }
  | { type: 'ADD_THINKING'; entry: ThinkingEntry }
  | { type: 'UPDATE_PERSONA'; persona: Persona }
  | { type: 'SET_PERSONA_BUSY'; personaId: string; isBusy: boolean }
  | { type: 'TOGGLE_PAUSE' }
  | { type: 'CLEAR_CHAT' };

const initialState: GameState = {
  personas: initialPersonas,
  selectedPersonaId: null,
  chatMessages: [],
  thinkingLog: [],
  isPaused: false,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SELECT_PERSONA':
      return { ...state, selectedPersonaId: action.personaId };

    case 'ADD_MESSAGE':
      return { ...state, chatMessages: [...state.chatMessages, action.message] };

    case 'ADD_THINKING':
      return {
        ...state,
        thinkingLog: [...state.thinkingLog.slice(-99), action.entry],
      };

    case 'UPDATE_PERSONA':
      return {
        ...state,
        personas: state.personas.map((p) =>
          p.id === action.persona.id ? action.persona : p
        ),
      };

    case 'SET_PERSONA_BUSY':
      return {
        ...state,
        personas: state.personas.map((p) =>
          p.id === action.personaId ? { ...p, isBusy: action.isBusy } : p
        ),
      };

    case 'TOGGLE_PAUSE':
      return { ...state, isPaused: !state.isPaused };

    case 'CLEAR_CHAT':
      return { ...state, chatMessages: [] };

    default:
      return state;
  }
}

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  selectPersona: (id: string | null) => void;
  sendMessage: (content: string) => void;
  getSelectedPersona: () => Persona | undefined;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const selectPersona = (id: string | null) => {
    dispatch({ type: 'SELECT_PERSONA', personaId: id });
  };

  const getSelectedPersona = () => {
    return state.personas.find((p) => p.id === state.selectedPersonaId);
  };

  const sendMessage = (content: string) => {
    if (!state.selectedPersonaId) return;

    const persona = getSelectedPersona();
    if (!persona) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      personaId: state.selectedPersonaId,
      content,
      isUser: true,
      timestamp: new Date(),
    };
    dispatch({ type: 'ADD_MESSAGE', message: userMessage });

    // Set persona as busy
    dispatch({ type: 'SET_PERSONA_BUSY', personaId: persona.id, isBusy: true });

    // Add thinking entry
    const thoughts = mockThoughts[persona.id] || mockThoughts.dev;
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const thinkingEntry: ThinkingEntry = {
      id: `think-${Date.now()}`,
      personaId: persona.id,
      personaName: persona.name,
      content: randomThought,
      timestamp: new Date(),
      color: persona.color,
    };
    dispatch({ type: 'ADD_THINKING', entry: thinkingEntry });

    // Simulate response delay
    setTimeout(() => {
      const responses = mockResponses[persona.id] || mockResponses.dev;
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const responseMessage: ChatMessage = {
        id: `msg-${Date.now()}-response`,
        personaId: persona.id,
        content: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      dispatch({ type: 'ADD_MESSAGE', message: responseMessage });
      dispatch({ type: 'SET_PERSONA_BUSY', personaId: persona.id, isBusy: false });
    }, 1500 + Math.random() * 1000);
  };

  return (
    <GameContext.Provider
      value={{ state, dispatch, selectPersona, sendMessage, getSelectedPersona }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
