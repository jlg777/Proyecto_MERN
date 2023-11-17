import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const taskList = [
  {
    id: 1,
    Title: "Tarea 1",
    Subtitle: "Subtarea",
    Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta nobis nemo est, suscipit quasi? Possimus laboriosam, nemo dicta obcaecati fugit nobis, repellat consequuntur et assumenda repudiandae impedit corporis optio?",
    Done: true,
  },
  {
    id: 2,
    Title: "Tarea 2",
    Subtitle: "Subtarea",
    Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta nobis nemo est, suscipit quasi? Possimus laboriosam, nemo dicta obcaecati fugit nobis, repellat consequuntur et assumenda repudiandae impedit corporis optio?",
    Done: false,
  },
  {
    id: 3,
    Title: "Tarea 3",
    Subtitle: "Subtarea",
    Text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta nobis nemo est, suscipit quasi? Possimus laboriosam, nemo dicta obcaecati fugit nobis, repellat consequuntur et assumenda repudiandae impedit corporis optio?",
    Done: true,
  },
];

const TaskListModel = ({ id, Title, Subtitle, Text, Done }) => {
  const [isCompleted, setisCompleted] = useState(Done);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{Subtitle}</Card.Subtitle>
          <Card.Text>{Text}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button onClick={() => { setisCompleted(!isCompleted) }} className={`btn ${isCompleted ? "btn-success" : "btn-warning"}`} variant="primary">{isCompleted ? "Completado" : "Completar"}</Button>

        </Card.Body>
      </Card>
    </>
  );
};

export const TaskModel = () => {
  return (
    <>
      <div>TaskModel</div>
      <div>
        {taskList.map((task) => {
          return (
            <TaskListModel
              key={task.id}
              Title={task.Title}
              Subtitle={task.Subtitle}
              Text={task.Text}
              Done={task.Done}
            />
          );
        })}
      </div>
    </>
  );
};
