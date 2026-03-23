import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

test('renders the TableRow component with children', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Test Cell</td>
        </TableRow>
      </tbody>
    </table>
  );
  expect(screen.getByText('Test Cell')).toBeInTheDocument();
});

test('TableRow component is visible', () => {
  render(
    <table>
      <tbody>
        <TableRow>
          <td>Visible Cell</td>
        </TableRow>
      </tbody>
    </table>
  );
  const rowElement = screen.getByText('Visible Cell');
  expect(rowElement).toBeVisible();
});

test('TableRow component applies disabled styles', () => {
  render(
    <table>
      <tbody>
        <TableRow disabled={true}>
          <td>Disabled Cell</td>
        </TableRow>
      </tbody>
    </table>
  );
  const rowElement = screen.getByTestId('table-row-root');
  expect(rowElement).toHaveStyle('cursor: not-allowed');
  expect(rowElement).toHaveStyle('opacity: 0.6');
});
