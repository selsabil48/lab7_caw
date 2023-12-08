// Task.js
import React, { useState, useEffect } from 'react';
import Subtask from './Subtask';
import SubtaskForm from './SubtaskForm'; 

const Task = ({ index, task, deleteTask }) => {
  const [subtasks, setSubtasks] = useState([]);

  useEffect(() => {
    // Add fade-in animation on mount
    const taskElement = document.getElementById(`task-${index}`);
    if (taskElement) {
      taskElement.style.opacity = 1;
    }
  }, [index]);

  const addSubtask = (subtask) => {
    setSubtasks([...subtasks, subtask]);
  };

  const deleteSubtask = (subtaskIndex) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== subtaskIndex);
    setSubtasks(updatedSubtasks);
  };

  return (
    <div className="task" id={`task-${index}`} style={{ opacity: 0, animation: 'fadeIn 0.5s ease-in-out forwards' }}>
      <div>{task}</div>
      <button onClick={() => deleteTask(index)}>X</button>
      <div>
        {subtasks.map((subtask, subtaskIndex) => (
          <Subtask
            key={subtaskIndex}
            subtask={subtask}
            deleteSubtask={() => deleteSubtask(subtaskIndex)}
          />
        ))}
      </div>
      <SubtaskForm addSubtask={addSubtask} />
    </div>
  );
};

export default Task;
