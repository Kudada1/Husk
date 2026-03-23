import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Component Library Showcase', () => {
  render(<App />);
  const headingElement = screen.getByText(/Component Library Showcase/i);
  expect(headingElement).toBeInTheDocument();
});
