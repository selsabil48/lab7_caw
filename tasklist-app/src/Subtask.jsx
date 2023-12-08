import React from 'react';

const Subtask = ({ subtask, deleteSubtask }) => {
  return (
    <div className="subtask">
      <span>{subtask}</span>
      <button onClick={deleteSubtask}>Done</button>
    </div>
  );
};

export default Subtask;
