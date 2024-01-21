import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContontEditorSecondScreen from './ContontEditorSecondScreen';

describe('ContentEditorSecondScreen', () => {
  test('renders add block button', () => {
    render(<ContontEditorSecondScreen />);

    const addBlockButton = screen.getByText('Add Block');
    expect(addBlockButton).toBeInTheDocument();
  });

  test('adds block when add block button is clicked', () => {
    render(<ContontEditorSecondScreen />);

    const addBlockButton = screen.getByText('Add Block');
    fireEvent.click(addBlockButton);

    const block = screen.getByTestId('block');
    expect(block).toBeInTheDocument();
  });
});