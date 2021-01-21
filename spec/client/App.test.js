import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../../client/components/App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
    expect(screen.getByText('Number of answers:')).toBeInTheDocument();
  });
  //TODO implement user-behavior/fireevent tests
});