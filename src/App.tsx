import CounterNorm from "./state-management/counter/CounterNorm";
import EmotionStatus from "./state-management/emotions/EmotionStatus";
import LoginUseReducer from "./state-management/auth/LoginUseReducer";
import NavBar from "./state-management/tasks/NavBar";
import HomePage from "./state-management/tasks/HomePage";
import TasksProvider from "./state-management/tasks/TaskProvider";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import AuthProvider from "./state-management/auth/AuthProvider";
import CounterWithReducer from "./state-management/counter/CounterWithReducer";
import CounterZustand from "./state-management/counter/CounterZustand";
import NavBarZustand from "./state-management/tasks/NavBarZustand";
import UserZustand from "./state-management/auth/UserZustand";
import EmotionStatusZustand from "./state-management/emotions/EmotionsZustand";
import TaskListZustand from "./state-management/tasks/TaskListZustand";
import useUserStore from "./state-management/auth/store";

function App() {
  const { user } = useUserStore();
  return (
    <div className="big_container">
      <div className="small_container">
        <h3>Normal Counter</h3>
        <CounterNorm />
      </div>

      <div className="small_container">
        <h3>Counter with Reducer</h3>
        <CounterWithReducer />
      </div>

      <div className="small_container">
        <h3>Task List</h3>
        <TaskList />
      </div>

      <div className="small_container">
        <h3>Login Status</h3>
        <LoginStatus />
      </div>

      <div className="small_container">
        <h3>Emotion Status</h3>
        <EmotionStatus />
      </div>

      <div className="small_container">
        <h3>Login (Youtube)</h3>
        <LoginUseReducer />
      </div>

      <div className="small_container">
        <h3>Tasks & Login: React Context</h3>
        <AuthProvider>
          <TasksProvider>
            <NavBar />
            <HomePage />
          </TasksProvider>
        </AuthProvider>
      </div>

      <hr />
      <h2>ZUSTAND</h2>
      <div className="small_container">
        <h3>Zustand Counter</h3>
        <h4>(Counter state shared with navbar counter.)</h4>
        <CounterZustand />
      </div>

      <div className="small_container">
        <h3>Zustand User Authentication</h3>
        <UserZustand />
        <h4>User: {user}</h4>
      </div>

      <div className="small_container">
        <h3>Zustand Emotion Status</h3>
        <EmotionStatusZustand />
      </div>

      <div className="small_container">
        <h3>Zustand Task Lists with Input</h3>
        <NavBarZustand />
        <TaskListZustand />
      </div>
    </div>
  );
}

export default App;
