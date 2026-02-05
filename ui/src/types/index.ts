export interface Position {
  x: number;
  y: number;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  color: string;
  position: Position;
  direction: 'up' | 'down' | 'left' | 'right';
  isMoving: boolean;
  isBusy: boolean;
  avatar: string;
  // Visual customization
  accessory?: 'glasses' | 'headphones' | 'hat' | 'bowtie' | 'earrings';
  hairStyle?: 'short' | 'long' | 'spiky' | 'bald' | 'ponytail' | 'curly' | 'bun' | 'mohawk';
  facialHair?: 'none' | 'beard' | 'goatee' | 'mustache';
  clothing?: 'casual' | 'formal' | 'hoodie';
  holdingItem?: 'coffee' | 'laptop' | 'tablet' | 'phone' | 'none';
  expression?: 'neutral' | 'happy' | 'focused' | 'tired';
}

export interface ChatMessage {
  id: string;
  personaId: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ThinkingEntry {
  id: string;
  personaId: string;
  personaName: string;
  content: string;
  timestamp: Date;
  color: string;
}

export interface GameState {
  personas: Persona[];
  selectedPersonaId: string | null;
  chatMessages: ChatMessage[];
  thinkingLog: ThinkingEntry[];
  isPaused: boolean;
}

export type TileType =
  | 'floor'
  | 'floor-alt'
  | 'rug'
  | 'rug-alt'
  | 'desk'
  | 'desk-l'
  | 'desk-r'
  | 'workstation'
  | 'computer'
  | 'laptop'
  | 'chair'
  | 'chair-left'
  | 'chair-right'
  | 'chair-up'
  | 'chair-down'
  | 'plant'
  | 'plant-big'
  | 'coffee'
  | 'whiteboard'
  | 'whiteboard-large'
  | 'meeting-table'
  | 'wall'
  | 'wall-art'
  | 'window'
  | 'window-large'
  | 'bookshelf'
  | 'printer'
  | 'water-cooler'
  | 'lamp'
  | 'floor-lamp'
  | 'couch'
  | 'couch-left'
  | 'couch-right'
  | 'tv'
  | 'door'
  | 'sign-ceo'
  | 'sign-cto'
  | 'sign-pm'
  | 'sign-dev'
  | 'sign-qa'
  | 'sign-design'
  | 'sign-meeting'
  | 'sign-lounge'
  | 'cabinet'
  | 'trash'
  | 'clock'
  | 'server'
  | 'monitor-dual'
  | 'desk-items'
  | 'monitor-ceo'
  | 'monitor-cto'
  | 'monitor-pm'
  | 'monitor-dev'
  | 'monitor-qa'
  | 'monitor-design';
