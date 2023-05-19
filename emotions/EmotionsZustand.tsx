import useEmotionsStore, { EmotionsStore, getEmotionMessage } from "./store";

/*
const { emotion, setEmotion, setMessage } = useEmotionsStore(); This line is using 
the useEmotionsStore hook to access the current state of the Zustand store and the 
functions for updating the state.
*/

const EmotionStatusZustand = () => {
  const { emotion, setEmotion, setMessage } = useEmotionsStore();

  /*
handleButtonClick is a function that takes an emotion as argument. 
Inside this function, it calls setEmotion and setMessage, effectively 
updating the emotion and message properties in the state store.
*/

  const handleButtonClick = (emotion: EmotionsStore["emotion"]) => {
    setEmotion(emotion);
    setMessage(emotion ? getEmotionMessage(emotion) : "");
  };

  /*
The return statement is the render method of this functional component. It includes 
four buttons, each associated with a different emotion. When a button is clicked, the 
handleButtonClick function is called with the corresponding emotion.

In the div with the class emotion_message, it displays the message associated with 
the current emotion in the state. It uses a ternary operator to check if emotion 
exists, and if it does, it calls getEmotionMessage to get the associated message. 
If emotion does not exist (null), it displays an empty string.
*/

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
        <span className="mx-2">
          {emotion ? getEmotionMessage(emotion) : ""}
        </span>
      </div>
    </>
  );
};

export default EmotionStatusZustand;
