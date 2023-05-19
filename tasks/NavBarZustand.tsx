import useCounterStore from "../counter/store";
import UserZustand from "../auth/UserZustand";
import useTasksStore from "./store";

const NavBarZustand = () => {
  const { tasks } = useTasksStore();
  // Using store to get counter state, not as object now, but as a value
  const counter = useCounterStore((s) => s.counter);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        Tasks Total: {tasks.length}
      </span>
      <span className="badge text-bg-secondary">Counter: {counter}</span>
      <UserZustand />
    </nav>
  );
};

export default NavBarZustand;
