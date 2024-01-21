import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Excalidraw } from "@excalidraw/excalidraw";
import Whiteboard from './Whiteboard';

describe('Whiteboard component', () => {
  test('should render Excalidraw component with correct props', () => {
    render(<Whiteboard />);

    const excalidrawComponent = screen.getByRole('Excalidraw');

    expect(excalidrawComponent).toBeInTheDocument();
    expect(excalidrawComponent).toHaveAttribute('onChange');
  });

  test('should call handleChanges function with correct arguments when Excalidraw component triggers the onChange event', () => {
    const handleChanges = jest.fn();
    render(<Whiteboard handleChanges={handleChanges} />);

    const excalidrawComponent = screen.getByRole('Excalidraw');

    fireEvent.change(excalidrawComponent, {
      target: { value: 'some data' },
    });

    expect(handleChanges).toHaveBeenCalledTimes(1);
    expect(handleChanges).toHaveBeenCalledWith('some data');
  });
});