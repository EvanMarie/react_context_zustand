import { useContext } from "react";
import LoginContext from "./loginContext";

const LoginStatusContext = () => {
  // Tried to use AuthContext, but it didn't work.
  // const { user, dispatch } = useAuth();
  const { user, dispatch } = useContext(LoginContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="btn btn-primary mx-1"
          >
            Logout
          </button>
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

export default LoginStatusContext;
