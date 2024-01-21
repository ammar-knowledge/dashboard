import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreateQuizOverlay from './CreateQuizOverlay';

describe('CreateQuizOverlay', () => {
  test('renders correctly', () => {
    render(
      <CreateQuizOverlay
        open={true}
        onClose={jest.fn()}
        closeOverlay={jest.fn()}
      />
    );

    expect(screen.getByText('Grade')).toBeInTheDocument();
    expect(screen.getByLabelText('marks-input')).toBeInTheDocument();
  });

  test('updates marks input correctly', () => {
    render(
      <CreateQuizOverlay
        open={true}
        onClose={jest.fn()}
        closeOverlay={jest.fn()}
      />
    );

    const marksInput = screen.getByLabelText('marks-input');
    fireEvent.change(marksInput, { target: { value: '10' } });

    expect(marksInput.value).toBe('10');
  });
});