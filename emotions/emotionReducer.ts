export type EmotionAction = {
  type: "HAPPY" | "SAD" | "FEISTY" | "MEH";
};

const emotionReducer = (state = "", action: EmotionAction) => {
    switch (action.type) {
        case "HAPPY":
            return "I am so happy today!"

        case "SAD":
            return "I am so sad today..."

        case "FEISTY":
            return "I am feeling feisty today!"

        case "MEH":
            return "I am just meh..."
        
        default:
            return state;
    }
}

export default emotionReducer;

/*
- The EmotionAction type is defined as a TypeScript type. It specifies 
that an action should have a type property with one of the values: "HAPPY", 
"SAD", "FEISTY", or "MEH". This type is used to enforce type safety and 
ensure that only valid action types are used.

- The emotionReducer function is defined, which takes two parameters: state 
and action. The state parameter represents the current state, and the action 
parameter represents the action being dispatched.

- Inside the emotionReducer function, a switch statement is used to handle 
different action types. The action.type property is evaluated to determine 
which case matches the type of the action being dispatched.

- In each case, the reducer returns a new state based on the action type. 
For example, if the action type is "HAPPY", the reducer returns the string 
"I am so happy today!". Similarly, for other action types like "SAD", "FEISTY",
and "MEH", appropriate strings are returned.

- If the action type does not match any of the cases, the default case is executed, 
and the current state is returned as is.

- The reducer is responsible for handling actions and updating the state 
accordingly. It receives the current state and an action, and based on the 
action type, it returns a new state. The use of the switch statement allows 
the reducer to easily handle different action types and define the 
corresponding behavior for each type.

- It's important to note that the reducer function should be a pure function, 
meaning it should not modify the original state. Instead, it should return a 
new state object or value based on the provided inputs.
*/