import { Persona as PersonaType } from '../../types';
import './Persona.css';

interface PersonaProps {
  persona: PersonaType;
  isSelected: boolean;
  onClick: () => void;
}

// Pixel art sprite data for each persona
const spriteColors: Record<string, { hair: string; shirt: string; pants: string; skin: string }> = {
  ceo: { hair: '#2a1a0a', shirt: '#1a365d', pants: '#1a1a2e', skin: '#f5d0c5' },
  cto: { hair: '#4a3728', shirt: '#4169E1', pants: '#2a2a4a', skin: '#c68642' },
  pm: { hair: '#8b4513', shirt: '#32CD32', pants: '#2f4f2f', skin: '#f5d0c5' },
  dev: { hair: '#1a1a1a', shirt: '#9370DB', pants: '#2a2a3a', skin: '#8d5524' },
  qa: { hair: '#d2691e', shirt: '#FF6347', pants: '#4a2a2a', skin: '#e8c4b8' },
  designer: { hair: '#ff69b4', shirt: '#FF69B4', pants: '#3a2a4a', skin: '#f1c27d' },
};

export default function Persona({ persona, isSelected, onClick }: PersonaProps) {
  const colors = spriteColors[persona.id] || spriteColors.dev;
  const hairStyle = persona.hairStyle || 'short';
  const accessory = persona.accessory;
  const facialHair = persona.facialHair || 'none';
  const clothing = persona.clothing || 'casual';
  const holdingItem = persona.holdingItem || 'none';
  const expression = persona.expression || 'neutral';

  return (
    <div
      className={`persona ${isSelected ? 'selected' : ''} ${persona.isMoving ? 'moving' : ''} ${persona.isBusy ? 'busy' : ''}`}
      style={{
        left: `calc(${persona.position.x} * var(--tile-size))`,
        top: `calc(${persona.position.y} * var(--tile-size))`,
        '--persona-color': persona.color,
        '--hair-color': colors.hair,
        '--shirt-color': colors.shirt,
        '--pants-color': colors.pants,
        '--skin-color': colors.skin,
      } as React.CSSProperties}
      onClick={onClick}
      data-direction={persona.direction}
    >
      <div className="persona-label">{persona.name}</div>
      <div className={`pixel-sprite clothing-${clothing}`} data-direction={persona.direction} data-hair={hairStyle} data-expression={expression}>
        {/* Hair - varies by style */}
        <div className={`sprite-hair hair-${hairStyle}`} />

        {/* Face with expression */}
        <div className={`sprite-face expression-${expression}`} />

        {/* Facial Hair */}
        {facialHair !== 'none' && <div className={`facial-hair facial-${facialHair}`} />}

        {/* Accessories */}
        {accessory === 'glasses' && <div className="accessory glasses" />}
        {accessory === 'headphones' && <div className="accessory headphones" />}
        {accessory === 'bowtie' && <div className="accessory bowtie" />}
        {accessory === 'hat' && <div className="accessory hat" />}
        {accessory === 'earrings' && <div className="accessory earrings" />}

        {/* Body with clothing variation */}
        <div className={`sprite-body body-${clothing}`}>
          {clothing === 'formal' && <div className="clothing-detail tie" />}
          {clothing === 'hoodie' && <div className="clothing-detail hood" />}
        </div>

        {/* Arms - modified if holding item */}
        <div className={`sprite-arms ${holdingItem !== 'none' ? 'holding' : ''}`}>
          {holdingItem === 'coffee' && <div className="held-item coffee-cup" />}
          {holdingItem === 'laptop' && <div className="held-item laptop-item" />}
          {holdingItem === 'tablet' && <div className="held-item tablet-item" />}
          {holdingItem === 'phone' && <div className="held-item phone-item" />}
        </div>

        {/* Legs with shoes */}
        <div className="sprite-legs">
          <div className="leg left">
            <div className="shoe" />
          </div>
          <div className="leg right">
            <div className="shoe" />
          </div>
        </div>

        {/* Shadow */}
        <div className="sprite-shadow" />
      </div>

      {/* Status indicators */}
      {persona.isBusy && <div className="thinking-bubble">💭</div>}
      {isSelected && <div className="selection-indicator" />}
    </div>
  );
}
