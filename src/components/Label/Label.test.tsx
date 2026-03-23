import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders the Label component with text', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeInTheDocument();
});

test('renders the Label component and checks visibility', () => {
  render(<Label text="Test Label" />);
  const labelElement = screen.getByText(/Test Label/i);
  expect(labelElement).toBeVisible();
});

test('Label component applies disabled styles', () => {
  render(<Label text="Disabled Label" disabled={true} />);
  const labelElement = screen.getByText('Disabled Label');
  expect(labelElement).toHaveStyle('cursor: not-allowed');
  expect(labelElement).toHaveStyle('opacity: 0.6');
});
