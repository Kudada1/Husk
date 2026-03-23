import React from 'react';

export interface LabelProps {
  text: string;
  disabled?: boolean; // Add disabled prop
}

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  return (
    <label
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {text}
    </label>
  );
};

export default Label;
