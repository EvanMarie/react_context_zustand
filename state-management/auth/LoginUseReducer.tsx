/* 
from Youtube: https://www.youtube.com/watch?v=9KzQ9xFSAEU
*/

import React, { useReducer } from "react";
import useLogin from "./useLogin";

/* 
The LoginUseReducer function represents a component that provides a 
form for user login, handles login and logout actions, and displays a 
welcome message to the logged-in user.

Here an interface LoginState is defined to specify the shape of the state 
object. The initialState is the initial state for the login form, which 
is an object of type LoginState.
*/

const initialState: LoginState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
  variant: "login",
};

interface LoginState {
  username: string;
  password: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
  variant: "login" | "forgetPassword";
}

/*
A LoginAction type is defined for actions that can be dispatched to the reducer. 
It can either be an object with a type of "login", "success", "error", or "logOut",
or an object with a type of "field" and additional properties fieldName and payload.
*/

type LoginAction =
  | { type: "login" | "success" | "error" | "logOut" }
  | { type: "field"; fieldName: string; payload: string };

/*
Defining the Reducer Function:
The loginReducer function is defined to handle state changes based on dispatched 
actions. It takes the current state and an action, and returns a new state. Each 
case in the switch statement corresponds to a different action type.
*/

function loginReducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}

/*
Creating the LoginUseReducer Component:
In the LoginUseReducer component, the useReducer hook is used to create the state 
variable and the dispatch function. The loginReducer is the function that manages 
updates to the state, and initialState is the initial value of the state.

The onSubmit function is an asynchronous function that handles the form submission. 
It first dispatches a "login" action, then it calls the useLogin function with the 
username and password from the state. If useLogin resolves, a "success" action is 
dispatched. If useLogin rejects, an "error" action is dispatched.
*/

export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await useLogin({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  /*
Rendering the Component:
In the return statement, the component renders a form for login if the user is 
not logged in (isLoggedIn is false), and a welcome message and a "Log Out" 
button if the user is logged in (isLoggedIn is true).

In the login form, the username and password fields are controlled inputs that 
dispatch "field" actions when their values change. The isLoading state variable 
is used to disable the submit button and change its text while the login operation 
is in progress.

If the error state variable is not an empty string, an error message is displayed 
above the form.
*/
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logOut" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Enter username and password:</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary mx-1"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/*
More of "FIELD ACTION":
A "field" action in this context is an action object that is used to update the value of a field in the state. In this case, the fields are username and password in the state object.

Here's the definition of a "field" action from the LoginAction type:
    { type: "field"; fieldName: string; payload: string }       

    - type: The type of the action. In this case, it's a string with the value 
      "field".
    - fieldName: The name of the field to update. It's a string that should match 
      one of the keys in the state object (username or password).
    - payload: The new value for the field. It's a string that will be used to 
      update the value of the field.

When a "field" action is dispatched to the reducer, the reducer updates the value 
of the specified field in the state. Here's the relevant code from the loginReducer 
function:
    case "field": {
        return {
            ...state,
            [action.fieldName]: action.payload,
        };
        }

This code creates a new object that is a copy of the current state, but with the 
specified field updated to the new value.

Here's an example of a "field" action being dispatched when the value of the 
username input field changes:
    onChange={(e) =>
        dispatch({
            type: "field",
            fieldName: "username",
            payload: e.currentTarget.value,
        })
        }

In this code, an onChange event handler dispatches a "field" action with the 
fieldName set to "username" and the payload set to the current value of the input 
field. This will update the username field in the state with the current value of 
the input field.
*/
