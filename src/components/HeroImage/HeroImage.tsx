import React from 'react';

export interface HeroImageProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  disabled?: boolean; // Add disabled prop
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  description,
  disabled = false,
}) => {
  return (
    <div
      data-testid="hero-image-root"
      style={{
        textAlign: 'center',
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          filter: disabled ? 'grayscale(100%)' : 'none', // Apply grayscale filter when disabled
        }}
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HeroImage;
