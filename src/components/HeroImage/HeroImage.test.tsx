import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders the HeroImage component with correct content', () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/800x400"
      alt="Test Hero Image"
      title="Test Title"
      description="Test Description"
    />
  );
  expect(screen.getByAltText('Test Hero Image')).toBeInTheDocument();
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Description')).toBeInTheDocument();
});

test('HeroImage component is visible', () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/800x400"
      alt="Visible Hero Image"
      title="Visible Title"
      description="Visible Description"
    />
  );
  const heroImageElement = screen.getByAltText('Visible Hero Image');
  expect(heroImageElement).toBeVisible();
});

test('HeroImage component applies disabled styles', () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/800x400"
      alt="Disabled Hero Image"
      title="Disabled Title"
      description="Disabled Description"
      disabled={true}
    />
  );
  const heroImageElement = screen.getByTestId('hero-image-root');
  expect(heroImageElement).toHaveStyle('cursor: not-allowed');
  expect(heroImageElement).toHaveStyle('opacity: 0.6');
});
