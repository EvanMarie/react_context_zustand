import React from "react";
import { useReducer } from "react";
import emotionReducer, { EmotionAction } from "./emotionReducer";

const EmotionStatus = () => {
  const [message, dispatch] = useReducer(emotionReducer, "");

  const handleButtonClick = (type: EmotionAction["type"]) => {
    dispatch({ type });
  };

  return (
    <>
      <div className="emotion_buttons">
        <button
          onClick={() => handleButtonClick("HAPPY")}
          className="btn btn-primary mx-1"
        >
          😃 HAPPY!
        </button>
        <button
          onClick={() => handleButtonClick("SAD")}
          className="btn btn-primary mx-1"
        >
          🤕 sad...
        </button>
        <button
          onClick={() => handleButtonClick("FEISTY")}
          className="btn btn-primary mx-1"
        >
          😜 FEISTY!
        </button>
        <button
          onClick={() => handleButtonClick("MEH")}
          className="btn btn-primary mx-1"
        >
          😒 meh...
        </button>
      </div>
      <div className="emotion_message">
        <span className="mx-2">{message}</span>
      </div>
    </>
  );
};

export default EmotionStatus;

/* - The EmotionStatus functional component is defined. It represents the 
     component responsible for displaying buttons and the corresponding 
     message based on the selected emotion.

    - Inside the component, the useReducer hook is used to initialize the 
    state and dispatch function. It takes two arguments: the emotionReducer 
    function (imported from the reducer file) and the initial state value, 
    which is an empty string "". The hook returns the current state value 
    (message) and the dispatch function.

    - The handleButtonClick function is defined to handle button clicks. It 
    takes a parameter type with the type of EmotionAction["type"]. When a 
    button is clicked, this function is called with the corresponding action 
    type, and it dispatches the action by invoking dispatch with the action 
    object { type }.

    - The component's JSX code renders a series of buttons representing 
    different emotions. Each button has an onClick event handler that invokes 
    the handleButtonClick function with the corresponding action type ("HAPPY", 
    "SAD", "FEISTY", or "MEH").

    - The component also includes a <span> element to display the current 
    message state value. This element is rendered within a <div> element with 
    the class name "emotion_message".

    - The component uses the useReducer hook to manage state and dispatch 
    actions based on button clicks. The handleButtonClick function dispatches 
    the corresponding action type, and the reducer (defined in the reducer 
    file) handles the actions to update the state accordingly. The 
    component renders buttons and displays the message based on the 
    current state value.

*/
