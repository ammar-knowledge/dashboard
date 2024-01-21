import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTable from 'examples/Tables/DataTable';
import authorsTableData from 'layouts/tables/data/authorsTableData';

test('renders DataTable component', () => {
  const { columns, rows } = authorsTableData();
  render(
    <DataTable
      table={{ columns: columns, rows: rows }}
      isSorted={false}
      entriesPerPage={false}
      showTotalEntries={false}
      noEndBorder
    />
  );

  const table = screen.getByRole('table');
  expect(table).toBeInTheDocument();

  const tableHead = screen.getByRole('rowgroup');
  expect(tableHead).toBeInTheDocument();

  const tableRows = screen.getAllByRole('row');
  expect(tableRows.length).toBe(rows.length + 1); // +1 for the header row

  const tableCells = screen.getAllByRole('cell');
  expect(tableCells.length).toBe(columns.length * (rows.length + 1)); // +1 for the header row
});