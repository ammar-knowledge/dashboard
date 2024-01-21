import React from 'react';
import { render, screen } from '@testing-library/react';
import verticalBarChartData from './verticalBarChartData';

test('renders vertical bar chart data', () => {
  render(<VerticalBarChart data={verticalBarChartData} />);
  
  const chartLabels = screen.getAllByRole('listitem');
  expect(chartLabels).toHaveLength(verticalBarChartData.labels.length);
  
  const chartData = screen.getByRole('list');
  expect(chartData).toBeInTheDocument();
});