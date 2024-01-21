import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Basic from './Basic';

test('should navigate to dashboard if token is present and not undefined', () => {
  // Mock the navigate function from react-router-dom
  const navigate = jest.fn();

  // Render the component
  render(<Basic navigate={navigate} />);

  // Set the token in local storage
  localStorage.setItem('user-token', 'test-token');

  // Check if navigate function is called with '/dashboard'
  expect(navigate).toHaveBeenCalledWith('/dashboard');
});

test('should not navigate to dashboard if token is undefined', () => {
  // Mock the navigate function from react-router-dom
  const navigate = jest.fn();

  // Render the component
  render(<Basic navigate={navigate} />);

  // Set the token in local storage as undefined
  localStorage.setItem('user-token', undefined);

  // Check if navigate function is not called
  expect(navigate).not.toHaveBeenCalled();
});

test('should not navigate to dashboard if token is not present', () => {
  // Mock the navigate function from react-router-dom
  const navigate = jest.fn();

  // Render the component
  render(<Basic navigate={navigate} />);

  // Remove the token from local storage
  localStorage.removeItem('user-token');

  // Check if navigate function is not called
  expect(navigate).not.toHaveBeenCalled();
});

test('should call handleLogin function on button click', () => {
  // Mock the navigate function from react-router-dom
  const navigate = jest.fn();

  // Render the component
  render(<Basic navigate={navigate} />);

  // Mock the axiosHttp.post function
  const axiosHttp = {
    post: jest.fn().mockResolvedValue({ data: { token: 'test-token' } })
  };

  // Mock the openSnakBar function
  const openSnakBar = jest.fn();

  // Mock the SaveLocal function
  const SaveLocal = jest.fn();

  // Set the payload for login
  const payload = {
    email: 'test@example.com',
    password: 'password'
  };

  // Get the email input field
  const emailInput = screen.getByLabelText('Email');

  // Get the password input field
  const passwordInput = screen.getByLabelText('Password');

  // Get the login button
  const loginButton = screen.getByRole('button', { name: 'Login' });

  // Enter values in the email and password input fields
  fireEvent.change(emailInput, { target: { value: payload.email } });
  fireEvent.change(passwordInput, { target: { value: payload.password } });

  // Click the login button
  fireEvent.click(loginButton);

  // Check if axiosHttp.post function is called with the correct arguments
  expect(axiosHttp.post).toHaveBeenCalledWith('/api/user/sign_in', payload);

  // Check if openSnakBar function is called with the correct arguments
  expect(openSnakBar).toHaveBeenCalledWith(
    { vertical: 'top', horizontal: 'right' },
    'Logged in Suuccessfully',
    false
  );

  // Check if SaveLocal function is called with the correct arguments
  expect(SaveLocal).toHaveBeenCalledWith('user-data', {
    email: payload.email,
    password: payload.password
  });
  expect(SaveLocal).toHaveBeenCalledWith('user-token', 'test-token');

  // Check if navigate function is called with '/dashboard'
  expect(navigate).toHaveBeenCalledWith('/dashboard');
});