import { taskTypes } from "../Types/taskTypes";
import useTasks from "../hooks/useTasks";

const Tasks = () => {
  const { tasks, createTask, deleteTask } = useTasks();

  return (
    <>
      <form
        onSubmit={(e) => {
          const formData = new FormData(e.target);
          console.log (formData)
          const title = formData.get("title");
          console.log (title)
          createTask({
            type: taskTypes.CREATE,
            payload: {
              title,
            },
          });
        }}
      >
        <input type="text" placeholder="ingresa tu tarea" name="title" />
        <button type="submit">Crear Tarea</button>
      </form>
      <div>Task</div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.title}</p>
            <span>{task.completed ? "Y" : "X"}</span>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        );
      })}
    </>
  );
};

export default Tasks;
