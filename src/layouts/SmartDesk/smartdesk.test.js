import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomTabPanel from './CustomTabPanel';

test('renders CustomTabPanel component', () => {
  render(
    <CustomTabPanel value={0} index={0}>
      Item One
    </CustomTabPanel>
  );

  const tabPanelElement = screen.getByText(/Item One/i);
  expect(tabPanelElement).toBeInTheDocument();
});

test('renders CustomTabPanel component with different value and index', () => {
  render(
    <CustomTabPanel value={1} index={1}>
      Item Two
    </CustomTabPanel>
  );

  const tabPanelElement = screen.getByText(/Item Two/i);
  expect(tabPanelElement).toBeInTheDocument();
});

test('renders CustomTabPanel component with demo', () => {
  render(
    <CustomTabPanel value={2} index={2}>
      <Demo />
    </CustomTabPanel>
  );

  const demoElement = screen.getByTestId('demo-component');
  expect(demoElement).toBeInTheDocument();
});