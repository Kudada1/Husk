import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders the Text component with content', () => {
  render(<Text content="Test Content" />);
  expect(screen.getByText('Test Content')).toBeInTheDocument();
});

test('renders the Text component and checks visibility', () => {
  render(<Text content="Test Content" />);
  const textElement = screen.getByText(/Test Content/i);
  expect(textElement).toBeVisible();
});
