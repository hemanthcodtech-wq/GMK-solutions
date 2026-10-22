import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '', style = {}, maxRotation = 10, ...props }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlow({
      x: ((x / rect.width) * 100).toFixed(1),
      y: ((y / rect.height) * 100).toFixed(1),
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: transform ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      {/* Dynamic Cursor Light Sweep Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(0, 201, 216, ${glow.opacity}) 0%, transparent 60%)`,
          pointerEvents: 'none',
          transition: 'opacity 0.25s ease',
          zIndex: 2
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
