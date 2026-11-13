import styles from "./HeroFallbackVisual.module.css";

const AI_NODES = [
  "AI Receptionist",
  "AI Sales Agents",
  "Customer Support",
  "Workflow Automation",
  "AI Chatbots",
  "CRM Automation",
];

export function HeroFallbackVisual() {
  return (
    <div className={styles.wrapper} role="img" aria-label="NAVCHETNAA AI Crystalline Prism connecting 6 AI Solutions">
      <div className={styles.headerTag}>
        <span>NEURAL ARCHITECTURE</span>
        <span className={styles.liveIndicator}>
          <span className={styles.liveDot} aria-hidden="true" />
          6 CONNECTED NODES
        </span>
      </div>

      <div className={styles.svgStage}>
        <svg viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Orbital Rings */}
          <ellipse cx="160" cy="110" rx="132" ry="64" stroke="#D0D7DE" strokeDasharray="4 4" />
          <ellipse cx="160" cy="110" rx="94" ry="88" stroke="#E7ECEF" />

          {/* Connecting Lines from Prism Core to Orbital Nodes */}
          <line x1="160" y1="110" x2="54" y2="54" stroke="#8CEE3F" strokeWidth="1.5" />
          <line x1="160" y1="110" x2="266" y2="54" stroke="#2DD4BF" strokeWidth="1.5" />
          <line x1="160" y1="110" x2="36" y2="116" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="160" y1="110" x2="284" y2="116" stroke="#8CEE3F" strokeWidth="1.5" />
          <line x1="160" y1="110" x2="64" y2="174" stroke="#2DD4BF" strokeWidth="1.5" />
          <line x1="160" y1="110" x2="256" y2="174" stroke="#38BDF8" strokeWidth="1.5" />

          {/* Central Crystalline Prism */}
          <polygon points="160,46 212,84 160,122 108,84" fill="#8CEE3F" fillOpacity="0.28" stroke="#101820" strokeWidth="1.5" />
          <polygon points="108,84 160,122 160,174 108,136" fill="#2DD4BF" fillOpacity="0.22" stroke="#101820" strokeWidth="1.5" />
          <polygon points="212,84 160,122 160,174 212,136" fill="#38BDF8" fillOpacity="0.22" stroke="#101820" strokeWidth="1.5" />
          <line x1="160" y1="46" x2="160" y2="174" stroke="#101820" strokeWidth="1.2" />
          <circle cx="160" cy="116" r="5" fill="#8CEE3F" stroke="#101820" strokeWidth="1.5" />

          {/* Orbital Node Points */}
          <circle cx="54" cy="54" r="5" fill="#101820" stroke="#8CEE3F" strokeWidth="2" />
          <circle cx="266" cy="54" r="5" fill="#101820" stroke="#2DD4BF" strokeWidth="2" />
          <circle cx="36" cy="116" r="5" fill="#101820" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="284" cy="116" r="5" fill="#101820" stroke="#8CEE3F" strokeWidth="2" />
          <circle cx="64" cy="174" r="5" fill="#101820" stroke="#2DD4BF" strokeWidth="2" />
          <circle cx="256" cy="174" r="5" fill="#101820" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      </div>

      <div className={styles.nodesGrid}>
        {AI_NODES.map((node) => (
          <div key={node} className={styles.nodeChip}>
            <span className={styles.nodeAccent} aria-hidden="true" />
            <span>{node}</span>
          </div>
        ))}
      </div>
    </div>
  );
}