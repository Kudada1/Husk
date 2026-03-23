import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

test('renders the TableCell component with children', () => {
  render(<TableCell>Test Cell</TableCell>);
  expect(screen.getByText('Test Cell')).toBeInTheDocument();
});

test('TableCell component is visible', () => {
  render(<TableCell>Visible Cell</TableCell>);
  const cellElement = screen.getByText('Visible Cell');
  expect(cellElement).toBeVisible();
});

test('TableCell component applies disabled styles', () => {
  render(<TableCell disabled={true}>Disabled Cell</TableCell>);
  const cellElement = screen.getByText('Disabled Cell');
  expect(cellElement).toHaveStyle('cursor: not-allowed');
  expect(cellElement).toHaveStyle('opacity: 0.6');
});
