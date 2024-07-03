import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete } from '../store/actions';
import './TaskList.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState('');

  const handleEditTask = (id, text) => {
    setEditingTask(id);
    setNewTask(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTask(id, newTask));
    setEditingTask(null);
    setNewTask('');
  };

  return (
    <div className="task-list">
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item">
            <div className="task-item">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={task.completed}
                onChange={() => dispatch(toggleComplete(task.id))}
              />
              {editingTask === task.id ? (
                <div>
                  <input
                    type="text"
                    className="form-control save-button"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                  <button className="btn btn-success save-button" onClick={() => handleSaveEdit(task.id)}>Save</button>
                </div>
              ) : (
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  className="todo-user-input"
                >
                  {task.text}
                </span>
              )}
            </div>
            <div className="task-buttons">
              {editingTask !== task.id && (
                <>
                  <button className="btn btn-warning" onClick={() => handleEditTask(task.id, task.text)}>
                    <AiFillEdit />
                  </button>
                  <button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.id))}>
                    <RiDeleteBin6Line />
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
