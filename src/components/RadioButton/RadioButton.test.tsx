import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders the RadioButton component and handles change event', () => {
  const handleChange = jest.fn();
  render(<RadioButton name="example" value="option1" checked={false} onChange={handleChange} />);
  const radio = screen.getByRole('radio');
  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('RadioButton component is visible', () => {
  render(<RadioButton name="example" value="option1" checked={false} onChange={() => {}} />);
  const radio = screen.getByRole('radio');
  expect(radio).toBeVisible();
});

test('RadioButton component applies disabled styles', () => {
  render(
    <RadioButton
      name="example"
      value="option1"
      checked={false}
      onChange={() => {}}
      disabled={true}
    />
  );
  const radio = screen.getByRole('radio');
  expect(radio).toHaveStyle('cursor: not-allowed');
  expect(radio).toHaveStyle('opacity: 0.6');
});
