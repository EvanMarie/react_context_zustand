import { useContext } from "react";
import TasksContext from "./tasksContext";
import LoginStatusContext from "../auth/LoginStatusContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        Tasks Total: {tasks.length}
      </span>
      <LoginStatusContext />
    </nav>
  );
};

export default NavBar;
