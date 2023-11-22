import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { taskTypes } from "../Types/taskTypes";

const initialState = [
  {
    id: 1,
    title: "Mi primer tarea",
    completed: true,
  },
];

const useTasks = () => {                                                    
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const createTask = (title) => {
    dispatch({
      type: taskTypes.CREATE,
      payload: {
        title,
      },
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: taskTypes.DELETE,
      payload: {
        taskId,
      },
    });
  };

  return { tasks, createTask, deleteTask };
};

export default useTasks;
