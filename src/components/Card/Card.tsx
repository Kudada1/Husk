import React from 'react';

export interface CardProps {
  title: string;
  content: string;
  footer?: string;
  disabled?: boolean; // Add the disabled prop
}

const Card: React.FC<CardProps> = ({ title, content, footer, disabled = false }) => {
  return (
    <div
      data-testid="card-root"
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        backgroundColor: disabled ? '#f0f0f0' : 'white', // Greyed-out background when disabled
        cursor: disabled ? 'not-allowed' : 'pointer', // Not-allowed cursor when disabled
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
      }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Card;
