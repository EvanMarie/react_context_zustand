import { useContext } from "react";
import LoginContext from "../auth/loginContext";
import TasksContext from "./tasksContext";

// Do no tneed anymore now that we have useTasks hook and TasksProvider
// const useTasks = () => useContext(TasksContext);

const useTasks = () => useContext(TasksContext);

const TaskListContext = () => {
  const { tasks, dispatch } = useTasks();
  // Tried to use useAuth, but it didn't work.
  const { user } = useContext(LoginContext);

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListContext;
