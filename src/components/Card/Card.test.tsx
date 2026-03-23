import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders the Card component with title, content, and footer', () => {
  render(<Card title="Test Title" content="Test Content" footer="Test Footer" />);
  expect(screen.getByText('Test Title')).toBeInTheDocument();
  expect(screen.getByText('Test Content')).toBeInTheDocument();
  expect(screen.getByText('Test Footer')).toBeInTheDocument();
});

test('Card component is visible', () => {
  render(<Card title="Visible Card" content="Content" footer="Footer" />);
  const cardElement = screen.getByText('Visible Card');
  expect(cardElement).toBeVisible();
});

test('Card component applies disabled styles', () => {
  render(<Card title="Disabled Card" content="Content" footer="Footer" disabled={true} />);
  const cardElement = screen.getByTestId('card-root');
  expect(cardElement).toHaveStyle('cursor: not-allowed');
  expect(cardElement).toHaveStyle('background-color: #f0f0f0');
});
