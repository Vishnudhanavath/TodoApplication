import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 className='todo-heading'>To Do Application</h1>
      <h1 class="create-task-heading">
        Create <span class="create-task-heading-subpart">Task</span>
        </h1>
      <TaskInput />
      <h1 class="create-task-heading">
        My <span class="create-task-heading-subpart">
        Tasks</span></h1>
      <TaskList />
    </div>
  );
};

export default App;


