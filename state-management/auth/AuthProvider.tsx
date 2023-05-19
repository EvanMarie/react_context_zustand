import { ReactNode, useReducer } from "react";
import LoginContext from "./loginContext";

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type authAction = LoginAction | LogoutAction;

export const loginReducer = (state: string, action: authAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  // always be sure to import the correct ReactNode, from React
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginReducer, "");
  return (
    <LoginContext.Provider value={{ user, dispatch: dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export default AuthProvider;
