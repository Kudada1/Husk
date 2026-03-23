import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

test('renders the TableFooter component with children', () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Test Footer</td>
        </tr>
      </TableFooter>
    </table>
  );
  expect(screen.getByText('Test Footer')).toBeInTheDocument();
});

test('TableFooter component is visible', () => {
  render(
    <table>
      <TableFooter>
        <tr>
          <td>Visible Footer</td>
        </tr>
      </TableFooter>
    </table>
  );
  const footerElement = screen.getByText('Visible Footer');
  expect(footerElement).toBeVisible();
});

test('TableFooter component applies disabled styles', () => {
  render(
    <table>
      <TableFooter disabled={true}>
        <tr>
          <td>Disabled Footer</td>
        </tr>
      </TableFooter>
    </table>
  );
  const footerElement = screen.getByTestId('table-footer-root');
  expect(footerElement).toHaveStyle('cursor: not-allowed');
  expect(footerElement).toHaveStyle('opacity: 0.6');
});
