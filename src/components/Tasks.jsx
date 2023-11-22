import { useRef } from "react";
import useTasks from "../hooks/useTasks";

const Tasks = () => {
  const { tasks, createTask, deleteTask } = useTasks();
  const formRef = useRef(null);

  return (
    <>
      <form ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(formData);
          const title = formData.get('title');
          console.log(title);
          createTask(title);
          formRef.current.reset();
        }}
      >
        <input type="text" placeholder="ingresa tu tarea" name="title" />
        <button type="submit">Crear Tarea</button>
      </form>
      <div>Task</div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <p>
              <span>{task.completed ? "Y" : "X"}</span>
              {task.title}
            </p>

            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        );
      })}
    </>
  );
};

export default Tasks;
