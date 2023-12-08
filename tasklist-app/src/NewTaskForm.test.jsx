import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewTaskForm from './NewTaskForm';

test('calls addTask function on form submission', () => {
  const addTaskMock = jest.fn();
  render(<NewTaskForm addTask={addTaskMock} />);

  const inputElement = screen.getByPlaceholderText(/Enter a new task/i);
  fireEvent.change(inputElement, { target: { value: 'Test Task' } });

  const addButtonElement = screen.getByText(/Add Task/i);
  fireEvent.click(addButtonElement);

  expect(addTaskMock).toHaveBeenCalledWith('Test Task');
});
