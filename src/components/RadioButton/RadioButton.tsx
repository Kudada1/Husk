import React from 'react';

export interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; // Add disabled prop
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled} // Disable interaction when disabled
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer', // Change cursor when disabled
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
      }}
    />
  );
};

export default RadioButton;
