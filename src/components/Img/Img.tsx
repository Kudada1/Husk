import React from 'react';

export interface ImgProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  disabled?: boolean; // Add disabled prop
}

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled = false }) => {
  return (
    <div
      data-testid="img-root"
      style={{
        display: 'inline-block',
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Img;
