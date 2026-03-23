import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders the dropdown with options', () => {
    render(
      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
      />
    );
    const optionElement = screen.getByText(/Option 1/i);
    expect(optionElement).toBeVisible();
  });

  test('applies disabled styles when the dropdown is disabled', () => {
    render(
      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
        disabled={true}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('cursor: not-allowed');
    expect(selectElement).toHaveStyle('background-color: #f5f5f5');
  });

  test('renders the Dropdown component and checks background color in disabled state', () => {
    render(
      <Dropdown
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ]}
        disabled={true}
      />
    );
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle('background-color: #f5f5f5');
  });
});
