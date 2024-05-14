import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Post from './App';


describe('App component', () => {

  test('App renders without crashing', () => {
    render(<App />);
  });

  test('displays header content correctly', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to DevDiscolsures/i)).toBeInTheDocument();
    expect(screen.getByText(/a place for disclosure of knowledge/i)).toBeInTheDocument();
  });

  test(' Post renders without crashing', () => {
    render(<Post />);
  });

  test('displays post content correctly', () => {
    render(<Post />);
    expect(screen.getByText(/Object Oriented Programming/i)).toBeInTheDocument();
    expect(screen.getByText(/The bundling of data with the mechanisms or methods/i)).toBeInTheDocument();
    const learnMoreLink = screen.getByText(/Learn More/i);
    expect(learnMoreLink).toBeInTheDocument();
  });
});