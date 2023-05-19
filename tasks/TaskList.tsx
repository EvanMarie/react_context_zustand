import { useContext, useReducer, useState } from "react";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

// input state is a task array, and returns a taks array
const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];

    case "DELETE":
      return tasks.filter((task) => task.id !== action.taskId);
  }
};

const useTasks = () => useContext(TasksContext);

const TaskList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
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

export default TaskList;

/* This is a React functional component named TaskList which uses the useReducer 
and useState hooks from the React library for state management. The tasks are 
managed by a reducer function called tasksReducer that's imported from another 
module. This component is intended to render a list of tasks and provide the 
functionality to add and delete tasks. 

TaskList is a functional component. Inside this component, the useReducer 
hook is used to create the tasks state variable and the dispatch function. 
The initial state of tasks is an empty array, and tasksReducer is the function 
that will manage updates to the tasks state.

The "Add Task" button dispatches an action of type "ADD" to the reducer when 
clicked. The dispatch function is used to send this action object to the 
tasksReducer. The action object includes a task object with an id (current 
timestamp) and title ("Task " followed by the current timestamp).

The tasks are rendered in an unordered list (ul). For each task in the tasks 
array, a list item (li) is created with a key of task.id. Each list item contains 
the task title and a "Delete" button. The button dispatches a "DELETE" action with 
the task's ID when clicked.
*/
