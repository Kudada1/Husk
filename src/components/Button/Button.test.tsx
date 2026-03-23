import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeVisible();
  });

  test('applies disabled styles when the button is disabled', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle('background-color: #ccc');
  });

  test('renders the Button component and checks background color in disabled state', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toHaveStyle('background-color: #ccc');
  });
});
