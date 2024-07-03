import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_COMPLETE } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return { ...state, tasks: updatedTasksAdd };

    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
      return { ...state, tasks: updatedTasksDelete };

    case EDIT_TASK:
      const updatedTasksEdit = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.newTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit));
      return { ...state, tasks: updatedTasksEdit };

    case TOGGLE_COMPLETE:
      const updatedTasksToggle = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle));
      return { ...state, tasks: updatedTasksToggle };

    default:
      return state;
  }
};

export default taskReducer;
