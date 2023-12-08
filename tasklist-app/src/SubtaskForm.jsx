import React, { useState } from 'react';

const SubtaskForm = ({ addSubtask }) => {
  const [subtask, setSubtask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subtask.trim() !== '') {
      addSubtask(subtask);
      setSubtask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a subtask"
        value={subtask}
        onChange={(e) => setSubtask(e.target.value)}
      />
      <button type="submit">Add Subtask</button>
    </form>
  );
};

export default SubtaskForm;
