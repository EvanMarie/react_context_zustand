import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;   
}

/* passing the shape of the store, which is CounterStore
    arrow function takes set, which is a funciton for updating the state of the store
    it returns an object, so the {} is wrapped in () to avoid looking like a block
    of code 
    
    - increment takes the current state and returns the new state. 
    - set merges the property into the next state, so we do not have to ...spread things

    create returns a custom hook that we can use to access the store
*/

const useCounterStore = create<CounterStore>((set) => ({
    counter: 0,
    increment: () => set(state => ({ counter: state.counter + 1 })),
    reset: () => set(() => ({ counter: 0 })),
}));

/* if we are in development mode, we can mount the store devtool
 this will allow us to see the state of the store in the browser
 and also allow us to time travel debug with inspect - components */
if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("Counter Store", useCounterStore);
}

export default useCounterStore;