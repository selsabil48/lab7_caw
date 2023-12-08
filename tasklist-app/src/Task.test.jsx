import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from './Task';

test('renders Task component', () => {
  const task = { text: 'Test Task', subtasks: [] };
  render(<Task task={task} index={0} deleteTask={() => {}} addSubtask={() => {}} />);

  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});

test('calls deleteTask function on button click', () => {
  const deleteTaskMock = jest.fn();
  const task = { text: 'Test Task', subtasks: [] };
  render(<Task task={task} index={0} deleteTask={deleteTaskMock} addSubtask={() => {}} />);

  const deleteButtonElement = screen.getByText(/X/i);
  fireEvent.click(deleteButtonElement);

  expect(deleteTaskMock).toHaveBeenCalledWith(0);
});

// Add more tests for the addSubtask functionality
