import { useGame } from '../../context/GameContext';
import Persona from './Persona';
import Tile from './Tile';
import './GameWorld.css';
import { TileType } from '../../types';

// Office map layout (20x14) - Startup office with proper workstation setups
// Each workstation has: sign → desk with monitor → chair (where persona sits)
const officeMap: TileType[][] = [
  // Row 0 - Top wall with windows
  ['wall', 'wall', 'window', 'wall', 'wall', 'wall', 'window', 'wall', 'wall', 'door', 'wall', 'wall', 'window', 'wall', 'wall', 'wall', 'window', 'wall', 'wall', 'wall'],
  // Row 1 - CEO office | Hallway | CTO office
  ['wall', 'sign-ceo', 'floor', 'floor', 'wall', 'floor', 'floor', 'clock', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall', 'sign-cto', 'floor', 'floor', 'server', 'wall'],
  // Row 2 - CEO desk | | CTO desk
  ['wall', 'desk', 'monitor-ceo', 'plant', 'wall', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall', 'desk', 'monitor-cto', 'desk-items', 'floor', 'wall'],
  // Row 3 - CEO chair | | CTO chair
  ['wall', 'floor', 'chair-up', 'floor', 'wall', 'floor', 'plant-big', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall', 'floor', 'chair-up', 'floor', 'floor', 'wall'],
  // Row 4 - Wall ends | Meeting sign | PM sign
  ['wall', 'bookshelf', 'floor', 'floor', 'floor', 'floor', 'sign-meeting', 'floor', 'floor', 'floor', 'floor', 'floor', 'sign-pm', 'floor', 'floor', 'floor', 'floor', 'floor', 'plant', 'wall'],
  // Row 5 - Meeting room | PM desk
  ['wall', 'floor', 'floor', 'floor', 'whiteboard', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'desk', 'monitor-pm', 'desk-items', 'floor', 'sign-dev', 'floor', 'floor', 'floor', 'wall'],
  // Row 6 - Meeting table | PM chair | Dev desk
  ['wall', 'lamp', 'floor', 'meeting-table', 'meeting-table', 'meeting-table', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'chair-up', 'floor', 'floor', 'desk', 'monitor-dev', 'desk-items', 'floor', 'wall'],
  // Row 7 - Meeting chairs | | Dev chair
  ['wall', 'floor', 'floor', 'chair-down', 'chair-down', 'chair-down', 'floor', 'floor', 'floor', 'coffee', 'water-cooler', 'floor', 'floor', 'floor', 'floor', 'floor', 'chair-up', 'floor', 'floor', 'wall'],
  // Row 8 - Designer area | Break area
  ['wall', 'sign-design', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'sign-qa', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'wall'],
  // Row 9 - Designer desk | | QA desk
  ['wall', 'desk', 'monitor-design', 'desk-items', 'floor', 'floor', 'printer', 'floor', 'floor', 'floor', 'floor', 'desk', 'monitor-qa', 'desk-items', 'floor', 'sign-lounge', 'floor', 'couch', 'couch', 'wall'],
  // Row 10 - Designer chair | | QA chair | Lounge
  ['wall', 'floor', 'chair-up', 'floor', 'floor', 'cabinet', 'floor', 'floor', 'trash', 'floor', 'floor', 'floor', 'chair-up', 'floor', 'floor', 'floor', 'rug', 'rug', 'floor', 'wall'],
  // Row 11
  ['wall', 'plant-big', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'plant', 'floor', 'floor', 'floor', 'floor', 'floor', 'rug', 'tv', 'floor-lamp', 'wall'],
  // Row 12
  ['wall', 'floor', 'floor', 'bookshelf', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'floor', 'rug', 'rug', 'floor', 'wall'],
  // Row 13 - Bottom wall
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
];

export default function GameWorld() {
  const { state, selectPersona } = useGame();

  const handleTileClick = () => {
    selectPersona(null);
  };

  return (
    <div className="game-world pixel-border">
      <div className="map-container">
        <div className="tile-grid">
          {officeMap.map((row, y) =>
            row.map((tileType, x) => (
              <Tile
                key={`${x}-${y}`}
                type={tileType}
                x={x}
                y={y}
                onClick={handleTileClick}
              />
            ))
          )}
        </div>
        <div className="persona-layer">
          {state.personas.map((persona) => (
            <Persona
              key={persona.id}
              persona={persona}
              isSelected={persona.id === state.selectedPersonaId}
              onClick={() => selectPersona(persona.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
