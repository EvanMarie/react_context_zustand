import { useContext } from "react";
import LoginContext from "./loginContext";

const useAuth = () => useContext(LoginContext);

export default useAuth;
