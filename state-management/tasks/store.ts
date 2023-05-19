import { create } from "zustand";

/* 
export interface Task {...} and interface TasksStore {...}
These lines define TypeScript interfaces to provide type checking. The Task 
interface describes what a Task object should look like, while TasksStore 
describes the structure and types of the Zustand store.
*/

export interface Task {
  id: number;
  title: string;
}

interface TasksStore {
  tasks: Task[];
  taskTitle: string;
  addTask: () => void;
  deleteTask: (id: number) => void;
  setTaskTitle: (title: string) => void;
}

/*
const useTasksStore = create<TasksStore>((set) => {...});
Here, the create function is called to create a new Zustand store. The TasksStore 
interface is passed as a type parameter to ensure the created store conforms to 
the defined structure. The create function takes a callback function as an argument, 
which receives a set function to be used for updating the store's state.

tasks: [], taskTitle: "",
Inside the callback, initial states for the tasks array and taskTitle string are set 
to an empty array and an empty string, respectively.

addTask: () => set((state) => {...}),
This line defines an addTask action for adding a new task to the tasks array. The 
set function updates the state by taking a function that receives the current state 
and returns the new state. A new task is created with a unique ID (using Date.now()) 
and the current taskTitle. The new task is added to the end of the tasks array and 
taskTitle is reset to an empty string.

deleteTask: (id) => set((state) => {...}),
This line defines a deleteTask action for deleting a task from the tasks array. The 
set function updates the tasks array to a new array that does not include the task 
with the given ID.

setTaskTitle: (title) => set(() => ({ taskTitle: title }))
This line defines a setTaskTitle action for updating the taskTitle state. The set 
function updates the taskTitle state to the passed title.
*/

const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  taskTitle: "",
  addTask: () => set((state) => {
    const newTask = { id: Date.now(), title: state.taskTitle };
    return { tasks: [...state.tasks, newTask], taskTitle: "" };
  }),
  deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  setTaskTitle: (title) => set(() => ({ taskTitle: title }))
}));

export default useTasksStore;
