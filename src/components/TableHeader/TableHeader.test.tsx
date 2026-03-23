import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('renders the TableHeader component with children', () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>Test Header</th>
        </tr>
      </TableHeader>
    </table>
  );
  expect(screen.getByText('Test Header')).toBeInTheDocument();
});

test('TableHeader component is visible', () => {
  render(
    <table>
      <TableHeader>
        <tr>
          <th>Visible Header</th>
        </tr>
      </TableHeader>
    </table>
  );
  const headerElement = screen.getByText('Visible Header');
  expect(headerElement).toBeVisible();
});

test('TableHeader component applies disabled styles', () => {
  render(
    <table>
      <TableHeader disabled={true}>
        <tr>
          <th>Disabled Header</th>
        </tr>
      </TableHeader>
    </table>
  );
  const headerElement = screen.getByTestId('table-header-root');
  expect(headerElement).toHaveStyle('cursor: not-allowed');
  expect(headerElement).toHaveStyle('opacity: 0.6');
});
