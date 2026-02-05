import { useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { Position } from '../types';

const MAP_WIDTH = 20;
const MAP_HEIGHT = 14;

// Home positions for each persona (where they sit at their workstation)
const HOME_POSITIONS: Record<string, Position> = {
  ceo: { x: 2, y: 3 },
  cto: { x: 16, y: 3 },
  pm: { x: 12, y: 6 },
  dev: { x: 16, y: 7 },
  qa: { x: 12, y: 10 },
  designer: { x: 2, y: 10 },
};

// Common areas personas might visit
const COMMON_AREAS: Position[] = [
  { x: 9, y: 7 },   // Coffee area
  { x: 10, y: 7 },  // Water cooler
  { x: 4, y: 6 },   // Meeting table
  { x: 5, y: 6 },   // Meeting table
  { x: 8, y: 5 },   // Hallway
  { x: 9, y: 5 },   // Hallway
];

// Blocked tiles (walls, furniture)
const isBlockedTile = (x: number, y: number): boolean => {
  // Walls
  if (x === 0 || x === 19 || y === 0 || y === 13) return true;
  // Internal walls
  if (x === 4 && y >= 1 && y <= 3) return true;
  if (x === 14 && y >= 1 && y <= 3) return true;

  // Furniture (desks, tables, plants, etc.)
  const blockedPositions = new Set([
    '1,1', '2,2', '3,2', // CEO area furniture
    '15,1', '18,1', '15,2', '16,2', '17,2', // CTO area furniture
    '1,4', '4,5', '3,6', '4,6', '5,6', '1,6', // Meeting area
    '11,5', '12,5', '13,5', '15,5', // PM/Dev desks
    '15,6', '16,6', '17,6', // Dev desk
    '9,7', '10,7', // Coffee/water cooler
    '1,8', '1,9', '2,9', '3,9', // Designer area
    '6,9', '5,10', '8,10', // Printer, cabinet, trash
    '11,9', '12,9', '13,9', // QA area
    '15,9', '17,9', '18,9', // Lounge
    '17,11', '18,11', // TV, lamp
    '1,11', '3,12', '10,11', // Plants, bookshelf
    '16,10', '17,10', '16,11', '17,11', '16,12', '17,12', '18,12', // Lounge rugs
  ]);

  return blockedPositions.has(`${x},${y}`);
};

const directions = ['up', 'down', 'left', 'right'] as const;

function getNextPosition(pos: Position, direction: typeof directions[number]): Position {
  switch (direction) {
    case 'up': return { x: pos.x, y: pos.y - 1 };
    case 'down': return { x: pos.x, y: pos.y + 1 };
    case 'left': return { x: pos.x - 1, y: pos.y };
    case 'right': return { x: pos.x + 1, y: pos.y };
  }
}

function getDistance(a: Position, b: Position): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function isValidPosition(pos: Position, occupiedPositions: Set<string>): boolean {
  if (pos.x < 0 || pos.x >= MAP_WIDTH || pos.y < 0 || pos.y >= MAP_HEIGHT) {
    return false;
  }
  if (isBlockedTile(pos.x, pos.y)) {
    return false;
  }
  const key = `${pos.x},${pos.y}`;
  return !occupiedPositions.has(key);
}

function getDirectionToward(from: Position, to: Position): typeof directions[number] {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? 'right' : 'left';
  } else {
    return dy > 0 ? 'down' : 'up';
  }
}

export function usePersonaMovement() {
  const { state, dispatch } = useGame();
  const intervalRef = useRef<number | null>(null);
  const personaStates = useRef<Record<string, { isWandering: boolean; targetPos?: Position }>>({});

  useEffect(() => {
    if (state.isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      state.personas.forEach((persona) => {
        // Don't move busy personas or selected persona
        if (persona.isBusy || persona.id === state.selectedPersonaId) {
          return;
        }

        const homePos = HOME_POSITIONS[persona.id];
        if (!homePos) return;

        // Initialize persona state if needed
        if (!personaStates.current[persona.id]) {
          personaStates.current[persona.id] = { isWandering: false };
        }

        const personaState = personaStates.current[persona.id];
        const currentPos = persona.position;
        const distanceFromHome = getDistance(currentPos, homePos);

        // Get occupied positions
        const occupiedPositions = new Set(
          state.personas
            .filter((p) => p.id !== persona.id)
            .map((p) => `${p.position.x},${p.position.y}`)
        );

        // Decide behavior based on current state
        let targetDirection: typeof directions[number] | null = null;

        // If at home position, 90% chance to stay, 10% to start wandering
        if (distanceFromHome === 0) {
          if (Math.random() < 0.1) {
            // Start wandering - pick a common area to visit
            personaState.isWandering = true;
            personaState.targetPos = COMMON_AREAS[Math.floor(Math.random() * COMMON_AREAS.length)];
          } else {
            // Stay at desk, just look around occasionally
            if (Math.random() < 0.2) {
              dispatch({
                type: 'UPDATE_PERSONA',
                persona: { ...persona, direction: 'up' }, // Face the monitor
              });
            }
            return;
          }
        }

        // If wandering, move toward target or return home
        if (personaState.isWandering && personaState.targetPos) {
          const distToTarget = getDistance(currentPos, personaState.targetPos);

          if (distToTarget <= 1) {
            // Reached target, spend some time here then go home
            if (Math.random() < 0.3) {
              personaState.isWandering = false;
              personaState.targetPos = homePos;
            } else {
              // Look around at the common area
              const randomDir = directions[Math.floor(Math.random() * directions.length)];
              dispatch({
                type: 'UPDATE_PERSONA',
                persona: { ...persona, direction: randomDir },
              });
              return;
            }
          }

          targetDirection = getDirectionToward(currentPos, personaState.targetPos);
        } else if (distanceFromHome > 0) {
          // Not at home and not wandering - return home
          targetDirection = getDirectionToward(currentPos, homePos);

          // 80% chance to move toward home, 20% to stay/look around
          if (Math.random() > 0.8) {
            return;
          }
        }

        if (!targetDirection) return;

        // Try to move in the target direction
        const nextPos = getNextPosition(currentPos, targetDirection);

        if (isValidPosition(nextPos, occupiedPositions)) {
          dispatch({
            type: 'UPDATE_PERSONA',
            persona: {
              ...persona,
              position: nextPos,
              direction: targetDirection,
              isMoving: true,
            },
          });

          // Reset moving state after animation
          setTimeout(() => {
            dispatch({
              type: 'UPDATE_PERSONA',
              persona: {
                ...persona,
                position: nextPos,
                direction: targetDirection!,
                isMoving: false,
              },
            });
          }, 200);
        } else {
          // Can't move in desired direction, try alternative
          const altDirections = directions.filter(d => d !== targetDirection);
          const altDir = altDirections[Math.floor(Math.random() * altDirections.length)];
          const altPos = getNextPosition(currentPos, altDir);

          if (isValidPosition(altPos, occupiedPositions)) {
            dispatch({
              type: 'UPDATE_PERSONA',
              persona: {
                ...persona,
                position: altPos,
                direction: altDir,
                isMoving: true,
              },
            });

            setTimeout(() => {
              dispatch({
                type: 'UPDATE_PERSONA',
                persona: {
                  ...persona,
                  position: altPos,
                  direction: altDir,
                  isMoving: false,
                },
              });
            }, 200);
          } else {
            // Just change direction
            dispatch({
              type: 'UPDATE_PERSONA',
              persona: { ...persona, direction: targetDirection },
            });
          }
        }
      });
    }, 1500); // Slower movement for more natural feeling

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isPaused, state.selectedPersonaId, state.personas, dispatch]);
}
