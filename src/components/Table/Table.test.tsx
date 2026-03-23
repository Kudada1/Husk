import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

test('renders the Table component with children', () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Test Cell</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByText('Test Cell')).toBeInTheDocument();
});

test('Table component is visible', () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Visible Cell</td>
        </tr>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByText('Visible Cell');
  expect(tableElement).toBeVisible();
});

test('Table component applies disabled styles', () => {
  render(
    <Table disabled={true}>
      <tbody>
        <tr>
          <td>Disabled Cell</td>
        </tr>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByTestId('table-root');
  expect(tableElement).toHaveStyle('cursor: not-allowed');
  expect(tableElement).toHaveStyle('opacity: 0.6');
});
