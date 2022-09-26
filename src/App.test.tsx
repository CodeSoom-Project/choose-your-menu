import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/메뉴 고르기/);
  expect(linkElement).toBeInTheDocument();
});
