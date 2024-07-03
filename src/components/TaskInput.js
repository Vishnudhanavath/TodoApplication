import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions';
import './TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <>
    <div className="task-input">
      <input
        type="text"
        className="form-control input-Element"
        placeholder="What needs to be done ?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
    </div>
     <button className="btn btn-primary addbutton" onClick={handleAddTask}>Add</button>
    </>
  );
};

export default TaskInput;
