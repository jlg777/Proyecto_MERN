import { taskTypes } from "../Types/taskTypes";

export const taskReducer = (state, action) => {
  if (action.type === taskTypes.CREATE) {
    const { title } = action.payload;
    return [
      ...state,
      {
        id: Date.now(),
        completed: false,
        title,
      },
    ];
  }

  if (action.type === taskTypes.DELETE) {
    const { taskId } = action.payload;
    return state.filter((task) => task.id !== taskId);
  }
  return state;
};
