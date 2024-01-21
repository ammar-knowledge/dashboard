import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders Dashboard component', () => {
  render(<Dashboard />);

  const profileOverview = screen.getByRole('region', { name: /profile overview/i });
  const dashboardTabs = screen.getByRole('region', { name: /dashboard tabs/i });

  expect(profileOverview).toBeInTheDocument();
  expect(dashboardTabs).toBeInTheDocument();
});