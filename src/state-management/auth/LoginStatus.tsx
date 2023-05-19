import { useReducer } from "react";
import { loginReducer } from "./AuthProvider";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginReducer, "");

  if (user)
    return (
      <>
        <div>
          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="btn btn-primary mx-1"
          >
            Logout
          </button>
          <span className="mx-2">{user}</span>
        </div>
      </>
    );
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "LOGIN", username: "Evan.Marie" })}
        className="btn btn-primary mx-1"
      >
        Login
      </button>
    </div>
  );
};

export default LoginStatus;
