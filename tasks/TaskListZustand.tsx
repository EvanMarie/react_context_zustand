import useTasksStore from "./store";
import useUserStore from "../auth/store";

const TaskListZustand = () => {
  /* 
    const { tasks, addTask, deleteTask, taskTitle, setTaskTitle } = useTasksStore(); 
    const { user, login, logout } = useUserStore();
    Here, we're using destructuring assignment to get various properties from our 
    Zustand stores. From useTasksStore, we're getting the current list of tasks, 
    the current task title, and the functions to add a task, delete a task, and set 
    the task title. From useUserStore, we're getting the current user and the functions 
    to log in and log out.
    */

  const { tasks, addTask, deleteTask, taskTitle, setTaskTitle } =
    useTasksStore();
  const { user, login, logout } = useUserStore();

  return (
    /* This is the render function of the TaskListZustand component. It specifies what the 
 component should output to the DOM. */
    <>
      {/* This line renders a paragraph with the current user's name. */}
      <p>User: {user}</p>

      {/* This line renders an input element. The value of the input is bound to the
      taskTitle from the Zustand store, and whenever the value changes due to
      user input, it calls the setTaskTitle function to update the task title in
      the store. */}
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      {/* This line renders a button that, when clicked, calls the addTask function
      from the Zustand store. This function will create a new task with the
      current taskTitle and add it to the tasks list. The ul element contains a
      map function which maps each task in the tasks array to a li element,
      displaying the task title and a Delete button. */}
      <button onClick={addTask} className="btn btn-primary my-3">
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>

            {/* Inside each li, there is a Delete button that, when clicked, calls
            the deleteTask function from the Zustand store with the id of the
            task. This function will remove the task with the given id from the
            tasks list. */}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskListZustand;
