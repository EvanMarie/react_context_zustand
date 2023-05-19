import { create } from "zustand";

/* 
The EmotionsStore interface is declared to define the shape of the state store. 
It includes two properties: emotion and message, and two methods for updating these 
properties: setEmotion and setMessage.
*/

export interface EmotionsStore {
  emotion: "HAPPY" | "SAD" | "FEISTY" | "MEH" | null;
  message: string;
  setEmotion: (emotion: EmotionsStore["emotion"]) => void;
  setMessage: (message: string) => void;
}

/*
const useEmotionsStore = create<EmotionsStore>((set) => ({... creates a new Zustand 
store using the create function. The set function is used to update the state in the 
store.

    - emotion: null, and message: "", are the initial states for the emotion and 
        message properties.

    - setEmotion: (emotion: EmotionsStore["emotion"]) => set({ emotion }) is a 
        function that takes an emotion as argument and uses the set function to 
        update the emotion property in the state.

    - Similarly, setMessage: (message: string) => set({ message }) is a function that 
        takes a message string and uses the set function to update the message property 
        in the state.
*/

const useEmotionsStore = create<EmotionsStore>((set) => ({
  emotion: null,
  message:"",
  setEmotion: (emotion: EmotionsStore["emotion"]) => set({ emotion }),
  setMessage: (message: string) => set({ message }),
}));

/*
getEmotionMessage function is a utility function that takes an emotion and returns a 
string message associated with the given emotion.
*/

export const getEmotionMessage = (emotion: EmotionsStore["emotion"]) => {
    switch (emotion) {
        case "HAPPY":
            return "I am so happy today!"

        case "SAD":
            return "I am so sad today..."

        case "FEISTY":
            return "I am feeling feisty today!"

        case "MEH":
            return "I am just meh..."
        
        default:
            return "";
    }
};

export default useEmotionsStore;
