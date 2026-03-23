import React from 'react';

export interface TextProps {
  content: string;
  disabled?: boolean; // Add disabled prop
}

const Text: React.FC<TextProps> = ({ content, disabled = false }) => {
  return (
    <p
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {content}
    </p>
  );
};

export default Text;
