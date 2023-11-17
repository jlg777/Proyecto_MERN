import React from "react";
import { useParams } from "react-router-dom";

export const TaskIdPage = () => {
  const { taskId } = useParams();
  return (
    <>
      <div>TaskIdPage</div>
      <p>El id es: {taskId}</p>
    </>
  );
};
