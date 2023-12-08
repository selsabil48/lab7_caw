import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

test('renders TaskList component', () => {
  render(<TaskList />);
  const newTaskFormElement = screen.getByText(/Add Task/i);
  expect(newTaskFormElement).toBeInTheDocument();
});
