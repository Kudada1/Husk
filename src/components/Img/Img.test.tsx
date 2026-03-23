import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

test('renders the Img component with correct attributes', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Test Image" width={150} height={150} />);
  const image = screen.getByAltText('Test Image');
  expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  expect(image).toHaveAttribute('width', '150');
  expect(image).toHaveAttribute('height', '150');
});

test('Img component is visible', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Visible Image" />);
  const image = screen.getByAltText('Visible Image');
  expect(image).toBeVisible();
});

test('Img component applies disabled styles', () => {
  render(<Img src="https://via.placeholder.com/150" alt="Disabled Image" disabled={true} />);
  const image = screen.getByTestId('img-root');
  expect(image).toHaveStyle('cursor: not-allowed');
  expect(image).toHaveStyle('opacity: 0.6');
});
