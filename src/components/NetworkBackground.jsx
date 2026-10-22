import React from 'react';
import './NetworkBackground.css';

const NetworkBackground = () => {
  return (
    <div className="network-bg-canvas" aria-hidden="true">
      <svg className="network-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C9D8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#25C878" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Network Connecting Lines */}
        <line x1="10%" y1="18%" x2="28%" y2="28%" className="net-line" />
        <line x1="28%" y1="28%" x2="45%" y2="15%" className="net-line" />
        <line x1="45%" y1="15%" x2="65%" y2="22%" className="net-line" />
        <line x1="65%" y1="22%" x2="88%" y2="14%" className="net-line" />
        
        <line x1="28%" y1="28%" x2="35%" y2="55%" className="net-line" />
        <line x1="35%" y1="55%" x2="58%" y2="62%" className="net-line" />
        <line x1="58%" y1="62%" x2="82%" y2="48%" className="net-line" />
        <line x1="65%" y1="22%" x2="82%" y2="48%" className="net-line" />

        <line x1="15%" y1="75%" x2="35%" y2="55%" className="net-line" />
        <line x1="35%" y1="55%" x2="48%" y2="85%" className="net-line" />
        <line x1="48%" y1="85%" x2="72%" y2="82%" className="net-line" />
        <line x1="72%" y1="82%" x2="90%" y2="70%" className="net-line" />

        {/* Pulsing Nodes */}
        <circle cx="10%" cy="18%" r="3.5" className="net-node" />
        <circle cx="28%" cy="28%" r="4" className="net-node-emerald" />
        <circle cx="45%" cy="15%" r="3.5" className="net-node" />
        <circle cx="65%" cy="22%" r="4" className="net-node-emerald" />
        <circle cx="88%" cy="14%" r="3" className="net-node" />

        <circle cx="35%" cy="55%" r="4" className="net-node" />
        <circle cx="58%" cy="62%" r="4" className="net-node-emerald" />
        <circle cx="82%" cy="48%" r="3.5" className="net-node" />

        <circle cx="15%" cy="75%" r="3" className="net-node" />
        <circle cx="48%" cy="85%" r="3.5" className="net-node-emerald" />
        <circle cx="72%" cy="82%" r="4" className="net-node" />
        <circle cx="90%" cy="70%" r="3" className="net-node-emerald" />
      </svg>
    </div>
  );
};

export default NetworkBackground;
