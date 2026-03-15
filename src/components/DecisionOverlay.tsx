import type { Decision } from '../types';

interface DecisionOverlayProps {
  decisions: Decision[];
  onDecision: (index: number) => void;
  visible: boolean;
}

export function DecisionOverlay({ decisions, onDecision, visible }: DecisionOverlayProps) {
  if (!visible) return null;

  const hasGifs = decisions.some((d) => d.gifSrc);

  return (
    <div className={`decision-overlay ${visible ? 'visible' : ''}`}>
      <p className="decision-prompt">¿Qué quieres hacer?</p>
      <div className={`decision-buttons ${hasGifs ? 'with-gifs' : ''}`}>
        {decisions.map((decision, index) => (
          <button
            key={decision.nextNodeId}
            className={`decision-btn ${hasGifs ? 'decision-btn-gif' : ''}`}
            onClick={() => onDecision(index)}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {decision.gifSrc && (
              <div className="decision-gif-wrapper">
                <img
                  src={decision.gifSrc}
                  alt={decision.label}
                  className="decision-gif"
                  loading="eager"
                />
              </div>
            )}
            <span className="decision-label">{decision.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
